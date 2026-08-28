import { notFound, redirect } from "next/navigation";
import React from "react";

import { auth } from "@/auth";
import QuestionForm from "@/components/forms/QuestionForm";
import ROUTES from "@/constants/routes";
import { getQuestion } from "@/lib/actions/question.action";
import { RouteParams } from "@/types/global";

const EditQuestion = async ({ params }: RouteParams) => {
  const session = await auth();
  const { id } = await params;

  if (!id) return notFound();

  const { data: question, success } = await getQuestion({ questionId: id });
  if (!success) return notFound();

  if (question?.author !== session?.user?.id) redirect(ROUTES.QUESTION(id));

  if (!session) {
    redirect(ROUTES.SIGN_IN);
  }

  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Edit your question</h1>
      <main>
        <QuestionForm question={question} isEdit />
      </main>
    </>
  );
};
export default EditQuestion;
