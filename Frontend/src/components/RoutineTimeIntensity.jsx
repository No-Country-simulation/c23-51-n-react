/* eslint-disable react/prop-types */
import { TimeIcon } from "@/assets";

const RoutineTimeIntensity = ({ time, intensity }) => {
  const getIntensityDots = () => {
    const dots = [];
    const totalDots = 3;
    const filledDots = intensity === "baja" ? 1 : intensity === "media" ? 2 : 3;

    for (let i = 0; i < totalDots; i++) {
      dots.push(
        <div
          key={i}
          className={`rounded-full size-5 ${
            i < filledDots ? "bg-tangerine" : "border-2 border-tangerine bg-transparent"
          }`}
        />,
      );
    }

    return dots;
  };

  return (
    <div className="absolute bottom-2  py-3 px-[17px] rounded-lg bg-coalGrey/30 routine-shadow h-12 w-full max-w-sm">
      <div className="flex items-center justify-between gap-x-10">
        <div className="flex flex-row items-start text-base gap-x-2 text-tangerine">
          <TimeIcon color="#FA7E25" />
          {time ? `${time} '` : "5'"}
        </div>

        <div className="flex flex-row items-center gap-1">
          {getIntensityDots()}
          <span className="pl-2 text-base leading-5 capitalize text-tangerine">
            Intensidad {intensity}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RoutineTimeIntensity;
