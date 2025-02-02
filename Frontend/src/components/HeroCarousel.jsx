import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { sliderCarousel } from "@/constants";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";

const HeroCarousel = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="relative w-full max-w-md mx-auto">
      <CarouselContent>
        {sliderCarousel.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[560px] w-full flex justify-center items-center">
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="absolute inset-0 object-cover w-full h-[560px] brightness-50 hero-img"
              />

              <div className="relative flex flex-col items-center justify-center h-full">
                <div className="absolute flex items-center justify-center gap-2 bottom-2.5">
                  {sliderCarousel.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => api?.scrollTo(i)}
                      className={`size-3 rounded-full transition-all ${
                        current === i ? " bg-tangerine" : " bg-white/25"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center px-4 py-2 text-center">
              <h2 className="mb-3 leading-[30px]">{slide.title}</h2>
              <p className="leading-5 ">{slide.description}</p>

              <Separator className="my-3 w-52 border-white/60" />

              <div className="flex flex-col w-full gap-1 px-4 ">
                <Link to="/register">
                  <Button>{slide.button}</Button>
                </Link>
                <Link to="/login">
                  <Button variant="link">Ya tengo una cuenta</Button>
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HeroCarousel;
