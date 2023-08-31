import Card from "./Card";
import hcPublications from "../../../hcResources/hcPublications";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CardsContainer = () => {

  const currentPublications = useSelector((state: any) => state.publications);

  /* const [publications, setPublications] = useState([]) 
  useEffect(() => {

  },[]) */

  return (
    <div className="flex flex-wrap">
      {/* {hcPublications.map((publ, index) => ( */}
      {currentPublications?.map((publ:any, index: number) => (
        <Card
          key={index}
          property={publ.property}
          propertyAddress={publ.propertyAddress}
          propertyInformation={publ.propertyInformation}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
