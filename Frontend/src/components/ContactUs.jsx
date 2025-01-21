import { men, routine, woman } from "@/assets";

export const ContactUs = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex gap-4 ">
          <img className="h-auto w-18" src={woman} alt="woman" />
          <img className="h-auto w-18" src={men} alt="men" />
        </div>
        <div className="p-8 mt-4 font-semibold text-black rounded-lg bg-limeGreen">
          <h2 className="text-2xl font-bold">
            "Ponte en forma, fortalécete, y obtén los resultados que anhelas con nuestro plan de
            fitness científicamente diseñado."
          </h2>
          <ul>
            <li>Incrementa músculo y fuerza</li>
            <li>Siéntete más sano</li>
            <li>Entrena a tu ritmo</li>
          </ul>
        </div>
        <button className="px-8 py-2 mt-4 font-semibold text-black transition rounded-full bg-limeGreen hover:bg-limonGreen2">
          Quiero ser parte
        </button>
        <button className="px-8 py-2 mt-4 font-semibold text-black rounded-full bg-limeGreen hover:bg-limeGreen2">
          Contáctanos
        </button>
      </div>
      <div>
        <img src={routine} alt="routine" />
      </div>
    </>
  );
};
