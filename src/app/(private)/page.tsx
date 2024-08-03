"use client";
import Greeting from "@/components/pages/home/greeting";
import GreetingCarousel from "@/components/pages/home/greeting/greeting-carousel";
import Navbar from "@/components/pages/home/navbar";
import { getToken } from "@/lib/token";
import { home } from "@/services/home";
import { LoaderIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const router = useRouter();

  const getData = async () => {
    setLoading(true);
    const data: any = getToken();
    if (!data) return router.push("/login");
    const token_type = data.token_type;
    const token = data.access_token;
    const res: any = await home(token_type + " " + token);
    if (res.error) return router.push("/login");
    setData(res.result);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="sm:container">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <LoaderIcon className={`w-5 h-5 animate-spin`} />
        </div>
      ) : (
        <>
          <Navbar />
          <div className="bg-img-company">
            <div className="container py-4">
              <Greeting data={data} />
            </div>
          </div>
          <GreetingCarousel data={data} />
        </>
      )}
    </div>
  );
}
