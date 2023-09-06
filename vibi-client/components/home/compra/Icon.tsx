import Image from "next/image";

interface IconProps {
  img: string; // Assuming img is a URL to an image
  text: string;
}


const Icon: React.FC<IconProps> = ({img, text}) => {
  return (
    <div className="flex mr-2">
      <Image src={img} alt="Area" />
      <span className="ml-1">{text}</span>
    </div>
  );
};

export default Icon;
