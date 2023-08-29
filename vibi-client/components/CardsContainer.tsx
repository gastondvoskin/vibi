import Card from "./Card";

const hcPublications = [
  {
    publication: {
      plan: "premium",
      pro_photos: true,
      pro_video: true,
      pro_sign: false,
      pro_quoted: true,
      pro_analysis: true,
      pro_contracts: true,
      pro_tour: false,
      isActive: true,
    },
    property: {
      condition: "usado",
      final_price: 240000,
      description: "dsf f jasfg ag  asgadsf",
      urls_photos: ["url"],
      urls_videos: ["dsfjgfdgfdsg das gsfdg dasf "],
    },
    propertyAddress: {
      street: "Av. Libertad 123",
      district: "Rimac",
      city: "Lima",
      urbanization: "ciudad",
      floor: 2,
      property_type: "Departamento",
    },
    propertyInformation: {
      construction_year: 1990,
      m2_indoor: 12.5,
      m2_total: 12.54,
      rooms: 23,
      baths: 12,
      halft_bath: 0,
    },
    propertyDetail: {
      luxury: true,
      terrace: false,
      lobby: true,
      balcony: false,
      air_conditioning: true,
      gym: true,
      courtyard: true,
      barbecue: false,
      coworking: false,
      natural_gas: false,
    },
  },
];

const CardsContainer = () => {
  return (
    <div>
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
  )
};

export default CardsContainer;
