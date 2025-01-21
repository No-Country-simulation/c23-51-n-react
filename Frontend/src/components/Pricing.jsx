import clsx from "clsx";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import CountUp from "react-countup";
import { CircleCheck } from "lucide-react";
import { Link } from "react-router";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="container px-8 md:px-24">
      <div className="flex flex-col gap-8 py-12 md:py-[100px]">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:justify-between">
          <h1 className="text-3xl md:text-[32px] capitalize font-bold">Nuestros planes</h1>
          <div className="w-[280px] inline-flex items-center p-1 bg-vividBlack rounded-full relative">
            <div
              className={clsx(
                "absolute left-1 h-[calc(100%-10px)] w-[calc(50%-4px)] overflow-hidden transition-transform duration-500",
                "bg-tangerine rounded-full",
                !isMonthly && "translate-x-full",
              )}
            />
            <Button
              variant="ghost"
              className={clsx(
                "relative px-6 py-2 rounded-full w-[140px] z-10",
                isMonthly && "text-vividBlack",
              )}
              onClick={() => setIsMonthly(true)}
            >
              Pago Mensual
            </Button>
            <Button
              variant="ghost"
              className={clsx(
                "relative px-6 py-2 rounded-full w-[140px] z-10",
                !isMonthly && "text-vividBlack",
              )}
              onClick={() => setIsMonthly(false)}
            >
              Pago Anual
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={clsx(
                "flex flex-col gap-6 py-6 px-7 rounded-2xl w-full overflow-hidden",
                "relative transition-all duration-300 hover:scale-105",
                index === 2 ? "bg-tangerine" : "bg-[#0D0D0D]",
              )}
            >
              {index === 2 && (
                <div className="h-[54px] absolute rotate-45 top-5 -right-14 bg-vividBlack text-tangerine text-center text-base font-semibold p-4 w-52">
                  Mejor oferta
                </div>
              )}
              <h2
                className={clsx(
                  "text-xl font-semibold",
                  index === 2 ? "text-vividBlack" : "text-tangerine",
                )}
              >
                {plan.title}
              </h2>

              <div className="flex items-baseline">
                <span
                  className={clsx(
                    "text-[56px] font-bold flex items-start",
                    index === 2 ? "text-vividBlack" : "text-white",
                  )}
                >
                  $
                  <CountUp
                    start={0}
                    end={isMonthly ? plan.priceMonthly : plan.priceYearly}
                    duration={0.4}
                    useEasing
                    preserveValue
                  />
                </span>
                <span
                  className={clsx(
                    "ml-2 text-sm",
                    index === 2 ? "text-vividBlack/70" : "text-white/70",
                  )}
                >
                  {isMonthly ? "/mes" : "/año"}
                </span>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CircleCheck
                      className="flex-shrink-0 w-5 h-5 mt-0.5"
                      color={index === 2 ? "#1C1C1C" : "#FA7E25"}
                    />
                    <p className={clsx("text-sm", index === 2 ? "text-vividBlack" : "text-white")}>
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>

              <Link to="/register">
                <Button
                  className={clsx(
                    "mt-auto w-full py-6 rounded-full font-semibold transition-all duration-300",
                    index === 2
                      ? "bg-vividBlack text-tangerine hover:bg-[#2C2C2C]"
                      : "bg-tangerine text-vividBlack hover:bg-tangerine/90",
                  )}
                >
                  Regístrate
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
