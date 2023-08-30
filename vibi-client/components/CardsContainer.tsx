import Card from "./Card";
import hcPublications from "../hcResources/hcPublications";

const CardsContainer = () => {
  return (
    <div className="flex flex-wrap">
      {hcPublications.map((publ, index) => (
        <Card
          key={index}
          property={publ.property}
          propertyAddress={publ.propertyAddress}
          propertyInformation={publ.propertyInformation}
          propertyDetail={publ.propertyDetail}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
