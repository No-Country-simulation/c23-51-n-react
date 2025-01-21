import { body, muscle, nutrition, run } from "@/assets";

const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center p-6 font-semibold text-white bg-black rounded-lg shadow-lg group hover:bg-limeGreen hover:text-gray-900 w-60">
      <div className="mb-4">
        <img
          className="w-6 h-auto transition-colors duration-300 group-hover:invert group-hover:brightness-1.5 group-hover:saturate-0 "
          src={image}
          alt={title}
        />
      </div>
      <div className="mb-2">
        <h2 className="font-sans text-xl ">{title}</h2>
      </div>
      <div>
        <p className="text-center text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export const Program = () => {
  const cards = [
    {
      image: muscle,
      title: "Resistencia Física",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
    },
    {
      image: run,
      title: "Fuerza Cardio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
    },
    {
      image: body,
      title: "Pérdida de Grasa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
    },
    {
      image: muscle,
      title: "Ganancia muscular",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
    },
    {
      image: nutrition,
      title: "Nutrición",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
    },
  ];

  return (
    <div className="px-5 py-10 text-white bg-fondo">
      <h1 className="mb-10 text-5xl font-bold text-center">
        <span className="text-white "> Explora nuestros</span> <br />
        <span className="text-limeGreen">Programas</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 ">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};
