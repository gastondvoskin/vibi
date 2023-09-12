'use client'
import CardsContainer from "../../../components/home/compra/CardsContainer";
import Filters from "../../../components/home/compra/Filters";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getPublicationsAction } from "../../../redux/actions/publicationActions";
import Image from 'next/image';
import mapImage from "../../../assets/mapImage.png";
import Pagination from "../../../components/home/compra/Pagination";

export default function Compra() {
  const numberOfPages = useAppSelector((state: any) => state.publication.totalPages);
  const filterState =  useAppSelector((state:any) => state.filters);
  const publications =  useAppSelector((state:any) => state.publication);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch(); 
  console.log(filterState);
  
  useEffect(() => {
    dispatch(getPublicationsAction(currentPage,filterState))
  }, [dispatch, currentPage,filterState]);

  const changePage = (page: number | "..." | ">") => {
    if(page === ">") {
      setCurrentPage(currentPage + 1);
    } else if (page === "...") {console.log('Does not have any execution')}
    else {
      setCurrentPage(page);
    }
   /*  console.log('currentPage', currentPage) */
  }
  console.log("publications State:",publications);
  

  return (
    <main className="flex flex-row max-w-[1280px] ">
      <div className="flex flex-col items-center">
        <Filters />
        <CardsContainer />
        <Pagination currentPage={currentPage} numberOfPages={numberOfPages} changePage={changePage}/>
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
