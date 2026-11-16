"use server";

import { FilterQuery } from "mongoose";

import QuestionModel from "@/database/question.model";
import TagModel from "@/database/tag.model";
import action from "@/lib/handlers/action";
import handleError from "@/lib/handlers/error";
import { PaginatedSearchParamsSchema } from "@/lib/validations";
import {
  ActionResponse,
  ErrorResponse,
  PaginatedSearchParams,
  Tag,
} from "@/types/global";

export async function getTags(
  params: PaginatedSearchParams
): Promise<ActionResponse<{ tags: Tag[]; isNext: boolean }>> {
  const validationResult = await action({
    params,
    schema: PaginatedSearchParamsSchema,
  });

  if (validationResult instanceof Error) {
    return handleError(validationResult) as ErrorResponse;
  }

  const { page = 1, pageSize = 10, query, filter } = validationResult.params!;

  const skip = (page - 1) * pageSize;
  const limit = pageSize;

  const constructedFilterQuery: FilterQuery<typeof QuestionModel> = {};

  if (filter === "recommended") {
    return {
      success: true,
      data: {
        tags: [],
        isNext: false,
      },
    };
  }

  if (query) {
    constructedFilterQuery.$or = [
      { title: { $regex: new RegExp(`^${query}$`, "i") } },
      { content: { $regex: new RegExp(`^${query}$`, "i") } },
    ];
  }

  let sortCriteria = {};

  switch (filter) {
    case "popular":
      sortCriteria = { questions: -1 };
      break;
    case "recent":
      sortCriteria = { createdAt: -1 };
      break;
    case "oldest":
      sortCriteria = { createdAt: 1 };
      break;
    case "name":
      sortCriteria = { name: 1 };
      break;
    default:
      sortCriteria = { questions: -1 };
      break;
  }

  try {
    const totalQuestions = await TagModel.countDocuments(
      constructedFilterQuery
    );

    const questions = await TagModel.find(constructedFilterQuery)
      .sort(sortCriteria)
      .skip(skip)
      .limit(limit);

    const isNext = totalQuestions > skip + questions.length;

    return {
      success: true,
      data: {
        // Parsing fixes the error with passing large json payloads in server actions
        tags: JSON.parse(JSON.stringify(questions)),
        isNext,
      },
    };
  } catch (err) {
    return handleError(err) as ErrorResponse;
  }
}
