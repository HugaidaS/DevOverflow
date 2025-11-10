export interface SigninWithOAuthParams {
  provider: "google" | "github";
  providerAccountId: string;
  user: {
    name: string;
    username?: string;
    email: string;
    image?: string;
  };
}

export interface AuthCredentials {
  email: string;
  name: string;
  username: string;
  password: string;
}
