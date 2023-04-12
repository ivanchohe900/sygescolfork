import React from "react";
import { Select, Option } from "@material-tailwind/react";

const VerReq = () => {
  return (
    <>
      <div className="mb-5 text-center font-bold font-regular relative block w-full rounded-lg bg-blue-900 p-4 text-xl leading-5 text-white opacity-100">
        <h1>Ver Respuesta a los Requerimientos</h1>
      </div>
      <div className=" mb-5 text-center font-bold font-regular relative block w-full rounded-lg  p-4 text-xl leading-5 text-white opacity-100">
        <Select label="Ver Requerimientos">
          <Option>Requerimiento 1</Option>
          <Option>Requerimiento 2</Option>
          <Option>Requerimiento 3</Option>
          <Option>Requerimiento 4</Option>
          <Option>Requerimiento 5</Option>
        </Select>
      </div>
    </>
  );
};

export default VerReq;
