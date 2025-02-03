const WeeklyProgress = () => {
  const days = [
    { id: "D", completed: true },
    { id: "L", completed: true },
    { id: "M", completed: true },
    { id: "M", completed: true },
    { id: "J", completed: false },
    { id: "V", completed: false },
    { id: "S", completed: false },
  ];

  return (
    <div className="w-full max-w-md pt-8">
      <h2 className="mb-8 text-base font-bold leading-5 text-center">Tu progreso esta semana</h2>
      <div className="flex gap-2">
        {days.map((day, index) => (
          <div key={`${day.id}-${index}`} className="flex-1">
            <div
              className={`h-2 rounded-full mb-2 ${day.completed ? "bg-tangerine" : "bg-coalGrey"}`}
              role="progressbar"
              aria-valuenow={day.completed ? 100 : 0}
              aria-valuemin={0}
              aria-valuemax={100}
            />
            <span className="block text-sm text-center">{day.id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyProgress;
