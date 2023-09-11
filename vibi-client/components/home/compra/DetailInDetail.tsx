import Icon from "./Icon"
import areaIcon from "../../../assets/icons/Area.svg";
import roomIcon from "../../../assets/icons/Room.svg";
import bathIcon from "../../../assets/icons/Bath.svg";
import parkingIcon from "../../../assets/icons/Parking.svg";
import Floor from "../../../assets/icons/Floor.svg";




const DetailInDetail = ({propertyInformation, propertyFloor}: any) => {
  return (
    <div className="my-8">
      <h1 className="text-zinc-900 text-xl font-bold">Detalle de la vivienda</h1>
      <div className="flex flex-wrap">
          <Icon img={areaIcon} text={`${propertyInformation?.m2_indoor}m2`}/>
          <Icon img={roomIcon} text={propertyInformation?.rooms === 1 ? `${propertyInformation?.rooms} habitación` : `${propertyInformation?.rooms} habitaciones`} />
          <Icon img={bathIcon} text={propertyInformation?.baths === 1 ? `${propertyInformation?.baths} baño` : `${propertyInformation?.baths} baños`} />
          <Icon img={areaIcon} text={`Antigüedad: ${new Date().getFullYear() - propertyInformation?.construction_year}`}/>
          <Icon img={parkingIcon} text={propertyInformation?.garage === 0 ? "" : "Cochera"}/>
          {propertyFloor ? <Icon img={Floor} text={`Piso ${propertyFloor}`}/> : ""} 
      </div>
      <hr className="w-[700px]"/>
    </div>
  )
  
}

export default DetailInDetail