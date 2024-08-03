import Image from "next/image";
import Logo from "@/assets/logo technopartner.png";
import FormLogin from "@/components/pages/home/form-login";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full flex min-h-screen flex-col items-center justify-center sm:max-w-[400px]">
        <Image src={Logo} width={200} height={200} alt="icon" />

        <FormLogin />
      </div>
    </div>
  );
};

export default Page;
