"use client";
import DataTable from "react-data-table-component";
import React, { useMemo, useState } from "react";
import { customStyles } from "../../utils/CustomStylesTables";

const TablaResp = ({ info, setShowModal, setInfoEditar, InfoUser }: any) => {
  const [filterText, setFilterText] = useState("");
  const filteredItems = info?.filter((item: any) => {
    let nombre = `${item?.Nombre?.toLowerCase()} ${item?.Apellidos?.toLowerCase()}`;

    return (
      (nombre &&
        nombre
          ?.toString()
          ?.replace(/\s+/g, " ")
          ?.toLowerCase()
          ?.includes(filterText?.toLowerCase())) ||
      item?.Documento?.toLowerCase()?.includes(filterText?.toLowerCase())
    );
  });
  const columns: any = [
    {
      name: "Detalle del Requerimiento",
      sortable: true,
      wrap: true,
      grow: 2.5,
    },

    {
      name: "Fecha y Hora",
      selector: (row: any) => row.Documento,
      sortable: true,
      wrap: true,
      //   maxWidth: "150px",
    },
    {
      name: "Usuario",
      selector: (row: any) => row.Usuario,
      sortable: true,
      wrap: true,
    },

    {
      name: "Operaciones",
      selector: (row: any) => (
        <div className="flex flex-wrap justify-center items-center text-red-900">
          {InfoUser?.IdRol != 2 && (
            <>
              {" "}
              <button
                title="Editar Requerimiento"
                onClick={(e) => {
                  e.preventDefault();

                  setInfoEditar(row);
                  setShowModal({
                    AddVisible: true,
                    EditVisible: false,
                  });
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#0D7D1E"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </button>{" "}
            </>
          )}
        </div>
      ),
      sortable: true,
      wrap: true,
    },
  ];
  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <input
        autoComplete="off"
        onChange={(e) => setFilterText(e.target.value)}
        // onClear={handleClear}
        value={filterText}
        placeholder="Buscar..."
        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      />
    );
  }, [filterText]);

  return (
    <>
      <div className="border-t-2 p-2 my-5 border-t-white shadow-lg">
        <DataTable
          title="Lista de Requerimientos"
          columns={columns}
          paginationComponentOptions={paginationComponentOptions}
          data={filteredItems}
          persistTableHead
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
          pagination
          responsive
          noDataComponent="No hay Requerimientos"
          customStyles={customStyles}
          paginationPerPage={7}
        />
      </div>
    </>
  );
};

export default TablaResp;
