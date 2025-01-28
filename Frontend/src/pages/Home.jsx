import { logo } from "@/assets";
import HeroCarousel from "@/components/HeroCarousel";

const Home = () => {
  return (
    <main className="h-screen pt-4">
      <div className="relative flex items-center justify-center pt-4">
        <img src={logo} alt="Logo Momentum" className="z-10 object-contain" />
        <div className="absolute inset-0">
          <HeroCarousel />
        </div>
      </div>
    </main>
  );
};

export default Home;
