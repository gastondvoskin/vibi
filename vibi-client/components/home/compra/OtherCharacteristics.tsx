import Icon from "./Icon"
import TrueIcon from "../../../assets/icons/TrueIcon.svg";
import FalseIcon from "../../../assets/icons/FalseIcon.svg";


const OtherCharacteristics = ({propertyDetail}: any) => {
  console.log('propertyDetail: ', propertyDetail);
  return (
    <div className="">
        <h1 className="text-zinc-900 text-xl font-bold">Otras características</h1>
        <div className="flex flex-wrap">
            <Icon img={propertyDetail?.terrace ? TrueIcon : FalseIcon} text="Terraza"/>
            <Icon img={propertyDetail?.balcony ? TrueIcon : FalseIcon} text="Balcón"/>
            <Icon img={propertyDetail?.gym ? TrueIcon : FalseIcon} text="Gimnasio"/>
            <Icon img={propertyDetail?.lobby ? TrueIcon : FalseIcon} text="Lobby"/>
        </div>
        <hr className="w-[700px]"/>
    </div>
  )
}

export default OtherCharacteristics