import Navbar from "@/components/shared/bottom-bar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffe App | Home",
  description: "Welcome to the Coffee App",
};

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="text-sm">
      <Navbar />
      <main className="pb-20">{children}</main>
    </div>
  );
}
