"use client";
import ItemMenus from "@/components/pages/menu/item-menus";
import TabMenu from "@/components/pages/menu/tab";
import React, { useState } from "react";

const Page = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="pt-20 relative">
      <div className="fixed top-0 right-0 left-0 bg-background pt-4">
        <h1 className="text-lg font-bold text-center uppercase mb-4">Menu</h1>
        <TabMenu
          clickHandler={(val) => setActiveTab(val)}
          activeTab={activeTab}
        />
      </div>
      <div className="mt-2 h-[80%] overflow-auto">
        <ItemMenus />
      </div>
    </div>
  );
};

export default Page;
