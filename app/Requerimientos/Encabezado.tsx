"use client";
import React from "react";

const Encabezado = () => {
  return (
    <>
      <div className="text-secondary flex-1 p-1">
        <div className="mb-5 text-center font-bold font-regular relative block w-full rounded-lg bg-blue-900 p-4 text-xl leading-5 text-white opacity-100">
          <h1>Módulo de Requerimientos</h1>
        </div>
        <p className="font-bold text-lg mb-2">Sres. SYGESCOL :</p>
        <p className="text-justify font-semibold mb-4">
          {/* Se recomienda el uso de la interfaz proporcionada por SYGESCOL para
          mejorar la eficacia y eficiencia de las interacciones, ya que está
          diseñada para atender solicitudes y Requerimientos de manera ágil y
          efectiva. Al utilizarla, se disfrutará de una experiencia óptima y se
          podrán aprovechar todas las funcionalidades ofrecidas, maximizando así
          el rendimiento en la plataforma. */}
          Yo Brahian Orozco en mi rol de Docente de la Institución Educativa
          Leonidas Rubio Villegas solicito el día 11 del mes de Abril del 2023,
          siendo las 9:49 am, se autorice a quien corresponda para que se
          realicen los ajustes en la(s) RUTA(s) y/o siatuaciones abajo
          descritas, lo que considero no corresponden o deben ser objeto de
          revisión.
        </p>
      </div>
      <div className="text-secondary flex-1 p-1">
        {/* <div className="mb-5 text-center font-bold font-regular relative block w-full rounded-lg bg-blue-900 p-4 text-xl leading-5 text-white opacity-100">
          <h1>Requerimiento N° 1 año 2023</h1>
        </div> */}
      </div>
    </>
  );
};

export default Encabezado;
