import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      aqui ira la Langing page !
      <Button asChild>
        <Link to="/login">ir al login</Link>
      </Button>
      <Button asChild>
        <Link to="/register">ir al registro</Link>
      </Button>
      <div className="w-full bg-coalGrey">
        <Pricing />
      </div>
      <Testimonials />
    </div>
  );
};

export default Home;
