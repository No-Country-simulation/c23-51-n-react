import { men, routine, woman } from "@/assets";

export const ContactUs = () => {
  return (
    <>
    <div className="flex  m-0">


      <div className="container mx-auto ">
        <div className="flex gap-4 ">
          <img
            className="w-[18%] h-auto rounded-lg border border-limeBords"
            src={woman}
            alt="woman"
          />
          <img className="w-[18%] h-auto rounded-lg border border-limeBords" src={men} alt="men" />
        </div>
        <div className="p-8 mt-4 font-semibold text-black rounded-lg bg-limeGreen w-[37%] min-h-[30vh] rounded-lg">
          <h2 className="text-2xl font-bold">
            "Ponte en forma, fortalécete, y obtén los resultados que anhelas con nuestro plan de
            fitness científicamente diseñado."
          </h2>
          <ul className="font-semibold space-y-2 mt-4">
            <li className="flex items-center space-x-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-sm">
                ✓
              </span>{" "}
              <span>Incrementa músculo y fuerza</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-sm">
                ✓
              </span>{" "}
              <span>Siéntete más sano</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white text-sm">
                ✓
              </span>{" "}
              <span>Entrena a tu ritmo</span>
            </li>
          </ul>

          <div className="space-y-4">
            <button className="px-8 py-2 font-semibold border border-gray-800 text-black transition rounded-full bg-limeGreen hover:bg-fondo hover:text-limeGreen">
              Quiero ser parte
            </button>
            <button className="px-8 py-2 font-semibold border border-gray-800 text-black transition rounded-full bg-limeGreen hover:bg-fondo hover:text-limeGreen">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
      <div className="w-[18%] h-auto">
        <img src={routine} alt="routine" />
      </div>
    </div>
    </>
  );
};
