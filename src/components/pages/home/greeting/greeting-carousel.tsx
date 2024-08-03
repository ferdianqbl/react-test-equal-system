"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

type Props = {
  data: any;
};

const GreetingCarousel: FC<Props> = ({ data }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="">
      <Carousel
        setApi={setApi}
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
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
      <div className="flex items-center mt-4 pl-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === current - 1 ? "bg-gray-800" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default GreetingCarousel;
