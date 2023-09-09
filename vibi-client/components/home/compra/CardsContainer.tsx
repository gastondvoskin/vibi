import Card from "./Card";
import { useSelector } from "react-redux";
import OlvidateDeBuscar from "./OlvidateDeBuscar";

const CardsContainer = () => {
  const currentPublications = useSelector(
    (state: any) => state.publication.publications
  );

  return (
    <div className="w-[840px] h-[963px] grid grid-cols-3">
      {currentPublications?.map((publ: any, index: number) => {
        console.log("index: ", index);
        if (index === 5) {
          return <OlvidateDeBuscar />
        } else {
          return (
            <Card
              key={index}
              property={publ.property}
              propertyAddress={publ.propertyAddress}
              propertyInformation={publ.propertyInformation}
            />
          );
        }
      })}
    </div>
  );
};

export default CardsContainer;
