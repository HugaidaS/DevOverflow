import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ROUTES from "@/constants/routes";

const UserAvatar = ({
  id,
  name,
  imageURL,
  className = "size-9",
}: {
  id: string;
  name: string;
  imageURL?: string;
  className?: string;
}) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Link href={ROUTES.PROFILE(id)}>
      <Avatar className={className}>
        {imageURL ? (
          <Image
            src={imageURL}
            alt={name}
            className="size-full rounded-full object-cover"
            width={36}
            height={36}
            quality={100}
          />
        ) : (
          <AvatarFallback className="primary-gradient font-space-grotesk font-bold tracking-wider text-white">
            {initials}
          </AvatarFallback>
        )}
      </Avatar>
    </Link>
  );
};
export default UserAvatar;
