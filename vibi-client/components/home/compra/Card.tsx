'use client'; 
import Image from "next/image";
import Link from "next/link";
import IconsContainer from "./IconsContainer";
import { Property, PropertyAddress, PropertyInformation } from "../../../interfaces/detail/detail";


interface CardInterface {
  property: Property,
  propertyAddress: PropertyAddress,
  propertyInformation: PropertyInformation,
}

const Card = ({ property }: CardInterface) => {
  return (
    <Link href="/compra/detalle">
      <div className="m-4 w-80 h-80 border-solid border-2 border-vibiGrayLightTwo hover:border-vibiDarkBlue rounded-lg text-vibiGraySmoke text-xs" >
        <Image src={property.urls_photos[0]} alt="Foto" width={363} height={205} className="rounded-t-md" />
        <div className="p-4">
          <h1 className="text-xs">{property.propertyAddress.property_type}</h1>
          <div>
            <span className="text-primary text-xl mr-2">$ {property.current_price}</span>
            {property.current_price === property.previous_price ? "" : <span>{property.previous_price}</span>}
          </div>

          <p className="my-2">{property.propertyAddress.street}, {property.propertyAddress.district}, {property.propertyAddress.city}</p>
          <div>
            <IconsContainer propertyInformation={property.propertyInformation}/>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
