import { Link } from "react-router";
import { routine1, routine2, routine3, routine4, routine5 } from "@/assets";

const Rutinas = () => {
  const categorias = [
    { nombre: "RETOS SEMANALES", imagen: routine1 },
    { nombre: "INTENSIDAD", imagen: routine2 },
    { nombre: "NIVELES", imagen: routine3 },
    { nombre: "NIVELES", imagen: routine4 },
    { nombre: "NIVELES", imagen: routine5 },
  ];

  return (
    <>
      <header className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Rutinas de Calistenia</h1>
        <button className="text-gray-400">⚙</button>
      </header>
      <p className="mt-2 text-sm text-gray-400">Explora por categoría</p>
      <section className="mt-4 space-y-4">
        {categorias.map((categoria, index) => (
          <Link
            to={`/routines/${categoria.nombre.toLowerCase().replace(/ /g, "-")}`}
            key={index}
            className="relative block overflow-hidden rounded-lg"
          >
            <img
              src={categoria.imagen}
              alt={categoria.nombre}
              className="object-cover w-full opacity-75 h-33"
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
