import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  textStyles?: string;
  imgStyles?: string;
  href?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  textStyles = "small-medium text-dark400_light800",
  imgStyles = "size-4",
  href,
  isAuthor = false,
}: Props) => {
  const metricContent = (
    <div className="flex-center gap-1">
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${isAuthor ? "rounded-full" : ""} ${imgStyles}`}
      />

      <p className={`${textStyles} flex items-center gap-1`}>{value}</p>
      <span
        className={`small-regular line-clamp-1 ${isAuthor ? "max-sm:hidden" : ""}`}
      >
        {title}
      </span>
    </div>
  );
  return href ? (
    <Link href={href}>{metricContent}</Link>
  ) : (
    <div>{metricContent}</div>
  );
};
export default Metric;
