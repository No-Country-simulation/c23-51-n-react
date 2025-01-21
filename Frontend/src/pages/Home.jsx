import { ContactUs } from "@/components/ContactUs";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Program } from "@/components/Program";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4">
    <Navbar/>
    <Hero/>
    <Program/>
    <ContactUs/>
      <div className="w-full bg-coalGrey">
        <Pricing />
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
