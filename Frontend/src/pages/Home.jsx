import { ContactUs } from "@/components/ContactUs";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Program } from "@/components/Program";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="w-full bg-coalGrey">
        <Program />
      </div>
      <ContactUs />
      <div className="w-full bg-coalGrey">
        <Pricing />
      </div>
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
