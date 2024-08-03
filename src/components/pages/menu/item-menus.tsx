import React from "react";
import Item from "./item";

const ItemMenus = () => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-medium bg-slate-50 w-full block pl-4 py-2">
        Seasonal Product
      </span>
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
};

export default ItemMenus;
