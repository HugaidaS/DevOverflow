import React from "react";

import { getTags } from "@/lib/actions/tag.action";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Tags = async ({ searchParams }: SearchParams) => {
  const { page, pageSize, query, filter } = await searchParams;

  const { success, data, error } = await getTags({
    page: Number(page) || 1,
    pageSize: Number(pageSize) || 10,
    query: query || "",
    filter: filter || "",
  });

  console.log({ success, data, error });
  return <div>Tags</div>;
};
export default Tags;
