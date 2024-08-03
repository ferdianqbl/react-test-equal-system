import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

type Props = {
  activeTab: string | number;
  clickHandler: (val: any) => void;
  data: any;
};

const TabMenu: FC<Props> = ({ clickHandler, activeTab, data }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data.categories.map((item: any, index: string) => (
          <CarouselItem
            key={index}
            className={cn(
              "basis-1/2 text-center cursor-pointer pl-0",
              activeTab === item.category_name && "border-b-2 border-black"
            )}
            onClick={() => clickHandler(item.category_name)}
          >
            <Link href={`#${item.category_name}`} className="w-full block">
              {item.category_name}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TabMenu;
