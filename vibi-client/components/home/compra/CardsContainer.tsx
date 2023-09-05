import Card from "./Card";
import { useSelector } from "react-redux";

const CardsContainer = () => {

  const currentPublications = useSelector((state: any) => state.publication.publications);

  return (
    <div className="flex flex-wrap">
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
