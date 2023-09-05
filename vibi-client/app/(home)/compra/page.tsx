'use client'
import CardsContainer from "../../../components/home/compra/CardsContainer";
import Filters from "../../../components/home/compra/Filters";
import { useEffect } from "react";
/* import { useDispatch, useSelector } from "react-redux";*/
import { getPublicationsAction } from "../../../redux/actions";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

export default function Compra() {
  const currentPublications = useAppSelector((state: any) => state.publications);
  const page= 1
  const dispatch = useAppDispatch(); 

  useEffect(() => {
    if (!currentPublications.length) {dispatch(getPublicationsAction(page))}
  }, [dispatch, currentPublications]);

  return (
    <main>
      <h1>Vista Compra</h1>
      <Filters />
      <CardsContainer />
    </main>
  );
}
