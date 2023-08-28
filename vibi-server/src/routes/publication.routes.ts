import { PublicationController } from "@/controllers/publication.controllers";
import { Router } from "express";

const publicationRouter = Router()
const publicationController = new PublicationController()

publicationRouter.get('/', publicationController.getPublications)

export default publicationRouter