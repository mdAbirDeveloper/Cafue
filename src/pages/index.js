
import localFont from "next/font/local";
import Carousel from "./components/Banner";
import AboutUsSection from "./components/About";
import SpecialOffers from "./components/Offer";
import ServicesSection from "./components/Services";
import Gallery from "./components/Gallery";
import NewsSection from "./components/Blog";
import Contact from "./components/Contact-us";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <Carousel />
      <AboutUsSection />
      <SpecialOffers />
      <ServicesSection />
      <Gallery />
      <Contact />
      <NewsSection />
    </div>
  );
}
