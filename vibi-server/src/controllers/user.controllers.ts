import generateToken from '@/auth/generateToken';
import prisma from '@/config/prisma-client.config';
import bcrypt from 'bcrypt'
import { Request, Response } from 'express';

export class UserController {
  async getUsers(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

}
