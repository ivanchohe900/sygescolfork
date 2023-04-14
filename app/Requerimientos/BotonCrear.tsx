import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Form from "./Form";

const BotonCrear = ({ size, setSize, handleOpenCrear }: any) => {
  return (
    <>
      <Dialog
        open={size === "lg"}
        size={size || "lg"}
        handler={() => setSize(null)}
      >
        <DialogHeader>Crear un Requerimiento</DialogHeader>
        <DialogBody divider>
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ad reprehenderit omnis perspiciatis aut odit! Unde architecto
            perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
            praesentium magni corrupti explicabo! */}
          <Form />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setSize(1)}
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

export default BotonCrear;
