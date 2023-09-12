"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Publication } from "../../../../../interfaces/detail/detail";
import DetailInDetail from "../../../../../components/home/compra/DetailInDetail";
import OtherCharacteristics from "../../../../../components/home/compra/OtherCharacteristics";
import ServicesInDetail from "../../../../../components/home/compra/ServicesInDetail";
import GeneralDescription from "../../../../../components/home/compra/GeneralDescription";
import TourInDetail from "../../../../../components/home/compra/TourInDetail";
import Advertising from "../../../../../components/home/compra/Advertising";

interface detailPageProps{
    params: {id: string}
}
const DetailPage: React.FC<detailPageProps> = ({params}) => {
const id= params.id  

const [detail, setDetail] = useState<Publication | null>(null);


// cambiar ruta del front para usar useParams y renderizar condicionalmente
/*   const publicationId = "0138f80f-c6ec-4cd7-b4a6-9c247d871486"; */
useEffect(() => {
  axios
    .get(`http://localhost:3001/api/publication/detail/${id}`)
    .then((response) => response.data)
    .then((data) => setDetail(data));
}, [id]);
// console.log("aca", detail?.property.propertyDetail.air_conditioning);
/* console.log(detail?.property.current_price);
console.log(detail?.property.previous_price); */
return (
  <div>
    <section>
      <img src={detail?.property.urls_photos[0]} alt="Photo" />
      <div className="flex my-6 text-slate-600 text-xs font-normal">
        <a href="/home" className="underline">
          Inicio{" "}
        </a>
        <span className="">-</span>
        <a href="/compra" className="underline">
          Compra
        </a>
        <span className="">-</span>
        <span className="font-bold">Detalle</span>
      </div>
    </section>

    <section>
      <p className="text-zinc-900 text-2xl font-semibold leading-normal">
        {detail?.property.propertyAddress.street},{" "}
        {detail?.property.propertyAddress.district},{" "}
        {detail?.property.propertyAddress.city}.
      </p>
      <p className="text-slate-600 text-base font-normal leading-snug">
        <span>{detail?.property.propertyAddress.property_type}, </span>
        <span>
          {detail?.property.propertyInformation.rooms} dormitorios,{" "}
        </span>
        <span>{detail?.property.propertyInformation.baths} baños. </span>
        <span className="text-rose-600 text-base font-normal leading-snug">
          Mira en mapa
        </span>
      </p>
    </section>

    <Advertising current_price={detail?.property.current_price} previous_price={detail?.property.previous_price}/>

    <DetailInDetail
      propertyInformation={detail?.property.propertyInformation}
      propertyFloor={detail?.property.propertyAddress.floor}
    />

    <OtherCharacteristics propertyDetail={detail?.property.propertyDetail} />

    <ServicesInDetail
      air_conditioning={detail?.property.propertyDetail.air_conditioning}
      natural_gas={detail?.property.propertyDetail.natural_gas}
    />

    <TourInDetail />

    <GeneralDescription description={detail?.property.description} />
  </div>
);
}

export default DetailPage