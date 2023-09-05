import { PublicationController } from "@/controllers/publication.controllers";
import { Router } from "express";

const publicationRouter = Router()
const publicationController = new PublicationController()

publicationRouter.get('/', publicationController.getPublications)
publicationRouter.post('/:userId', publicationController.postPublication)
publicationRouter.get('/detail/:publicationId',publicationController.getPublicationDetail)
publicationRouter.post('/random/:userId', publicationController.postRandomPublications)



export default publicationRouter