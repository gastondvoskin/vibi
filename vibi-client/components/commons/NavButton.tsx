import { usePathname } from "next/navigation";
import Link from "next/link";
interface Props {
  route: string;
  name: string;
}
const NavButton = ({ route, name }: Props) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link className="mx-3" href={route}>
      <div className={pathname === route ? `border-b-[4px] border-primary duration-300` : "border-b-[4px] border-white duration-300"}>        
        <span className="hover:text-primary transition-colors duration-300">{name}</span>
      </div>
    </Link>
  );
};

export default NavButton;
