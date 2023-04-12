"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactSelect from "react-select";
import Swal from "sweetalert2";
export type Props = {
  showModal: any;
  id: any;

  contador: any;
  setContador: any;
};
function Proceso({ showModal, id, contador, setContador }: Props) {
  const [data, setData] = useState({} as any);
  const [editar, setEditar] = useState(false);
  const handleDelete = async (escala: any) => {
    Swal.fire({
      title: `¿Esta seguro que desea eliminar este proceso?`,
      text: `Tenga en cuenta que el concepto será eliminado en los estudiantes a que han sido asignado y del banco de procesos. Por lo tanto deberá volver a calificar en esta dimensión en el desempeño ${escala}.`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Eliminar",
      denyButtonText: `Cancelar`,
    }).then((result: any) => {
      if (result.isConfirmed) {
        try {
          axios
            .get(
              `/api/ProcesosEvaluacion/Delete?i=${id}&c=${localStorage.getItem(
                "colegio"
              )}`
            )
            .then((res) => {
              // console.log(res.data);
              if (res.status == 200) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: res.data.body,
                  showConfirmButton: false,
                  timer: 1500,
                });
                // alert(res.data.body);
                setContador(contador + 1);
                showModal(false);
              }
            })
            .catch((error) => {
              console.log(error);
              alert("Existe un error en la eliminación del proceso");
            });
        } catch (error) {
          console.log(error);
          alert("Existe un error en la eliminación del proceso");
        }
      }
    });
  };
  const handleEdit = async () => {
    if (!data?.texto) {
      Swal.fire({
        icon: "warning",
        title: "Señor Usuario",
        text: "El proceso no puede enviarse vacio al editar",
        timer: 2500,
        showConfirmButton: false,
      });
      return false;
    }
    try {
      axios
        .post(`/api/ProcesosEvaluacion/Edit`, {
          i: data.relacionBanco,
          c: localStorage.getItem("colegio"),
          t: data.texto,
        })
        .then((res) => {
          if (res.status == 200) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: res.data.body,
              showConfirmButton: false,
              timer: 1500,
            });
            // alert(res.data.body);
            setContador(contador + 1);
            setEditar(false);
            showModal(false);
          }
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Señor Usuario",
            text: "Existe un error al editar la información",
            timer: 2500,
            showConfirmButton: false,
          });
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Señor Usuario",
        text: "Existe un error al editar la información",
        timer: 2500,
        showConfirmButton: false,
      });
    }
  };
  const getData = async () => {
    await axios
      .get(
        `/api/ProcesosEvaluacion/ViewData?i=${id}&c=${localStorage.getItem(
          "colegio"
        )}`
      )
      .then((res) => {
        if (res.status == 200) {
          setData({ ...res.data?.informacion });
        }
      })
      .catch((error) => {
        console.log(error);
        alert(
          "Existe un error al consultar la informacion asociada al proceso"
        );
      });
  };
  useEffect(() => {
    getData();
  }, []);
  let desempeño: any = [
    {
      value: 1,
      label: "Superior",
    },
    {
      value: 2,
      label: "Alto",
    },
    {
      value: 3,
      label: "Básico",
    },
    {
      value: 4,
      label: "Bajo",
    },
  ];
  return (
    <div className="bg-black/50 overflow-auto  transition duration-150 ease-in-out z-10 fixed top-0 right-0 bottom-0 left-0">
      <div className="container mx-auto   w-11/12 md:w-4/5 max-w-full  ">
        <div className="relative   py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400 ">
          <div className="container mx-auto text-center px-4 mb-4 grid grid-cols-2">
            <div>
              <div className="flex flex-row justify-around items-center uppercase text-center font-bold lg:text-2xl py-4 px-4 bg-blue-800 text-white rounded-lg">
                Información sobre el proceso
              </div>
              <div className="container mx-auto font-bold text-2xl w-10/12">
                {data?.texto?.charAt(0)?.toUpperCase() +
                  data?.texto?.slice(1)?.toLowerCase()}
              </div>
            </div>
            <div>
              <div className="container mx-auto text-center px-4 mb-4">
                <div className="flex flex-row justify-around items-center uppercase text-center font-bold lg:text-2xl py-4 px-4 bg-blue-800 text-white rounded-lg">
                  Desempeño Asociado
                </div>
              </div>
              <div className="container mx-auto font-bold text-2xl w-10/12">
                {data &&
                  desempeño.find((des: any) => des.value == data?.escala)
                    ?.label}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-4">
            <button
              className="border-2 border-green-600 text-green-600 hover:bg-green-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={() => {
                setEditar(true);
              }}
            >
              Editar
            </button>
            <button
              className="border-2 border-red-600 text-red-600 hover:bg-red-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              onClick={() => {
                handleDelete(
                  desempeño.find((des: any) => des.value == data?.escala)?.label
                );
              }}
            >
              Eliminar
            </button>
            <button
              onClick={() => showModal(false)}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
      {editar && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="bg-blue-800 rounded-lg font-medium text-white py-1 text-center">
              Editar proceso
            </h2>
            <div className="flex flex-row items-center gap-2 my-3">
              <p className="text-lg font-medium">Proceso:</p>
              <textarea
                className="w-full border-[1px] border-gray-500 p-2 rounded-lg focus-visible:border-double focus-visible:border-[#2684FF] focus-visible:border-[0.4rem] focus-visible:outline-[#2684FF]/10"
                name="texto"
                id="Nombre"
                defaultValue={data?.texto}
                placeholder="Ingrese un proceso"
                onChange={(e: any) => {
                  setData({
                    ...data,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-row justify-center gap-4">
              <button
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                onClick={() => handleEdit()}
              >
                Editar
              </button>
              <button
                onClick={() => setEditar(false)}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        .modal-overlay {
          padding: 1rem;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .modal {
          background-color: white;
          padding: 1rem;
          border-radius: 0.5rem;
          width: 30%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        }

        .modal h2 {
          margin-top: 0;
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}

export default Proceso;
