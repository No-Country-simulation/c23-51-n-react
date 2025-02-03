import { Link, useNavigate } from "react-router";
import { arrowBack, IconFilter, routine1, routine2, routine3, routine4, routine5 } from "@/assets";

const Rutinas = () => {
  const navigate = useNavigate();

  const categorias = [
    { nombre: "RETOS SEMANALES", imagen: routine1 },
    { nombre: "INTENSIDAD", imagen: routine2 },
    { nombre: "NIVELES", imagen: routine3 },
    { nombre: "GUARDADAS", imagen: routine5 },
    { nombre: "PRÓXIMAMENTE", imagen: routine4 },
  ];

  const handleBack = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <header className="flex items-center justify-between">
        <button onClick={handleBack}>
          <img src={arrowBack} alt="Arrow back" className="size-6" />
        </button>
        <IconFilter />
      </header>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">Rutinas de Calistenia</h1>
        <p className="mt-2 text-cream/80">Explora por categoría</p>
      </div>
      <section className="pb-20 mt-4 space-y-4 overflow-y-auto">
        {categorias.map((categoria, index) => (
          <Link
            to={`/routines/${categoria.nombre.toLowerCase().replace(/ /g, "-")}`}
            key={index}
            className="relative block overflow-hidden rounded-lg"
          >
            <img
              src={categoria.imagen}
              alt={categoria.nombre}
              className="object-cover w-full opacity-75 max-h-40 img-gradient"
            />
            <div className="absolute text-white bottom-4 left-4">
              <h4 className="text-lg font-bold">{categoria.nombre}</h4>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
};

export default Rutinas;
