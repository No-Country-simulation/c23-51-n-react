import { abstractArrow, fitnessModels } from "@/assets";

export const Hero = () => {
  return (
    <section className="container mx-auto px-8 md:px-24 py-12 md:py-[100px]">
      <div className="flex flex-col items-start justify-between gap-y-12 lg:flex-row">
        <div className="z-10 lg:text-left lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-[75px]">
            <span className="text-tangerine">Libera</span> tu potencial.
            <br />
            <span className="text-tangerine">Construye </span>tu futuro.
          </h1>
          <p className="mt-4 text-lg leading-7">
            Ready to transform your body and mind? We&apos;re more than just a gym, we&apos;re your
            community to conquer your fitness goals. Join us and experience personalized training,
            motivating classes, and the support you need to achieve greatness. Start your journey
            today!
          </p>
          <button className="px-8 py-2 mt-6 font-semibold text-black transition rounded-full bg-tangerine hover:bg-tangerine/90">
            ¡Quiero entrenar!
          </button>
        </div>

        <div className="relative w-full max-w-md mx-auto lg:w-1/2">
          <div className="relative w-full aspect-square">
            <img
              src={abstractArrow}
              alt="Arrows"
              className="absolute z-[5] w-full -left-1 -top-1/4 opacity-50"
            />
            <div className="flex items-center justify-start aspect-square hero-background bg-[#1A1A1A] border-2 border-coalGrey rounded-3xl">
              <img
                src={fitnessModels}
                alt="Fitness progress"
                className="absolute bottom-0 left-4 md:left-24 object-cover w-auto overflow-visible h-[80%] md:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
