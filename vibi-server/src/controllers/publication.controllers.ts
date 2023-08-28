import prisma from '@/config/prisma-client.config';
import { Request, Response } from 'express';

export class PublicationController {
  async getPublications(req: Request, res: Response) {
    try {
      const publications = await prisma.publication.findMany()
      res.status(200).json(publications);
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