import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/constants";
import { quote } from "@/assets";
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "./ui/separator";

const Testimonials = () => {
  return (
    <section className="container flex flex-col gap-12 px-8 md:px-24 py-12 md:py-[100px]">
      <div className="flex flex-col gap-3.5">
        <h1 className="text-[50px] font-semibold leading-[75px] text-white">
          Testimonios de nuestra <br /> <span className="text-tangerine">Comunidad</span>
        </h1>
        <p className="text-lg font-light text-silverGray">
          Lorem ipsum dolor sit amet consectetur. Venenatis a massa sagittis mauris tortor. <br />
          Lorem ipsum dolor sit amet consectetur. Venenatis a massa sagittis mauris torto
        </p>
      </div>

      <div className="w-full px-4 md:px-6 lg:px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3"
              >
                <Card className="relative h-full bg-transparent border-none">
                  <CardContent className="flex flex-col items-center justify-between h-full p-4 text-white">
                    <div className="flex items-center justify-center w-full mb-4">
                      <Separator className="w-1/4 bg-gray-300" />
                      <img src={quote} alt="Quote icon" className="size-[60px] mx-4" />
                      <Separator className="w-1/4 bg-gray-300" />
                    </div>
                    <p className="flex-grow text-sm font-normal leading-6 text-center text-white md:text-base md:leading-7">
                      {testimonial.text}
                    </p>
                    <span className="text-base font-medium text-tangerine">
                      {testimonial.autor}
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute top-0 bottom-0 left-0 w-1/6 pointer-events-none rounded-xl bg-gradient-to-l from-transparent to-vividBlack" />
          <CarouselPrevious className="z-10 hidden -left-6 text-tangerine border-tangerine bg-coalGrey md:flex hover:text-tomato hover:border-tomato" />
          <CarouselNext className="z-10 hidden -right-6 text-tangerine border-tangerine bg-coalGrey md:flex hover:text-tomato hover:border-tomato" />
          <div className="absolute top-0 bottom-0 right-0 w-1/6 pointer-events-none rounded-xl bg-gradient-to-r from-transparent to-vividBlack" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
