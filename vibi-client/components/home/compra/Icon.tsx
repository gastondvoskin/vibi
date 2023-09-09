import Image from "next/image";

interface IconProps {
  img: string; // Assuming img is a URL to an image
  text: string;
}


const Icon: React.FC<IconProps> = ({img, text}) => {
  return (
    <div className="py-1.5 rounded-full justify-start items-center gap-1.5 flex">
      <Image src={img} alt="Area" className="w-3 h-3 relative"/>
      <span className="text-blue-950 text-xs font-medium">{text}</span>
    </div>
  );
};

export default Icon;
