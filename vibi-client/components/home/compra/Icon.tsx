import Image from "next/image";

interface IconProps {
  img: string; // Assuming img is a URL to an image
  text: string;
}


const Icon: React.FC<IconProps> = ({img, text}) => {
  return (
    <div className="w-[99px] h-[22px] justify-center items-center gap-3 inline-flex">
      <Image src={img} alt="Area" />
      <span className="ml-1">{text}</span>
    </div>
  );
};

export default Icon;
