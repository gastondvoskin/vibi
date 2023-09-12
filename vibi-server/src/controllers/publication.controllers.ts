import prisma from '@/config/prisma-client.config';
import createRandomPublication from '@/utils/randomPublications';
import { Request, Response } from 'express';


export class PublicationController {
  /* async getPublications(req: Request, res: Response) {
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
  } */

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
      console.log(error)
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

  async getPublications(req: Request, res: Response) {
    try {
      const { propertyType, rooms , maxPrice,city, page } = req.query;
      
      // Define el número de resultados por página
     const resultsPerPage = 10;

      // Calcula el desplazamiento en función de la página solicitada
    const offset = (Number(page) - 1) * resultsPerPage;

      // Construir condiciones para la consulta
      const conditions: any = {};
      
      if (propertyType) {
        conditions.propertyAddress = { property_type: propertyType };
      }
  
      if (rooms) {
        conditions.propertyInformation = {};
        conditions.propertyInformation.rooms = {equals: parseInt(rooms as string) };
        // if (minRooms) conditions.propertyInformation.rooms = { gte: parseInt(minRooms as string) };
        // if (maxRooms) conditions.propertyInformation.rooms = { ...conditions.propertyInformation.rooms, lte: parseInt(maxRooms as string) };
      }
  
      if ( maxPrice) {
        conditions.property = {};
        if (maxPrice) conditions.property.current_price = { ...conditions.property.current_price, lte: parseInt(maxPrice as string) };
      }

      if (city) {
        conditions.propertyAddress = {...conditions.propertyAddress ,city: { equals: city as string ,mode: 'insensitive'} };
      }
      
      let totalPages = 1; // Establece el valor predeterminado de totalPages en 1

    // Si 'page' es igual a 1, realiza una consulta para contar la cantidad total de resultados
    if (Number(page) === 1) {
      const totalCount = await prisma.publication.count({
        where: {
          isActive: true,
          property: {
            ...(conditions.property || {}),
            propertyAddress: { ...(conditions.propertyAddress || {}) },
            propertyInformation: { ...(conditions.propertyInformation || {}) },
          },
        },
      });

      // Calcula la cantidad de páginas en función de la cantidad total de resultados
      totalPages = Math.ceil(totalCount / resultsPerPage);
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
        skip: offset, // Salta los resultados anteriores a la página actual
        take: resultsPerPage, // Limita la cantidad de resultados por página
      });
      
      if (!filteredProperties.length){
        return res.status(200).json({
          publications:[]
        });
      }

      const response: any = {
        publications: filteredProperties,
      };
  
      // Agregar 'pages' solo si pageNumber es 1
      if (Number(page) === 1) {
        response.totalPages = totalPages;
      }
  
      res.status(200).json(response);

    } catch (error : any) {
      console.log(error.message);
      res.status(400).json({Error:error})
    }
  }

  async  postRandomPublications(req: Request, res: Response) {
    const { userId } = req.params;
    const { numberOfPublications } = req.body;
    try {
      if (!userId || !numberOfPublications || numberOfPublications < 1) {
        return res.status(400).json({ error: 'Parámetros inválidos.' });
      }
    
      await createRandomPublication(userId, numberOfPublications);
      res.status(200).json({ message: `Creando ${numberOfPublications} publicaciones aleatorias.` });
    
    } catch (error) {
      console.log(error);
      res.status(400).json({Error:error})
    }
  }
}