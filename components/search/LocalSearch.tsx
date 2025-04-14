"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { formUrlQuery } from "@/lib/url";

interface LocalSearchProps {
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
  route: string;
}

const LocalSearch = ({
  imgSrc,
  placeholder,
  otherClasses,
  route,
}: LocalSearchProps) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const router = useRouter();

  useEffect(() => {
    if (searchQuery) {
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "query",
        value: searchQuery,
      });

      router.push(newUrl, {
        scroll: false,
      });
    } else {
      // TODO: finish this
    }
  }, [searchQuery, router, route, searchParams]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image
        src={imgSrc}
        width={24}
        height={24}
        alt="Search icon"
        className="cursor-pointer"
      />
      <Input
        type="'text"
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};
export default LocalSearch;
