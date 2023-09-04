import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export type ResponseData = {
  message: string;
  coolString: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "GET") {
    const users = await getAllUsers();
    res.status(200).json({ message: users.toString(), coolString: "Heipådeg" });
  }
}

const getAllUsers = () => {
  return prisma.user.findMany();
};
