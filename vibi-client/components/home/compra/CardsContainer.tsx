import Card from "./Card";
import { useSelector } from "react-redux";
import OlvidateDeBuscar from "./OlvidateDeBuscar";

const CardsContainer = () => {
  const currentPublications = useSelector(
    (state: any) => state.publication.publications
  );

  if(!currentPublications.length){
    return (
      <h1>no hay resultados</h1>
    )
  }
/* console.log('currentPublications', currentPublications) */
  return (
    <div className="w-[840px] grid grid-cols-3">
      {currentPublications?.map((publ: any, index: number) => {
        return (
          <div key={index}>
            {index === 5 
              ? <OlvidateDeBuscar /> 
              : <Card
              key={index}
              property={publ.property}
              publication_Id= {publ.publication_Id}
              />
            }
          </div>
        );
      })}
      {/* <Card
        property={currentPublications[5]?.property}
        propertyAddress={currentPublications[5]?.propertyAddress}
        propertyInformation={currentPublications[5]?.propertyInformation}
      /> */}
    </div>
  );
};

export default CardsContainer;
