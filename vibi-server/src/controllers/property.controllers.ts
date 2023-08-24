import prisma from '@/config/prisma-client.config';
import { Request, Response } from 'express';

export class PropertyController {
  async getProperty(req: Request, res: Response) {
    try {
      const users = await prisma.user.findMany();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async registerProperty(req: Request, res: Response) {
    try {
      
    } catch (error) {
      
    }
  }

}