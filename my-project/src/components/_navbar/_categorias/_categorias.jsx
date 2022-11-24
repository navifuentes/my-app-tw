import React from 'react';

const Categorias = () => {
    return (
        <ul className="flex ">
            <a className="pr-6 pl-2 py-1 text-xl text-white text-justify text-center hover:bg-teal-800 transition duration-500 ease-in-out" href="">Inicio</a>
            <a className="px-2 py-1 text-xl text-white text-justify text-center hover:bg-teal-800 transition duration-500 ease-in-out" href="">Cañas</a>
            <a className="px-2 py-1 text-xl text-white text-justify text-center hover:bg-teal-800 transition duration-500 ease-in-out" href="">Reels</a>
            <a className="px-2 py-1 text-xl text-white text-justify text-center hover:bg-teal-800 transition duration-500 ease-in-out" href="">Moscas</a>
        </ul>
    );
}

export default Categorias;
