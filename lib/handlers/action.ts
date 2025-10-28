"use server";

import { Session } from "next-auth";
import z, { ZodError, ZodType } from "zod";

import { auth } from "@/auth";
import dbConnect from "@/lib/mongoose";

import { UnauthorizedError, ValidationError } from "../http-errors";

type ActionOptions<T> = {
  params?: T;
  schema?: ZodType<T>;
  authorize?: boolean;
};

// Check the schema, authorize, and connect to database, so we can safely proceed with the action.
async function action<T>({
  params,
  schema,
  authorize = false,
}: ActionOptions<T>) {
  if (schema && params) {
    try {
      schema.parse(params);
    } catch (error) {
      if (error instanceof ZodError) {
        return new ValidationError(
          z.treeifyError(error) as Record<string, string[]>
        );
      } else {
        return Error("Schema validation failed");
      }
    }
  }

  let session: Session | null = null;

  if (authorize) {
    session = await auth();

    if (!session) {
      return new UnauthorizedError("Unauthorized");
    }

    await dbConnect();
  }

  return { params, session };
}

export default action;
