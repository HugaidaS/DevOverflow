import Credentials from "@auth/core/providers/credentials";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";

import { IUserDoc } from "@/database/user.model";
import { SignInSchema } from "@/lib/validations";

import { IAccountDoc } from "./database/account.model";
import { api } from "./lib/api";
import { ActionResponse } from "./types/global";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub,
    Google,
    Credentials({
      async authorize(credentials) {
        const validatedFields = SignInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const { data: existingAccount } = (await api.users.getByProvider(
            email
          )) as ActionResponse<IAccountDoc>;

          if (!existingAccount) return null;

          const { data: existingUser } = (await api.users.getById(
            existingAccount.userId.toString()
          )) as ActionResponse<IUserDoc>;

          if (!existingUser) return null;

          const isValidPassword = await bcrypt.compare(
            password,
            existingAccount.password!
          );

          if (isValidPassword) {
            return {
              id: existingUser.id,
              name: existingUser.name,
              email: existingUser.email,
              image: existingUser.image,
            };
          }
        }

        return null;
      },
    }),
  ],
  //  By default, the `id` property does not exist on `token` or `session`. See the [TypeScript](https://authjs.dev/getting-started/typescript) on how to add it.
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub!;
      }
      return session;
    },
    async jwt({ token, account, session }) {
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

      return session;
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

// {
//   async authorize(credentials) {
//   const validatedFields = SignInSchema.safeParse(credentials);
//
//   if (validatedFields.success) {
//     const { email, password } = validatedFields.data;
//     const {data: existingUser} = awaiit api.users.getByProvider({email})
//   }
// },
// }
