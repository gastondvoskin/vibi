import Image from "next/image";
/* import { HiArchive } from "react-icons/hi"; */
import areaIcon from "../../../assets/icons/Area.svg";
import roomIcon from "../../../assets/icons/Room.svg";
import bathIcon from "../../../assets/icons/Bath.svg";
import parkingIcon from "../../../assets/icons/Parking.svg";

const IconsContainer = ({ propertyInformation }: any) => {
  
  return (
    <div className="flex text-vibiGreyLight my-2">
      <div className="flex mr-2">
        <Image src={areaIcon} alt="Area" />
        <span className="ml-1">{propertyInformation.m2_indoor}m2</span>
      </div>

      <div className="flex mr-2">
        <Image src={roomIcon} alt="Room" />
        <span className="ml-1">{propertyInformation.rooms}</span>
      </div>

      <div className="flex mr-2">
        <Image src={bathIcon} alt="Bath" />
        <span className="ml-1">{propertyInformation.baths}</span>
      </div>

      <div className="flex mr-2">
        <Image src={parkingIcon} alt="Parking" />
        <span className="ml-1">{propertyInformation.parking === 0 ? "No" : "Sí"}</span>
      </div>

    </div>
  );
};

export default IconsContainer;
