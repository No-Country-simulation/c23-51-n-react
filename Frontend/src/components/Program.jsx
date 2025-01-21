const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center bg-black  text-white   hover:bg-limeGreen hover:text-gray-900 font-semibold rounded-lg shadow-lg p-6 w-60">
      <div className="mb-4">
        <img className="w-6 h-6  invert brightness-0   " src={image} alt={title} />
      </div>
      <div className="mb-2">
        <h2 className=" text-xl font-sans">{title}</h2>
      </div>
      <div>
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    </div>
  );
};

export const Program = () => {
  const cards = [
    {
      image: "/img/iconsCard/4.png",
      title: "Resistencia Física",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
    },
    {
      image: "/img/iconsCard/1.png",
      title: "Fuerza Cardio",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
    },
    {
      image: "/img/iconsCard/2.png",
      title: "Pérdida de Grasa",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
    },
    {
      image: "/img/iconsCard/4.png",
      title: "Ganancia muscular",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
    },
    {
      image: "/img/iconsCard/3.png",
      title: "Nutrición",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
    },
  ];

  return (
    <div className="bg-fondo text-white py-10 px-5">
      <h1 className="text-5xl font-bold text-center mb-10">
        <span className=" text-white"> Explora nuestros</span> <br />
        <span className="text-limeGreen">Programas</span>
      </h1>
      <div className="flex flex-wrap gap-6 justify-center ">

      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
      </div>
    </div>
  );
};
