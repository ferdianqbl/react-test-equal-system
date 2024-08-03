"use client";
import Image from "next/image";
import Logo from "@/assets/logo technopartner.png";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { removeToken } from "@/lib/token";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const handleLogout = () => {
    removeToken();
    router.push("/login");
  };

  return (
    <div className="container flex items-center justify-between">
      <Image src={Logo} alt="logo" width={100} height={100} />
      <Button variant={"link"} onClick={handleLogout}>
        <LogOut className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default Navbar;
