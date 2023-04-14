import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import VerReq from "./VerReq";

const BotonSolucion = ({ size2, setSize2, handleOpenSolucion }: any) => {
  return (
    <>
      <Dialog
        open={size2 === "lg"}
        size={size2 || "lg"}
        handler={() => setSize2(null)}
      >
        <DialogHeader>Requerimientos Resueltos</DialogHeader>
        <DialogBody divider>
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ad reprehenderit omnis perspiciatis aut odit! Unde architecto
            perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
            praesentium magni corrupti explicabo! */}
          <VerReq />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setSize2(1)}
            className="mr-1"
          >
            Cerrar
          </Button>
          {/* <Button
              variant="gradient"
              color="green"
              onClick={() => handleOpen(null)}
            >
              <span>Confirm</span>
            </Button> */}
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default BotonSolucion;
