"use client";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Uplaod from "./Uplaod";
import dynamic from "next/dynamic";
import VerReq from "./VerReq";

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
    ["link", "image", "video", "code-block"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
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
  "link",
  "image",
  "video",
  "code-block",
];

const data = [
  //   {
  //     id: "date",
  //     label: "Fecha",
  //     placeholder: "Fecha",
  //   },
  //   {
  //     id: "institu",
  //     label: "I.E. Educativa",
  //     placeholder: "I.E. Educativa",
  //   },
  //   {
  //     id: "cargo",
  //     label: "Cargo",
  //     placeholder: "Cargo",
  //   },
  {
    id: "name",
    label: "Nombre Completo",
    placeholder: "Nombre Completo",
  },
  //   {
  //     id: "Apelli",
  //     label: "Apellidos",
  //     placeholder: "Apellidos",
  //   },
];

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  console.log("value as chonchito feliz", inputValue);

  const handlerChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="my-6 relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10  bg-white shadow-2xl sm:rounded-3xl sm:p-auto">
          <div className="max-w-md mx-auto">
            <div>
              <i>
                {" "}
                <h1 className="text-2xl font-semibold">
                  Descripción del Requerimiento
                </h1>
              </i>
            </div>
            <form>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  {/* {data.map((item) => (
                    <div key={item.id} className="relative">
                      <input
                        autoComplete="off"
                        id={item.id}
                        name={item.id}
                        type="text"
                        value={inputValue}
                        onChange={handlerChange}
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder={item.placeholder}
                      />
                      <label
                        htmlFor={item.id}
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        {item.label}
                      </label>
                    </div>
                  ))} */}
                  <div className="w-auto ">
                    <QuillNoSSRWrapper
                      modules={modules}
                      formats={formats}
                      theme="snow"
                      onChange={(content) => {
                        // var htmlToRtf = require('html-to-rtf');
                        setInputValue(content);
                      }}
                      placeholder="Escriba aquí su Requerimiento..."
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div>
                      <Uplaod />
                    </div>
                    <div title="Enviar Requerimiento" className="relative">
                      <button className="bg-blue-500 text-white rounded-md px-2 py-1 mt-0 ml-3">
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
                <VerReq />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
