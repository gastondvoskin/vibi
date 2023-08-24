import { PropertyController } from "@/controllers/property.controllers";
import { Router } from "express";

const propertyRouter = Router()
const propertyController = new PropertyController()

propertyRouter.get('/', propertyController.getProperty)

export default propertyRouter