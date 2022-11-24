import React from "react";

const Navbar = () => {
  return (
    <nav className="flex item-center justify-between bg-teal-500 p-6">
        <div>
            <span className="fill-current mr-2">🎣</span>
            <span className="font-semibold text-xl tracking-tight">Pesca y Mosca</span>
        </div>
        <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded">Menu</button>

        </div>
        <ul className="flex ">
            <a className="border rounded px-2 text-xl" href="">Cañas</a>
            <a className="border rounded px-2 text-xl" href="">Reels</a>
            <a className="border rounded px-2 text-xl" href="">Moscas</a>
        </ul>
        <div>
            CartWidget
        </div>

    </nav>
  );
};

export default Navbar;
