import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import type { Metadata } from "next";
import ScreenShot from "/public/og-screen-shot.jpg";

export const metadata: Metadata = {
  title: "Page Trail",
  description:
    "Understand your online activity by seeing exactly how much time you spend on each site, consolidated at the domain level, and optimize your browsing experience",
  openGraph: {
    images: [
      {
        url: ScreenShot.src,
        width: 1920,
        height: 1920,
        alt: "Page Trail",
      },
    ],
    title: "Page Trail",
    description:
      "Understand your online activity by seeing exactly how much time you spend on each site, consolidated at the domain level, and optimize your browsing experience",
  },
};

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
