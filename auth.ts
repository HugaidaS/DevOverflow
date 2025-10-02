import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import NextAuth from "next-auth";

import { IAccountDoc } from "./database/account.model";
import { api } from "./lib/api";
import { ActionResponse } from "./types/global";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  //  By default, the `id` property does not exist on `token` or `session`. See the [TypeScript](https://authjs.dev/getting-started/typescript) on how to add it.
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
    async jwt({ token, account }) {
      if (!account) return token;

      const { data: existingAccount, success } =
        (await api.accounts.getByProvider(
          account.type === "credentials"
            ? token.email!
            : account.providerAccountId
        )) as ActionResponse<IAccountDoc>;

      if (!success || !existingAccount) return token;

      const userId = existingAccount.userId.toString();
      token.sub = userId;
    },
    async signIn({ user, account, profile }) {
      if (account?.type === "credentials") return true;

      if (!account || !user) return false;

      const userInfo = {
        name: user.name!,
        email: user.email!,
        username:
          account.provider === "github"
            ? (profile?.login as string)
            : user.name?.toLowerCase(),
        image: user.image!,
      };

      const { success } = (await api.auth.oAuthSignIn({
        user: userInfo,
        provider: account.provider as "google" | "github",
        providerAccountId: account.providerAccountId,
      })) as ActionResponse;

      if (!success) return false;

      return success;
    },
  },
});
