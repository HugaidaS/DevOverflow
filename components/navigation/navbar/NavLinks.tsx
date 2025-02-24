"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import { SheetClose } from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import ROUTES from "@/constants/routes";
import { cn } from "@/lib/utils";

const NavLinks = ({
  isMobileNav = false,
  userId,
}: {
  isMobileNav?: boolean;
  userId?: string;
}) => {
  const pathName = usePathname();
  return (
    <>
      {sidebarLinks.map((link) => {
        const isActive =
          (pathName.includes(link.route) && link.route.length > 1) ||
          pathName === link.route;

        if (link.route === "/profile") {
          if (userId) link.route = ROUTES.PROFILE(userId);
          else return null;
        }

        const LinkComponent = (
          <Link
            href={link.route}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-5 bg-transparent p-4"
            )}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={20}
              height={20}
              className={cn({
                "invert-colors": !isActive,
              })}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {link.label}
            </p>
          </Link>
        );

        return isMobileNav ? (
          <SheetClose asChild key={link.label}>
            {LinkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={link.label}>{LinkComponent}</React.Fragment>
        );
      })}
    </>
  );
};
export default NavLinks;
