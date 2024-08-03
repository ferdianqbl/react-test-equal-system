import Greeting from "@/components/pages/home/greeting";
import GreetingCarousel from "@/components/pages/home/greeting/greeting-carousel";
import Navbar from "@/components/pages/home/navbar";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="bg-img-company">
        <div className="container py-4">
          <Greeting />
        </div>
      </div>
      <GreetingCarousel />
    </div>
  );
}
