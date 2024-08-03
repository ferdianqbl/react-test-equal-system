"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import BgImg from "@/assets/motif.png";
import Image from "next/image";

const GreetingCarousel = () => {
  return (
    <Carousel className="w-full">
      {/* <CarouselPrevious className="static" /> */}
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <Image
              src={BgImg}
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
