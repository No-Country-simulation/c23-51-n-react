import { abstractBottom, abstractTop, men, routine, woman } from "@/assets";
import { CircleCheck } from "lucide-react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export const ContactUs = () => {
  return (
    <div className="container relative px-8 md:px-24 py-12 md:py-[100px]">
      <img
        src={abstractTop}
        alt="Abstract design top"
        className="absolute top-0 left-0 w-1/4 max-w-[200px] -z-10"
      />
      <div className="grid grid-cols-1 gap-4 p-4 rounded-lg md:grid-cols-3">
        <div className="overflow-hidden rounded-lg">
          <img src={woman} alt="Mujer haciendo ejercicio" className="object-cover w-full h-full" />
        </div>

        <div className="overflow-hidden rounded-lg">
          <img src={men} alt="Hombre haciendo ejercicio" className="object-cover w-full h-full" />
        </div>

        <div className="overflow-hidden rounded-lg md:row-span-2">
          <img
            src={routine}
            alt="Mujer preparandose para levantar pesa"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex flex-col justify-between p-6 bg-orange-500 rounded-lg md:col-span-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-black">
              &quot;Ponte en forma, fortalécete, y obtén los resultados que anhelas con nuestro plan
              de fitness científicamente diseñado.&quot;
            </h2>
            <ul className="mb-4 text-black">
              <li className="flex items-center mb-2">
                <CircleCheck className="flex-shrink-0 mr-2 size-5" color={"#1C1C1C"} />
                Incrementa músculo y fuerza
              </li>
              <li className="flex items-center mb-2">
                <CircleCheck className="flex-shrink-0 mr-2 size-5" color={"#1C1C1C"} />
                Siéntete más sano
              </li>
              <li className="flex items-center">
                <CircleCheck className="flex-shrink-0 mr-2 size-5" color={"#1C1C1C"} />
                Entrena a tu ritmo
              </li>
            </ul>
          </div>
          <div className="flex space-x-4">
            <Link to="/register">
              <Button
                variant="ghost"
                className={
                  "px-4 py-2 rounded-full font-semibold transition-all duration-300 bg-vividBlack hover:bg-[#2C2C2C] text-tangerine"
                }
              >
                Quiero ser parte
              </Button>
            </Link>
            <Link to={"mailto:momentum@fitness.com"}>
              <Button
                variant="ghost"
                className={
                  "px-4 py-2 rounded-full font-semibold transition-all duration-300 bg-transparent border border-vividBlack hover:bg-white hover:text-orange-500 hover:border-none text-vividBlack"
                }
              >
                Contáctanos
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <img
        src={abstractBottom}
        alt="Abstract design bottom"
        className="absolute bottom-0 right-0 w-1/4 max-w-[200px] -z-10"
      />
    </div>
  );
};
