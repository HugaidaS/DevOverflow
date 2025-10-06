"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { toast } from "@/hooks/use-toast";

const SocialAuthForm = () => {
  const buttonClasses =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signIn(provider, {
        redirectTo: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Sign-in failed",
        description:
          error instanceof Error ? error.message : "An error occurred",
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClasses} onClick={() => handleSignIn("github")}>
        <Image
          src="icons/github.svg"
          alt="Github"
          width={20}
          height={20}
          className="inver-colors mr-2.5 object-contain"
        />
        <span>Log In with GitHub</span>
      </Button>
      <Button className={buttonClasses} onClick={() => handleSignIn("google")}>
        <Image
          src="icons/google.svg"
          alt="Github"
          width={20}
          height={20}
          className="inver-colors mr-2.5 object-contain"
        />
        <span>Log In with Google</span>
      </Button>
    </div>
  );
};
export default SocialAuthForm;
