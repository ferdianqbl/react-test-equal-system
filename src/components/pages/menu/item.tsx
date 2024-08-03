import Image from "next/image";
import { FC } from "react";
type Props = {
  data: any;
};

const Item: FC<Props> = ({ data }) => {
  return (
    <div className="flex justify-between border-b p-2 bg-background">
      <div className="w-full flex">
        <Image
          src={data.photo}
          alt="Hazelnut Belgian Chocolate"
          width={100}
          height={100}
          className="object-cover object-center"
        />
        <div className="flex flex-col">
          <span className="font-medium">{data.name}</span>
          <span className="text-gray-400">{data.description}</span>
        </div>
      </div>
      <span className="font-medium">{data.price.toLocaleString("en-US")}</span>
    </div>
  );
};

export default Item;
