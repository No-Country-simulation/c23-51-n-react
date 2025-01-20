import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-full bg-coalGrey">
        <Pricing />
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
