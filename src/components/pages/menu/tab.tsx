import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { FC } from "react";

type Props = {
  activeTab: string | number;
  clickHandler: (val: any) => void;
};

const TabMenu: FC<Props> = ({ clickHandler, activeTab }) => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem
            key={index}
            className={cn(
              "basis-1/3 text-center cursor-pointer pl-0",
              activeTab === index && "border-b-2 border-black"
            )}
            onClick={() => clickHandler(index)}
          >
            MenuTab
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default TabMenu;
