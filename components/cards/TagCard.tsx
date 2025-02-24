import Link from "next/link";
import React from "react";

import { Badge } from "@/components/ui/badge";
import ROUTES from "@/constants/routes";

interface TagCardProps {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({
  _id,
  name,
  questions,
  showCount = true,
  compact = false,
}: TagCardProps) => {
  return (
    <Link href={ROUTES.TAGS(_id)} className="flex justify-between gap-2">
      <Badge className="background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i>ICON</i>
          <span>{name}</span>
        </div>
      </Badge>
    </Link>
  );
};
export default TagCard;
