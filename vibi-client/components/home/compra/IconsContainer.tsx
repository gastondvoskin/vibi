/* import { HiArchive } from "react-icons/hi"; */
import areaIcon from "../../../assets/icons/Area.svg";
import roomIcon from "../../../assets/icons/Room.svg";
import bathIcon from "../../../assets/icons/Bath.svg";
import parkingIcon from "../../../assets/icons/Parking.svg";
import Icon from "./Icon";
import { PropertyInformation } from "../../../interfaces/detail/detail";

interface IconProps {
  propertyInformation: PropertyInformation;
}

const IconsContainer: React.FC<IconProps> = ({ propertyInformation }) => {
  return (
    <div className="justify-center items-center gap-4 inline-flex">
      
        <Icon img={areaIcon} text={`${propertyInformation.m2_indoor}m2`} />
        <Icon img={roomIcon} text={`${propertyInformation.rooms}`} />
        <Icon img={bathIcon} text={`${propertyInformation.baths}`} />
        <Icon
          img={parkingIcon}
          text={propertyInformation.garage === 0 ? "No" : "Sí"}
        />
    </div>
  );
};

export default IconsContainer;
