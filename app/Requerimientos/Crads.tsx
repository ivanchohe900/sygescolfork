"use client";
import React from "react";
import { useState } from "react";
import BotonCrear from "./BotonCrear";
import BotonSolucion from "./BotonSolucion";
import BotonPdts from "./BotonPdts";

const Crads = () => {
  const [size, setSize] = useState(null);
  const handleOpenCrear = (value: any) => {
    setSize(value);
  };

  const [size2, setSize2] = useState(null);
  const handleOpenSolucion = (value: any) => {
    setSize2(value);
  };

  const [size3, setSize3] = useState(null);
  const handleOpenPdts = (value: any) => {
    setSize3(value);
  };

  return (
    <>
      <BotonCrear size={size} setSize={setSize} handleOpen={handleOpenCrear} />

      <BotonSolucion
        size2={size2}
        setSize2={setSize2}
        handleOpen={handleOpenSolucion}
      />

      <BotonPdts
        size3={size3}
        setSize3={setSize3}
        handleOpen={handleOpenPdts}
      />

      <div className="flex flex-col">
        {/* <h2 className="mb-4 text-2xl font-bold">Feature Cards</h2> */}
        <div className="p-2 mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          <div
            onClick={() => handleOpenCrear("lg")}
            className="flex items-start rounded-xl bg-white p-4 shadow-2xl cursor-pointer  border border-indigo-600 hover:scale-95"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="font-semibold">Agregar un Requerimiento</h2>
            </div>
            {/* <div className="ml-4">
              <Button variant="gradient">Ver</Button>
            </div> */}
          </div>
          <div
            onClick={() => handleOpenSolucion("lg")}
            className="flex items-start rounded-xl bg-white p-4 shadow-2xl cursor-pointer border border-indigo-600 hover:scale-95"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-900"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="font-semibold">Requerimientos solucionados</h2>
              <p className="mt-2 text-sm text-gray-500">#CANTIDAD#</p>
            </div>
            {/* <div className="ml-4">
              <BotonSolucion />
            </div> */}
          </div>
          <div
            onClick={() => handleOpenPdts("lg")}
            className="flex items-start rounded-xl bg-white p-4 shadow-2xl cursor-pointer border border-indigo-600 hover:scale-95"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-900"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h2 className="font-semibold">Requerimientos Pendientes</h2>
              <p className="mt-2 text-sm text-gray-500">#CANTIDAD#</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crads;
