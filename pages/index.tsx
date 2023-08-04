import React from "react";
import QuizGame from "../components/quiz-game";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import db, { QABundle } from '../prisma/db';

export const getServerSideProps: GetServerSideProps<{
  dbQABundles: QABundle[];
}> = async () => {
  const dbQABundles = await db.qABundle.findMany();

  return {
    props: {
      dbQABundles,
    }
  }
}

export default function Homepage({
  dbQABundles,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element {
  return (
    <div id="homepage">
      <QuizGame QABundles={dbQABundles}/>
    </div>
  );
}
