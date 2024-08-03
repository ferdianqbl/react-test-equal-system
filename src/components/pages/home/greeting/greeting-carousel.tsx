"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import BgImg from "@/assets/motif.png";
import Image from "next/image";
import { FC } from "react";

type Props = {
  data: any;
};

const GreetingCarousel: FC<Props> = ({ data }) => {
  return (
    <Carousel className="w-full">
      {/* <CarouselPrevious className="static" /> */}
      <CarouselContent className="">
        {data?.banner.map((item: any, index: any) => (
          <CarouselItem key={index}>
            <Image
              src={item}
              width={400}
              height={200}
              alt="motif"
              className="w-full h-48 object-cover rounded-lg"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselNext className="static" /> */}
    </Carousel>
  );
};

export default GreetingCarousel;
