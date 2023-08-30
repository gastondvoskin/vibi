import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export class FavoritesController {
    async addFavorite(req: Request, res: Response) {
        try {
          const { userId, publicationId } = req.body;
      
          const favorite = await prisma.favorites.create({
            data: {
              user_Id_Reference: userId,
              publication_Id_Reference: publicationId,
            },
          });
      
          res.status(200).json(favorite);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'An error occurred while adding the favorite.' });
        }
      }
      
      

  async removeFavorite(req: Request, res: Response) {
    try {
      const { userId, publicationId } = req.body;

      const deletedFavorite = await prisma.favorites.deleteMany({
        where: {
          user_Id_Reference: userId,
          publication_Id_Reference: publicationId,
        },
      });

      res.status(200).json(deletedFavorite);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while removing the favorite.' });
    }
  }

  async getUserFavorites(req: Request, res: Response) {
    try {
      const userId = req.params.userId;

      const user = await prisma.user.findUnique({
        where: { user_Id: userId },
        include: {
          favorites: {
            include: {
              publication: true,
            },
          },
        },
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found.' });
      }

      res.status(200).json(user.favorites);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while fetching favorites.' });
    }
  }
}
