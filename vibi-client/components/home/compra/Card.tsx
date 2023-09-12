"use client";
import Link from "next/link";
import IconsContainer from "./IconsContainer";
import {
  Property,
} from "../../../interfaces/detail/detail";
import Image from "next/image";

interface CardInterface {
  property: Property;
  publication_Id: string
}

const Card = ({ property, publication_Id }: CardInterface) => {
  return (
    <Link href={`/compra/detalle/${publication_Id}`}>
      <div className="w-64 h-[410px] flex-col justify-start items-start inline-flex m-5 border border-slate-300 hover:border-rose-600">
        <Image className="w-64 h-52" src={property.urls_photos[0]} alt="Fotos" width={256} height={208}/>
        <div className="h-44 px-4 pt-4 pb-6 flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch justify-between items-start gap-3 inline-flex">
            <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
              <div className="flex-col justify-start items-start gap-4 flex">
                <div className="flex-col justify-start items-start gap-2 flex">
                  <div className="w-48 h-20 flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-blue-950 text-xs font-normal">
                      {property.propertyAddress.property_type}
                    </div>
                    <div className="text-blue-950 text-sm font-normal leading-normal">
                      {property.propertyAddress.street},{" "}
                      {property.propertyAddress.district},{" "}
                      {property.propertyAddress.city}.
                    </div>
                  </div>
                  <IconsContainer
                    propertyInformation={property.propertyInformation}
                  />
                </div>

                <div className="flex justify-center gap-3 items-center">
                  <span className="text-primary text-xl mr-2">
                    $ {property.current_price}
                  </span>
                  {property.current_price === property.previous_price ? (
                    ""
                  ) : (
                    <span className="text-xs line-through">
                      {property.previous_price}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
