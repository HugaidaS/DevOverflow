import Image from "next/image";
import Link from "next/link";
import React from "react";

import { auth, signOut } from "@/auth";
import NavLinks from "@/components/navigation/navbar/NavLinks";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const LeftSideBar = async () => {
  const session = await auth();

  return (
    <div className="background-light900_dark200 flex max-w-[266px] flex-col justify-between px-5 py-16 max-sm:hidden lg:w-full">
      <div className="flex flex-col gap-3">
        <NavLinks />
      </div>
      {session?.user?.name ? (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            type="submit"
            className="flex items-center justify-center gap-5 bg-transparent p-4 lg:justify-start"
          >
            <Image
              src="/icons/logout.svg"
              alt="logout"
              width={24}
              height={24}
              className="invert-colors"
            />
            <div className="base-medium max-lg:hidden">Logout</div>
          </button>
        </form>
      ) : (
        <div className="flex flex-col gap-3">
          <Link href={ROUTES.SIGN_IN}>
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient">Log In</span>
            </Button>
          </Link>
          <Link href={ROUTES.SIGN_UP}>
            <Button
              className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px]
                  w-full rounded-lg border px-4 py-3 shadow-none"
            >
              <span>Sign Up</span>
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default LeftSideBar;
