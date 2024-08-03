import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
  link: string;
  title: string;
  icon: StaticImageData;
  active?: boolean;
};

const NavItem: FC<Props> = ({ title, icon, active, link }) => {
  return (
    <Link
      className="flex flex-col gap-1 items-center cursor-pointer"
      href={`/${link}`}
    >
      <Image
        src={icon}
        width={200}
        height={200}
        alt={`icon-${title}-${active}`}
        className="w-5 h-5"
      />
      <span className={cn("text-sm text-gray-400", active && "text-black")}>
        {title}
      </span>
    </Link>
  );
};

export default NavItem;
