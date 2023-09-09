"use client";
import Image from "next/image";
import Link from "next/link";
import IconsContainer from "./IconsContainer";
import {
  Property,
  PropertyAddress,
  PropertyInformation,
} from "../../../interfaces/detail/detail";

interface CardInterface {
  property: Property;
  propertyAddress: PropertyAddress;
  propertyInformation: PropertyInformation;
}

const Card = ({ property }: CardInterface) => {
  return (
    <Link href="/compra/detalle">
<div className="w-64 h-96 flex-col justify-start items-start inline-flex m-5 border border-slate-300">
  <img className="w-64 h-52" src={property.urls_photos[0]} />
  <div className="h-9 px-4 py-2 flex-col justify-start items-start gap-2.5 flex">
    <div className="justify-start items-start gap-2.5 inline-flex">
      <div className="px-2 py-1.5 bg-white justify-start items-center gap-2.5 flex">
        <div className="text-blue-950 text-xs font-medium leading-3 tracking-tight">Nuevo</div>
      </div>
    </div>
  </div>
  <div className="w-8 h-8 relative">
    <div className="w-8 h-8 left-0 top-0 absolute bg-white rounded-full" />
    <div className="w-4 h-4 left-[8px] top-[8px] absolute" />
  </div>
  <div />
  <div className="h-44 px-4 pt-4 pb-6 flex-col justify-start items-start gap-3 flex">
    <div className="self-stretch justify-between items-start gap-3 inline-flex">
      <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
        <div className="flex-col justify-start items-start gap-4 flex">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="text-blue-950 text-xs font-normal">Departamento</div>
              <div className="text-blue-950 text-sm font-normal leading-normal">{property.propertyAddress.street}, {property.propertyAddress.district}, {property.propertyAddress.city}.</div>
            </div>
            <div className="justify-center items-center gap-4 inline-flex">
              <div className="py-1.5 rounded-full justify-start items-center gap-1.5 flex">
                <div className="w-3 h-3 relative" />
                <div className="text-blue-950 text-xs font-medium">315 m2</div>
              </div>
              <div className="py-1.5 rounded-full justify-start items-center gap-1.5 flex">
                <div className="w-3 h-3 relative" />
                <div className="text-blue-950 text-xs font-medium">6</div>
              </div>
              <div className="py-1.5 rounded-full justify-start items-center gap-1.5 flex">
                <div className="w-3 h-3 relative">
                  <div className="w-2.5 h-3 left-[0.75px] top-0 absolute">
                  </div>
                </div>
                <div className="text-blue-950 text-xs font-medium">4</div>
              </div>
              <div className="py-1.5 rounded-full justify-start items-center gap-1.5 flex">
                <div className="w-3 h-3 relative">
                  <div className="w-3 h-3 left-[0.01px] top-[0.12px] absolute">
                  </div>
                </div>
                <div className="text-blue-950 text-xs font-medium">Si</div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-center items-start gap-3 flex">
            <div className="text-rose-600 text-lg font-medium leading-tight">S/ 1,500.00</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</Link>




    // <div className="w-64 h-96 flex-col justify-start items-start inline-flexborder hover:border-rose-600">
    //   <Link href="/compra/detalle">
    //     <Image
    //       src={property.urls_photos[0]}
    //       alt="Foto"
    //       width={64}
    //       height={52}
    //       className="w-64 h-52"
    //     />
    //     <div className="w-64 h-44 px-4 pt-4 pb-6 bg-white flex-col justify-start items-start gap-3 inline-flex">
    //       <div className="self-stretch justify-between items-start gap-3 inline-flex">
    //         {/* <img className="w-64 h-52 border-l border-r border-t border-rose-600" src="https://via.placeholder.com/256x205" /> */}
    //         <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
    //           <div className="flex-col justify-start items-start gap-4 flex">
    //             <div className="flex-col justify-start items-start gap-2 flex">
    //               <div className="flex-col justify-start items-start gap-2 flex">
    //                 <div className="text-blue-950 text-xs font-normal">
    //                   Departamento
    //                 </div>
    //                 <div className="text-blue-950 text-sm font-normal leading-normal">
    //                   {property.propertyAddress.street},{" "}
    //                   {property.propertyAddress.district},{" "}
    //                   {property.propertyAddress.city}
    //                 </div>
    //               </div>
    //               <div className="justify-center items-center gap-4 inline-flex">
    //                 <div className="py-1.5 rounded-full justify-start items-center gap-1.5 flex">
    //                   <div className="w-3 h-3 relative" />
    //                   <div className="text-blue-950 text-xs font-medium">
    //                     315 m2
    //                   </div>
    //                 </div>
    //                 <div className="py-1.5 rounded-full justify-start items-center gap-1.5 flex">
    //                   <div className="w-3 h-3 relative" />
    //                   <div className="text-blue-950 text-xs font-medium">6</div>
    //                 </div>
    //                 <div className="py-1.5 rounded-full justify-start items-center gap-1.5 flex">
    //                   <div className="w-3 h-3 relative">
    //                     <div className="w-2.5 h-3 left-[0.75px] top-0 absolute"></div>
    //                   </div>
    //                   <div className="text-blue-950 text-xs font-medium">4</div>
    //                 </div>
    //                 <div className="py-1.5 rounded-full justify-start items-center gap-1.5 flex">
    //                   <div className="w-3 h-3 relative">
    //                     <div className="w-3 h-3 left-[0.01px] top-[0.12px] absolute"></div>
    //                   </div>
    //                   <div className="text-blue-950 text-xs font-medium">
    //                     Si
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="flex-col justify-center items-start gap-3 flex">
    //               <div className="text-rose-600 text-lg font-medium leading-tight">
    //                 S/ 1500.00
    //               </div>
    //               <div className="justify-start items-center gap-1 inline-flex">
    //                 <div className="text-blue-950 text-xs font-normal leading-none tracking-tight">
    //                   +
    //                 </div>
    //                 <div className="text-blue-950 text-xs font-normal leading-none">
    //                   S/ 250 mantenimiento
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </Link>
    // </div>

    // <Link href="/compra/detalle">
    //   <div className="m-4 w-80 h-80 border-solid border-2 border-vibiGrayLightTwo hover:border-vibiDarkBlue rounded-lg text-vibiGraySmoke text-xs" >
    //     <Image src={property.urls_photos[0]} alt="Foto" width={363} height={205} className="rounded-t-md" />
    //     <div className="p-4">
    //       <h1 className="text-xs">{property.propertyAddress.property_type}</h1>
    //       <div>
    //         <span className="text-primary text-xl mr-2">$ {property.current_price}</span>
    //         {property.current_price === property.previous_price ? "" : <span>{property.previous_price}</span>}
    //       </div>

    //       <p className="my-2">{property.propertyAddress.street}, {property.propertyAddress.district}, {property.propertyAddress.city}</p>
    //       <div>
    //         <IconsContainer propertyInformation={property.propertyInformation}/>
    //       </div>
    //     </div>
    //   </div>
    // </Link>
  );
};

export default Card;
