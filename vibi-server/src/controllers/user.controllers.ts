import generateToken from "@/auth/generateToken";
import env from "@/config/env.config";
import prisma from "@/config/prisma-client.config";
import bcrypt from "bcrypt";
import { Request, Response } from "express";

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong." });
    }
  }

  async registerUser(req: Request, res: Response) {
    try {
      const id = req.body;
      const user = await prisma.user.findUnique({
        where: { user_id: id },
        include: { property: { include: { propertyInformation: true } } },
      });
      res.status(200).json("Estoy funcionando");
    } catch (error) {
      res.status(400).json("No Estoy funcionando");
    }
  }
}
