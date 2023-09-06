import Image from "next/image";
/* import { HiArchive } from "react-icons/hi"; */
import areaIcon from "../../../assets/icons/Area.svg";
import roomIcon from "../../../assets/icons/Room.svg";
import bathIcon from "../../../assets/icons/Bath.svg";
import parkingIcon from "../../../assets/icons/Parking.svg";
import Icon from "./Icon";

interface IconProps {
  propertyInformation: any;
}


const IconsContainer:  React.FC<IconProps> = ({ propertyInformation }: any) => {
  
  return (
    <div className="flex text-vibiGreyLight my-2">
      <Icon img={areaIcon} text={`${propertyInformation.m2_indoor}m2`}/>
      <Icon img={roomIcon} text={`${propertyInformation.rooms}`}/>
      <Icon img={bathIcon} text={`${propertyInformation.baths}`}/>
      <Icon img={parkingIcon} text={propertyInformation.garage === 0 ? "No" : "Sí"}/>
    </div>
  );
};

export default IconsContainer;


// {propertyInformation.m2_indoor} ? <Icon img={areaIcon} text={`${propertyInformation.m2_indoor}m2`}/> : ""
