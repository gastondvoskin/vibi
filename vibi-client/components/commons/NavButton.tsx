import Link from "next/link";
interface Props {
  route: string;
  name: string;
}
const NavButton = ({ route, name }: Props) => {
  return (
    <Link className="bg-primary px-5" href={route}>{name}</Link>
  );
};

export default NavButton;
