import React from "react";
import Categorias from "./Categorias/Categorias";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="mx-auto flex item-center justify-between bg-teal-500 p-6 shadow-lg">
      <div>
        <span className="fill-current mr-2 text-5xl">🎣</span>
        <span className="py-2 text-white font-semibold text-4xl tracking-tight">
          La Trucha Loca
        </span>
      </div>
      <Categorias />
      <CartWidget />
      <button className="flex lg:hidden">
        <i className="text-4xl fa-solid fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
