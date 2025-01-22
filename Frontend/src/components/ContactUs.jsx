import { men, routine, woman } from "@/assets";

export const ContactUs = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-8 mt-20">
        {/* Sección de imágenes: mujer y hombre */}
        <div className="flex justify-center items-center">
          <img
            className="w-full h-auto rounded-lg border border-limeBords mb-auto"
            src={woman}
            alt="Mujer haciendo ejercicio"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            className="w-full h-auto rounded-lg border border-limeBords mb-auto"
            src={men}
            alt="Hombre haciendo ejercicio"
          />
        </div>

        {/* Imagen de rutina  */}
        <div className="flex justify-center items-center col-span-2 lg:col-span-1">
          <img
            className="w-full h-auto rounded-lg border border-limeBords"
            src={routine}
            alt="Rutina de ejercicios"
          />
        </div>

        {/* Contenedor del texto y los botones */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 p-8 mt-4 font-semibold text-black rounded-lg bg-limeGreen w-[%] h-[90%] ">
          <h2 className="text-2xl font-bold mb-4">
            "Ponte en forma, fortalécete, y obtén los resultados que anhelas con nuestro plan de
            fitness científicamente diseñado."
          </h2>

          <ul className="font-semibold space-y-2 mb-4">
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

          <div className="space-y-4 mt-4">
            <button className="px-8 py-2 font-semibold border border-gray-800 text-black transition rounded-full bg-limeGreen hover:bg-fondo hover:text-limeGreen">
              Quiero ser parte
            </button>
            <button className="px-8 py-2 font-semibold border border-gray-800 text-black transition rounded-full bg-limeGreen hover:bg-fondo hover:text-limeGreen">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
