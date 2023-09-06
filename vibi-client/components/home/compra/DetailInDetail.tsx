import Icon from "./Icon"
import areaIcon from "../../../assets/icons/Area.svg";
import roomIcon from "../../../assets/icons/Room.svg";
import bathIcon from "../../../assets/icons/Bath.svg";
import parkingIcon from "../../../assets/icons/Parking.svg";



// agregar type de DetailInDetail

const DetailInDetail = ({propertyInformation, propertyFloor}: any) => {
  return (
    <div className="w-[717px] h-[164px] flex-col justify-start items-start gap-8 inline-flex">
        <div className="w-[617.02px] h-[132px] flex-col justify-start items-start gap-8 inline-flex">
            <h1>Detalle de la vivienda</h1>
            <div className="w-[617.02px] h-[76px] justify-start items-start gap-8 inline-flex">
                <Icon img={areaIcon} text={`${propertyInformation?.m2_indoor}m2`}/>
                <Icon img={roomIcon} text={`${propertyInformation?.rooms}`}/>
                <Icon img={bathIcon} text={`${propertyInformation?.baths}`}/>
                <Icon img={areaIcon} text={`Antiguedad: ${new Date().getFullYear() - propertyInformation?.construction_year}`}/>

                <Icon img={parkingIcon} text={propertyInformation?.garage === 0 ? "No" : "Sí"}/>
                {propertyFloor ? <Icon img={areaIcon} text={`Piso ${propertyFloor}`}/> : ""}
                {propertyFloor ? <Icon img={areaIcon} text={`Piso ${propertyFloor}`}/> : ""}
            </div>
        </div>

    </div>
  )
}

export default DetailInDetail