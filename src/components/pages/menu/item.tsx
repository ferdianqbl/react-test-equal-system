import Image from "next/image";
import React from "react";

const Item = () => {
  return (
    <div className="flex justify-between border-b p-2">
      <div className="w-full flex">
        <Image
          src="https://soal.staging.id/img/Hazelnut%20Belgian%20Chocolate.png"
          alt="Hazelnut Belgian Chocolate"
          width={100}
          height={100}
        />
        <div className="flex flex-col">
          <span className="font-medium">Raisin</span>
          <span className="text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            in?
          </span>
        </div>
      </div>
      <span className="font-medium">50.000</span>
    </div>
  );
};

export default Item;
