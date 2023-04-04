import React from "react";

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
  </tr>
));

const TablaModifica = () => {
  return (
    <>
      <div className="relative font-bold m-3 overflow-x-auto shadow-lg sm:rounded-lg">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Docente
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
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </>
  );
};

export default TablaModifica;
