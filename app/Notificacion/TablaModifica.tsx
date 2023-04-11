"use client";
import { useState } from "react";
import BotonModifi from "./BotonModifi";
import axios from "axios";

const tableData = [
  {
    docente: "Brahian Orozco",
    Asignatura: "Humanidades",
    Grado: "6-01",
    TipoP: "No se ha subido Comportamiento",
  },
];

const tableRows = tableData.map((data, index) => (
  <tr key={index} className="bg-blue-500 border-b border-blue-400">
    <th scope="row" className="px-6 py-4 text-white">
      {data.docente}
    </th>
    <td className="px-6 py-4 text-white font-semibold">{data.Asignatura}</td>
    <td className="px-6 py-4 text-white font-semibold">{data.Grado}</td>
    <td className="px-6 py-4 text-white font-semibold">{data.TipoP}</td>
    <td>
      <BotonModifi />
    </td>
  </tr>
));

const TablaModifica = () => {
  const [showInfo, setShowInfo] = useState({} as any);
  axios
    .get("/api/CierrePeriodo/InfoCierre", {
      params: { IdDocente: 160, colegio: 2 },
    })
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error));

  return (
    <>
      <div className="relative font-bold m-3 overflow-x-auto shadow-lg sm:rounded-lg">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
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
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </>
  );
};

export default TablaModifica;
