'use client'
import CardsContainer from "../../../components/home/compra/CardsContainer";
import Filters from "../../../components/home/compra/Filters";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getPublicationsAction } from "../../../redux/actions/publicationActions";
import Image from 'next/image';
import mapImage from "../../../assets/mapImage.png";
import Pagination from "../../../components/home/compra/Pagination";

export default function Compra() {
  const currentPublications = useAppSelector((state: any) => state.publication.publications);
  const page= 1
  const dispatch = useAppDispatch(); 

  useEffect(() => {
    if (!currentPublications.length) {dispatch(getPublicationsAction(page))}
  }, [dispatch, currentPublications]);

  
  return (
    <main className="flex flex-row max-w-[1280px] ">
      <div className="flex flex-col items-center">
        <Filters />
        <CardsContainer />
        <Pagination numberOfPages={4}/>
      </div>
      <a target="_blank" href="https://www.google.com/maps/place/Per%C3%BA/@-9.1939096,-80.3136545,6z/data=!3m1!4b1!4m6!3m5!1s0x9105c850c05914f5:0xf29e011279210648!8m2!3d-9.189967!4d-75.015152!16zL20vMDE2d3p3?entry=ttu">
        <Image
          src={mapImage}
          alt="Map Image"
          width={400}
          height={1500}
        />
      </a>
    </main>
  );
}
