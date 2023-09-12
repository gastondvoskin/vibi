import prisma from '@/config/prisma-client.config';

async function getRandomCity(): Promise<string> {
    // Aquí puedes implementar la lógica para obtener una ciudad aleatoria de Perú
    // Puedes tener una lista de ciudades en Perú y seleccionar una al azar.
    const citiesInPeru = ['Lima', 'Arequipa', 'Cusco', 'Trujillo', 'Piura', 'Iquitos', 'Cajamarca', 'Arequipa', 'Puno', 'Huaraz'];
    const randomIndex = Math.floor(Math.random() * citiesInPeru.length);
    return citiesInPeru[randomIndex];
  }
  
  async function createRandomPublication(userId: string, numberOfPublications: number): Promise<void> {
    try {
      for (let i = 0; i < numberOfPublications; i++) {
        const randomCity = await getRandomCity();
        const current_price = Math.floor(Math.random() * (500000 - 100000 + 1)) + 100000;
        const previous_price = Math.floor(current_price * 1.2); // Puedes ajustar el factor como desees.
        const rooms = Math.floor(Math.random() * 10) + 1; // Número de habitaciones entre 1 y 10
  
        const newPropertyInformation = await prisma.propertyInformation.create({
          data: {
            construction_year: 2000, // Puedes establecer un año aleatorio si lo prefieres.
            m2_indoor: 120, // Puedes establecer un área aleatoria si lo prefieres.
            m2_total: 150,
            rooms,
            baths: 2,
            half_bath: 0,
            garage: 1,
          },
        });
  
        const newPropertyDetail = await prisma.propertyDetail.create({
          data: {
            luxury: false,
            terrace: true,
            lobby: true,
            balcony: false,
            air_conditioning: true,
            gym: false,
            courtyard: false,
            barbecue: true,
            coworking: false,
            natural_gas: false,
          },
        });
  
        const newPropertyAddress = await prisma.propertyAddress.create({
          data: {
            street: 'Calle Aleatoria', // Puedes generar una calle aleatoria si lo deseas.
            district: 'Distrito Aleatorio', // Puedes generar un distrito aleatorio si lo deseas.
            city: randomCity,
            urbanization: 'Urbanización Aleatoria', // Puedes generar una urbanización aleatoria si lo deseas.
            floor: 2, // Puedes establecer un piso aleatorio si lo prefieres.
            property_type: 'Casa', // Puedes generar un tipo aleatorio si lo deseas.
          },
        });
  
        const newProperty = await prisma.property.create({
          data: {
            condition: 'usado', // Puedes establecer como 'nuevo' o 'usado' aleatoriamente si lo deseas.
            previous_price,
            current_price,
            description: 'Descripción aleatoria', // Puedes generar una descripción aleatoria si lo deseas.
            urls_photos: ["https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-modern-house-plans-1.webp"],
            urls_videos: ['https://example.com/video1.mp4'],
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
            plan: 'basico', // Puedes establecer el plan aleatoriamente si lo deseas.
            pro_photos: true,
            pro_video: false,
            pro_sign: false,
            pro_quoted: true,
            pro_analysis: false,
            pro_contracts: true,
            pro_tour: false,
            isActive: true,
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
      }
  
      console.log(`Se crearon ${numberOfPublications} publicaciones aleatorias.`);
    } catch (error) {
      console.error('Error al crear las publicaciones aleatorias:', error);
    }
  }

  export default createRandomPublication