import { useState } from "react";
import { Link } from "react-router";
import { routine1, routine2, routine3, routine4, routine5 } from "@/assets";
import BottomNav from "@/components/BottomNav";

const Rutinas = () => {
  const categorias = [
    { nombre: "RETOS SEMANALES", imagen: routine1 },
    { nombre: "INTENSIDAD", imagen: routine2 },
    { nombre: "NIVELES", imagen: routine3 },
    { nombre: "NIVELES", imagen: routine4 },
    { nombre: "NIVELES", imagen: routine5 },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen p-4 font-sans pb-20">
      <header className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Rutinas de Calistenia</h1>
        <button className="text-gray-400">⚙</button>
      </header>
      <p className="text-gray-400 text-sm mt-2">Explora por categoría</p>
      <section className="mt-4 space-y-4">
        {categorias.map((categoria, index) => (
          <Link
            to={`/rutinas/${categoria.nombre.toLowerCase().replace(/ /g, "-")}`}
            key={index}
            className="block relative overflow-hidden rounded-lg"
          >
            <img
              src={categoria.imagen}
              alt={categoria.nombre}
              className="w-full opacity-75 object-cover h-33"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg">{categoria.nombre}</h4>
            </div>
          </Link>
        ))}
      </section>
      <BottomNav />
    </div>
  );
};

export default Rutinas;
