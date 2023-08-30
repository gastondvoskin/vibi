import { FavoritesController } from '@/controllers/favorites.controller';
import { Router } from 'express';

const favoritesRouter = Router();
const favoritesController = new FavoritesController();

favoritesRouter.post('/add', favoritesController.addFavorite);
favoritesRouter.delete('/remove', favoritesController.removeFavorite);
favoritesRouter.get('/:userId', favoritesController.getUserFavorites);

export default favoritesRouter;
