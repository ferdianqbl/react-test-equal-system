"use client";
import HomeActive from "@/assets/home1.png";
import HomeNotActive from "@/assets/home2.png";
import MenuActive from "@/assets/menu1.png";
import MenuNotActive from "@/assets/menu2.png";
import NavItem from "./nav-item";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 right-0 container py-4 flex items-center justify-center gap-8 shadow-top w-full z-50 bg-background">
      <NavItem
        link="/"
        title="Home"
        icon={pathname === "/" ? HomeActive : HomeNotActive}
        active={pathname === "/"}
      />
      <NavItem
        link="menu"
        title="Menu"
        icon={pathname === "/menu" ? MenuActive : MenuNotActive}
        active={pathname === "/menu"}
      />
    </div>
  );
};

export default Navbar;
