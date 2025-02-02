import { useState } from "react";

const WeeklyProgress = ({ onSelectDay }) => {
  const [selectedDay, setSelectedDay] = useState("LU");
  const days = ["DO", "LU", "MA", "MI", "JU", "VI", "SA"]; // Evita conflictos con "M"

  const handleDayClick = (day) => {
    setSelectedDay(day);
    if (onSelectDay) {
      onSelectDay(day);
    }
  };

  return (
    <section className="mt-6">
      <h2 className="text-sm text-gray-400">Tu progreso esta semana</h2>
      <div className="grid grid-cols-7 gap-2 mt-2">
        {days.map((day) => (
          <div
            key={day}
            onClick={() => handleDayClick(day)}
            className={`w-full h-4 flex items-center justify-center rounded-full cursor-pointer ${
              selectedDay === day ? "bg-orange-500 text-black" : "bg-gray-600 text-white"
            }`}
          >
            <span className="text-xs font-bold">{day}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeeklyProgress;
