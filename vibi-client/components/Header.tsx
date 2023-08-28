import Image from "next/image";
import logo from "../assets/logo.png";
import BgContainer from "./commons/BgContainer";
import NavBar from "../components/NavBar";

const Header = () => {
  return (
    <BgContainer height="20" bg="mygrey">
      <div className="flex flex-row">
        <Image src={logo} alt="Vibi" />
        <NavBar />
      </div>
    </BgContainer>
  );
};

export default Header;
