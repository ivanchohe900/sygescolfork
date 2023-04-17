"use client";
import React from "react";
import EncabezadoResp from "./EncabezadoResp";
import CradResp from "./CardResp";
import TableResp from "./TablaResp";

const BodyComponent = () => {
  return (
    <>
      <EncabezadoResp />
      <CradResp />
      <TableResp />
    </>
  );
};

export default BodyComponent;
