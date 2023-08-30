import prisma from "@/config/prisma-client.config";
import { Request, Response } from "express";

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).send(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async registerUser(req: Request, res: Response) {
    try {
      const data = req.body
      const newUser = await prisma.user.create({
        data
      })
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
