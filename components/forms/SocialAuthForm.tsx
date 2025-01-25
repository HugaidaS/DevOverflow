import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";

const SocialAuthForm = () => {
  const buttonClasses =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={buttonClasses}>
        <Image
          src="icons/github.svg"
          alt="Github"
          width={20}
          height={20}
          className="inver-colors mr-2.5 object-contain"
        />
        <span>Log In with GitHub</span>
      </Button>
      <Button className={buttonClasses}>
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
