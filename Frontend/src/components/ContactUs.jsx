export const ContactUs = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex gap-4 ">
          <img
            className="w-18 h-auto"
            src="/img/contactUs/woman.png"
            alt="woman"
          />
          <img className="w-18 h-auto" src="/img/contactUs/men.png" alt="men" />
        </div>
        <div className="bg-limeGreen text-black p-8 rounded-lg mt-4 font-semibold">
          <h2 className="text-2xl font-bold">
            "Ponte en forma, fortalécete, y obtén los resultados que anhelas con
            nuestro plan de fitness científicamente diseñado."
          </h2>
          <ul>
            <li>Incrementa músculo y fuerza</li>
            <li>Siéntete más sano</li>
            <li>Entrena a tu ritmo</li>
          </ul>
        </div>
        <button className="px-8 py-2 mt-4 bg-limeGreen text-black rounded-full font-semibold hover:bg-limonGreen2 transition">
          Quiero ser parte
        </button>
        <button className="px-8 py-2 mt-4 bg-limeGreen text-black rounded-full font-semibold hover:bg-limeGreen2">
          Contáctanos
        </button>
      </div>
      <div>
        <img src="/img/contactUs/routine.png" alt="routine" />
      </div>
    </>
  );
};
