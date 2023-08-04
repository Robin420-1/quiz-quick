import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../prisma/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const method = req.method;

  switch (method) {
    case 'GET': {
      const questions = await db.question.findMany();

      res.status(200).json(questions);
      break;
    }
    default: {
      res.status(405).end();
    }
  }
}