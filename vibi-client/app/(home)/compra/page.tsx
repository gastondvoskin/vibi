'use client'
import CardsContainer from "../../../components/home/compra/CardsContainer";
import Filters from "../../../components/home/compra/Filters";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getPublicationsAction } from "../../../redux/actions/publicationActions";
import OlvidateDeBuscar from "../../../components/home/compra/OlvidateDeBuscar";

export default function Compra() {
  const currentPublications = useAppSelector((state: any) => state.publication.publications);
  const page= 1
  const dispatch = useAppDispatch(); 

  useEffect(() => {
    if (!currentPublications.length) {dispatch(getPublicationsAction(page))}
  }, [dispatch, currentPublications]);

  
  return (
    <main className="max-w-[1280px]">

      <Filters />
      <OlvidateDeBuscar />
      <CardsContainer />
    </main>
  );
}
