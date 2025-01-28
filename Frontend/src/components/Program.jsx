import PropTypes from "prop-types";
import { cards } from "@/constants";

const Card = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center p-6 font-semibold text-white bg-black rounded-lg shadow-lg group hover:bg-tangerine hover:text-gray-900 w-60">
      <div className="mb-4">
        <img
          className="w-6 h-auto transition-colors duration-300 group-hover:invert group-hover:brightness-200 group-hover:saturate-0 "
          src={image}
          alt={title}
        />
      </div>
      <div className="mb-2">
        <h2 className="text-lg text-pretty">{title}</h2>
      </div>
      <div>
        <p className="text-center text-white">{description}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export const Program = () => {
  return (
    <div className="container px-8 md:px-24 py-12 md:py-[100px]">
      <h1 className="mb-10 text-5xl font-bold text-center leading-[62px]">
        Explora nuestros
        <br />
        <span className="text-tangerine">Programas</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 ">
        {cards.map((card, index) => (
          <Card
            key={index}
            image={card?.image}
            title={card?.title}
            description={card?.description}
          />
        ))}
      </div>
    </div>
  );
};
