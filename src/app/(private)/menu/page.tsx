"use client";
import ItemMenus from "@/components/pages/menu/item-menus";
import TabMenu from "@/components/pages/menu/tab";
import { getToken } from "@/lib/token";
import { menu } from "@/services/menu";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState(
    data?.categories?.[0]?.category_name || 0
  );
  const router = useRouter();

  const getData = async () => {
    setLoading(true);
    const data: any = getToken();
    if (!data) return router.push("/login");
    const token_type = data.token_type;
    const token = data.access_token;
    const res: any = await menu(token_type + " " + token);
    if (res.error) return router.push("/login");
    setData(res.result);
    setActiveTab(res.result.categories[0].category_name);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <LoaderIcon className={`w-5 h-5 animate-spin`} />
      </div>
    );

  return (
    <div className="relative">
      <div className="fixed top-0 right-0 left-0 bg-background pt-4">
        <h1 className="text-lg font-bold text-center uppercase mb-4">Menu</h1>
        <TabMenu
          data={data}
          clickHandler={(val) => setActiveTab(val)}
          activeTab={activeTab}
        />
      </div>
      <div className="mt-2 overflow-auto bg-slate-50">
        <ItemMenus data={data} />
      </div>
    </div>
  );
};

export default Page;
