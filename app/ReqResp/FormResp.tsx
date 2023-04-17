"use client";
import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
import dynamic from "next/dynamic";
import Swal from "sweetalert2";
import School from "../../utils/School";
import { Alert } from "@material-tailwind/react";
import UplaodResp from "./UploadResp";

const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "image",
  "video",
];

const FormResp = () => {
  const meses = [
    "",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const [infoBase, setInfo] = useState(null as any);
  const [alerta, setAlerta] = useState(false);
  const [messages, setMessages] = useState(null as any);
  const [inputValue, setInputValue] = useState(null as any);
  // console.log("value as Datos Editor", inputValue);
  const handleSave = async () => {
    if (!inputValue) {
      setMessages("Debe ingresar la información del requerimiento");
      setAlerta(true);
      return false;
    }
    try {
      const colegio = School();
      const consulta = colegio.find(
        (col: any) => col.value == localStorage.getItem("colegio")
      )?.relacion;
      await setDoc(
        doc(db, `Colegios/${consulta}/Requerimientos/Requerimiento_2`),
        {
          adjuntos: ["ruta1", "ruta"],
          descripcion: `${inputValue}`,
          docente: infoBase?.nombre,
          fecha: new Date(),
          fechaSolucion: null,
          resuelto: false,
        }
      ).then(() => {
        setMessages("Información guardada con exito");
        setAlerta(true);
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Señor usuario",
        text: "Existe un error al guardar la información",
        timer: 2500,
        showConfirmButton: false,
      });
    }
  };
  const getDatos = () => {
    setInfo(JSON.parse(localStorage?.datosUsu));
  };
  useEffect(() => {
    getDatos();
  }, []);

  const handlerChange = (event: any) => {
    setInputValue(event.target.value);
  };
  let fecha = new Date();

  let hora: any = fecha.getHours();
  let minutos: any = fecha.getMinutes();

  let periodo = hora >= 12 ? "PM" : "AM";

  hora = hora % 12;
  hora = hora ? hora : 12;
  hora = hora < 10 ? "0" + hora : hora;
  minutos = minutos < 10 ? "0" + minutos : minutos;

  let horaCompleta = hora + ":" + minutos + " " + periodo;
  return (
    <>
      <Alert
        show={alerta}
        dismissible={{
          onClose: () => setAlerta(false),
        }}
      >
        {messages}
      </Alert>
      <div className="overflow-y-scroll h-60 my-6 relative py-1 sm:max-w-6xl sm:mx-auto">
        <div className=" mx-auto">
          {/* <p className="text-justify text-black mb-10">
            Yo <span className="font-bold">{infoBase?.nombre}</span> en mi rol
            de{" "}
            <span className="font-bold">
              {infoBase?.rol_nombre?.toLowerCase()}
            </span>{" "}
            de la{" "}
            <span className="font-bold">
              {JSON.parse(localStorage?.datosColegio)?.nombreInst}
            </span>{" "}
            solicito el día{" "}
            <span className="font-bold">
              {new Date().getDate()} de {meses[new Date().getMonth() + 1]} del{" "}
              {new Date().getFullYear()}
            </span>
            , siendo las <span className="font-bold">{horaCompleta}</span>, se
            autorice a quien corresponda, para que se revise y de ser necesario
            se ajuste las especificaciones abajo descritas, ya que considero
            deban ser objeto de cambios.
          </p> */}
          <div>
            <i>
              {" "}
              <h1 className="text-2xl font-semibold mb-6">
                Descripción del Requerimiento
              </h1>
            </i>
          </div>
          <form>
            <div className="divide-y divide-gray-200">
              <div className="py-2 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="w-auto">
                  <QuillNoSSRWrapper
                    className="mb-10"
                    modules={modules}
                    formats={formats}
                    theme="snow"
                    onChange={(content) => {
                      // var htmlToRtf = require('html-to-rtf');
                      setInputValue(content);
                    }}
                    placeholder="Escriba aquí..."
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>
                    <UplaodResp />
                  </div>
                  <div title="Enviar Requerimiento" className="relative">
                    <button
                      className="bg-blue-500 text-white rounded-md px-2 py-1 mt-0 ml-3"
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleSave();
                      }}
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormResp;
