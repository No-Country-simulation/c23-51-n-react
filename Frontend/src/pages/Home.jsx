import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <>
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
