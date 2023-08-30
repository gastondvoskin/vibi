import Link from "next/link";
interface Props {
  route: string;
  name: string;
}
const FooterButton = ({ route, name }: Props) => {
  return (
    <Link href={route}>
      <div className="flex p-0.5 font-normal">        
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default FooterButton;