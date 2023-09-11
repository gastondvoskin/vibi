import Icon from "./Icon"
import TrueIcon from "../../../assets/icons/TrueIcon.svg";
import FalseIcon from "../../../assets/icons/FalseIcon.svg";

interface ServicesInDetailProps {
  air_conditioning: boolean | undefined;
  natural_gas: boolean | undefined;
}


const ServicesInDetail = ({air_conditioning, natural_gas}: ServicesInDetailProps) => {
  return (
    <div className="my-8">
      <h1 className="text-zinc-900 text-xl font-bold">Servicios</h1>
      <div className="flex flex-wrap">
        <Icon img={air_conditioning ? TrueIcon : FalseIcon} text="Aire acondicionado"/>
        <Icon img={natural_gas ? TrueIcon : FalseIcon} text="Gas natural"/>
      </div>
      <hr className="w-[700px]"/>
    </div>
  )
}

export default ServicesInDetail
