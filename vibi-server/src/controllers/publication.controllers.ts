import prisma from '@/config/prisma-client.config';
import { Request, Response } from 'express';

export class PublicationController {
  async getPublications(req: Request, res: Response) {
    try {
      const publications = await prisma.publication.findMany({
        select:{
          isActive:true,
          publication_Id:true,
          property:{
            select:{
              previous_price:true,
              current_price:true,
              urls_photos:true,
              propertyDetail:{
                select: {
                  luxury:true
                }
              },
              propertyAddress:true,
              propertyInformation: true
              }
              }
            }},    
        )

      res.status(200).json(publications);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async postPublication(req: Request, res: Response) {
    try {
      const { publication, property, propertyAddress, propertyInformation, propertyDetail } = req.body;
      const {userId} = req.params
      
      const newPropertyInformation = await prisma.propertyInformation.create({
        data: {
          ...propertyInformation,
        },
      });
  
      const newPropertyDetail = await prisma.propertyDetail.create({
        data: {
          ...propertyDetail,
        },
      });

      const newPropertyAddress = await prisma.propertyAddress.create({
        data: {
          ...propertyAddress,
        },
      });
  
      const newProperty = await prisma.property.create({
        data: {
          ...property,
          propertyInformation: {
            connect: {
              propertyInformation_Id: newPropertyInformation.propertyInformation_Id,
            },
          },
          propertyDetail: {
            connect: {
              propertyDetail_Id: newPropertyDetail.propertyDetail_Id,
            },
          },
          propertyAddress: {
            connect: {
              propertyAddress_Id: newPropertyAddress.propertyAddress_Id,
            },
          },
        },
      });
  
      const newPublication = await prisma.publication.create({
        data: {
          ...publication,
          property: {
            connect: {
              property_Id: newProperty.property_Id,
            },
          },
          user: {
            connect: {
              user_Id: userId,
            },
          },
        },
      });
  
      res.status(200).json(newPublication);
    } catch (error) {
      res.status(500).json({ error: error});
    }
  }
  async getPublicationDetail(req:Request, res:Response){
    try {
      const {publicationId} = req.params
      const publicationDetail = await prisma.publication.findUnique({
        where:{publication_Id: publicationId},
        include:{
          property:{
            include:{
              propertyAddress:true,
              propertyDetail:true,
              propertyInformation:true
            }
          }
        }
      })

      res.status(200).json(publicationDetail)
      
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong.' });
    }
  }

  async getFilteredProperties(req: Request, res: Response) {
    try {
      const { propertyType, minRooms, maxRooms, minPrice, maxPrice } = req.query;
  
      // Construir condiciones para la consulta
      const conditions: any = {};
  
      if (propertyType) {
        conditions.propertyAddress = { property_type: propertyType };
      }
  
      if (minRooms || maxRooms) {
        conditions.propertyInformation = {};
        if (minRooms) conditions.propertyInformation.rooms = { gte: parseInt(minRooms as string) };
        if (maxRooms) conditions.propertyInformation.rooms = { ...conditions.propertyInformation.rooms, lte: parseInt(maxRooms as string) };
      }
  
      if (minPrice || maxPrice) {
        conditions.property = {};
        if (minPrice) conditions.property.current_price = { gte: parseInt(minPrice as string) };
        if (maxPrice) conditions.property.current_price = { ...conditions.property.current_price, lte: parseInt(maxPrice as string) };
      }
  
      // Realizar la consulta con las condiciones
      const filteredProperties = await prisma.publication.findMany({
        where: {
          isActive: true,
          property: {
            ...(conditions.property || {}),
            propertyAddress: { ...(conditions.propertyAddress || {}) },
            propertyInformation: { ...(conditions.propertyInformation || {}) },
          },
        },
        include: {
          property:{
            include:{
              propertyAddress:true,
              propertyDetail:true,
              propertyInformation:true,
            }
          },
        },
      });
  
      res.status(200).json(filteredProperties);
    } catch (error) {
      console.log(error);
      // Manejo del error aquí
    }
  }
  
  
}