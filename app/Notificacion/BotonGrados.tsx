import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import TablaModifica from "./TablaModifica";
const BotonGrados = ({ Grados, handleOpen, setPendientesSelected }: any) => {
  return (
    <>
      <div className="px-2 py-2 m- 1">
        <Button
          onClick={() => {
            handleOpen("xl");
            setPendientesSelected(Grados.pendientes);
          }}
          variant="gradient"
        >
          {Grados.GrupoNombre}
        </Button>
      </div>
    </>
  );
};

export default BotonGrados;
