import Image from "next/image";
import Logo from "@/assets/logo technopartner.png";

const Navbar = () => {
  return (
    <div className="container">
      <Image src={Logo} alt="logo" width={100} height={100} />
    </div>
  );
};

export default Navbar;
