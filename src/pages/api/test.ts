import { PrismaClient, User } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  if (req.method === 'GET') {
    const users = await getAllUsers();
    res.status(200).json(users);
  }
}

const getAllUsers = () => {
  return prisma.user.findMany();
};
