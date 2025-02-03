import { abstractDesign } from "@/assets";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="container px-8 md:px-24 py-12 md:py-[100px]">
      <div className="relative flex flex-col md:flex-row p-9 md:p-20 items-center gap-9 md:gap-36 bg-[#1C1C1C] border-l border-t border-[#fa7e252e] rounded-3xl overflow-hidden hero-background">
        <img
          src={abstractDesign}
          alt="abstract"
          className="absolute top-0 left-0 w-1/4 max-w-[200px] "
        />

        <div className="flex flex-col gap-y-4">
          <h1 className="font-semibold capitalize text-3xl md:text-[50px] md:leading-[75px]">
            ¡Mejora tu estado físico <span className="text-tangerine">hoy!</span>
          </h1>

          <p className="text-balance">
            Únete a nuestro gimnasio y disfruta de entrenamientos innovadores, la guía de expertos y
            una comunidad que te apoyará en todo momento. No importa si eres principiante o un
            atleta experimentado, tenemos todo lo necesario para que alcances tus metas. ¡Inscríbete
            ahora y comienza tu transformación!
          </p>
        </div>

        <Button
          variant="ghost"
          className="h-16 px-[30px] z-10 py-[18px] rounded-full bg-tangerine text-lg hover:bg-tangerine/90"
        >
          Regístrate ahora
        </Button>
      </div>
    </section>
  );
};

export default CTA;
