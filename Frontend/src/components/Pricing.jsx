import clsx from "clsx";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import PricingCard from "./PricingCard";

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
            <PricingCard key={plan.id} plan={plan} isMonthly={isMonthly} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
