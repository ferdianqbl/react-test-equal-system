import { FC } from "react";
import Item from "./item";

type Props = {
  data: any;
};

const ItemMenus: FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col">
      {data.categories.map((item: any, index: number) => (
        <div
          key={index + item}
          id={item.category_name}
          className={index === 0 ? "pt-20" : ""}
          style={{
            scrollMarginTop: "5rem",
          }}
        >
          <span className="font-medium w-full block pl-4 py-2 text-lg">
            {item.category_name}
          </span>
          {item.menu.map((item: any, index: string) => (
            <Item key={index} data={item} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemMenus;
