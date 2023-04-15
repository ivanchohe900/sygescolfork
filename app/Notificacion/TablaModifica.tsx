"use client";
import { useState } from "react";
import BotonModifi from "./BotonModifi";
import axios from "axios";
import { Button } from "@material-tailwind/react";

// const tableData = [
//   {
//     docente: "Brahian Orozco",
//     Asignatura: "Humanidades",
//     Grado: "6-01",
//     TipoP: "No se ha subido Comportamiento",
//   },
// ];

const TablaModifica = ({ Pendientes }: any) => {
  const [showInfo, setShowInfo] = useState({} as any);

  return (
    <div className=" font-bold m-3 overflow-x-auto shadow-lg sm:rounded-lg">
      <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100 ">
        <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Docente {showInfo?.IdDocente || ""}
            </th>
            <th scope="col" className="px-6 py-3">
              Asignatura
            </th>
            <th scope="col" className="px-6 py-3">
              Grado
            </th>
            <th scope="col" className="px-6 py-3">
              Tipo Pendiente
            </th>
            <th scope="col" className="px-6 py-3">
              Ver estudiantes
            </th>
          </tr>
        </thead>
        {Pendientes?.length > 0 &&
          Pendientes?.map((item: any) => (
            <>
              <tbody>
                {Pendientes?.map((pendiente: any) => (
                  <>
                    <tr
                      key={pendiente?.id}
                      className="bg-blue-500 border-b border-blue-400"
                    >
                      <th scope="row" className="px-6 py-4 text-white">
                        {pendiente?.Apellidos} {pendiente?.Nombre}
                      </th>
                      <td className="px-6 py-4 text-white font-semibold">
                        {pendiente?.asignatura}
                      </td>
                      <td className="px-6 py-4 text-white font-semibold">
                        {pendiente?.grupo_nombre}
                      </td>
                      <td className="px-6 py-4 text-white font-semibold capitalize">
                        {pendiente?.tipo_pendiente}
                      </td>
                      <td>
                        {" "}
                        {pendiente?.estudiantes?.length > 0 && (
                          <Button className="mx-10">Ver</Button>
                          // <BotonModifi />
                        )}{" "}
                        {/*  */}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </>
          ))}
      </table>
    </div>
  );
};

export default TablaModifica;
