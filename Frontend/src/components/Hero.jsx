import { fitness } from "@/assets";

export const Hero = () => {
  return (
    <>
      <main>
        <section className="text-white bg-fondo2">
          <div className="container flex flex-col items-center justify-center h-screen mx-auto lg:flex-row">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-5xl font-bold">
                <span className=" text-limeGreen"> Libera</span> tu potencial. <br />
                <span className="text-limeGreen">Construye </span>tu futuro
              </h1>
              <p className="mt-4 text-xl">
                Ready to transform your body and mind? We're more than just a gym, we're your
                community to conquer your fitness goals. Join us and experience personalized
                training, motivating classes, and the support you need to achieve greatness. Start
                your journey today!
              </p>
              <button className="px-8 py-2 mt-4 font-semibold text-black transition rounded-full bg-limeGreen hover:bg-limonGreen2">
                ¡Quiero entrenar!
              </button>
            </div>

            {/* Imagen */}
            <div className="mt-8 lg:mt-0 lg:w-1/2">
              <img src={fitness} alt="Fitness illustration" className="w-full h-auto" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
