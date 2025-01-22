import { Link } from "react-router";
import PropTypes from "prop-types";
import { Button } from "./ui/button";
import clsx from "clsx";
import { CircleCheck } from "lucide-react";
import CountUp from "react-countup";

const PricingCard = ({ plan, isMonthly, index }) => {
  const isHighlighted = index === 2;
  return (
    <div
      className={clsx(
        "flex flex-col gap-6 py-6 px-7 rounded-2xl w-full overflow-hidden",
        "relative transition-all duration-300 hover:scale-105",
        isHighlighted ? "bg-tangerine" : "bg-[#0D0D0D]",
      )}
    >
      {isHighlighted && (
        <div className="h-[54px] absolute rotate-45 top-5 -right-14 bg-vividBlack text-tangerine text-center text-base font-semibold p-4 w-52">
          Mejor oferta
        </div>
      )}
      <div className="flex flex-col flex-grow">
        <h2
          className={clsx(
            "text-xl font-semibold",
            isHighlighted ? "text-vividBlack" : "text-tangerine",
          )}
        >
          {plan.title}
        </h2>

        <div className="flex items-baseline mt-6">
          <span
            className={clsx(
              "text-[56px] font-bold flex items-start",
              isHighlighted ? "text-vividBlack" : "text-white",
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
            className={clsx("ml-2 text-sm", isHighlighted ? "text-vividBlack/70" : "text-white/70")}
          >
            {isMonthly ? "/mes" : "/año"}
          </span>
        </div>

        <ul className="flex-grow mt-6 space-y-4">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <CircleCheck
                className="flex-shrink-0 w-5 h-5 mt-0.5"
                color={isHighlighted ? "#1C1C1C" : "#FA7E25"}
              />
              <p className={clsx("text-sm", isHighlighted ? "text-vividBlack" : "text-white")}>
                {feature}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <Link to="/register" className="mt-auto">
        <Button
          className={clsx(
            "w-full py-6 rounded-full font-semibold transition-all duration-300",
            isHighlighted
              ? "bg-vividBlack text-tangerine hover:bg-[#2C2C2C]"
              : "bg-tangerine text-vividBlack hover:bg-tangerine/90",
          )}
        >
          Regístrate
        </Button>
      </Link>
    </div>
  );
};

PricingCard.propTypes = {
  plan: PropTypes.shape({
    isHighlighted: PropTypes.bool,
    title: PropTypes.string,
    priceMonthly: PropTypes.number,
    priceYearly: PropTypes.number,
    features: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  isMonthly: PropTypes.bool.isRequired,
  index: PropTypes.number,
};

export default PricingCard;
