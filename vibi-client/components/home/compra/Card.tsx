'use client'; 
import Image from "next/image";
import Link from "next/link";

interface CardInterface {
  property: any,
  propertyAddress: any,
  propertyInformation: any,
  propertyDetail: any,
}

const Card = ({
  property,
  propertyAddress,
  propertyInformation,
  propertyDetail,
}: CardInterface) => {

  const viewDetail = () => {

  };

  return (
    <Link href="/compra/detalle">
      <div onClick={viewDetail} className="m-4 w-80 h-96 border-solid border-2 border-vibiDarkBlue rounded-lg">
        <Image src={property.urls_photos[0]} alt="Foto" width={363} height={205} className="rounded-t-md" />
        {/* a futuro un slide, llega un array de urls */}
        <h1>{propertyAddress.property_type}</h1>
        <h1>Precio: {property.final_price}</h1>
        <h1>Precio tachado: {property.final_price}</h1>
        <p> Domicilio: {propertyAddress.street}, {propertyAddress.district}, {propertyAddress.city}</p>
        <h1>m2: {propertyInformation.m2_indoor}</h1> {/* o m2_total? */}
        <h1>Habitaciones: {propertyInformation.rooms}</h1>
        <h1>Baños: {propertyInformation.baths}</h1>
        {/* <h1>Garage: De dónde saco esta data?</h1> */} {/* parking? */}
        <h1>Detalles: tiene lujos... {propertyDetail.luxury ? "Sí" : "No"}</h1>
      </div>
    
    </Link>
  );
};

export default Card;

// Av. Libertad 123, Rimac, Lima
