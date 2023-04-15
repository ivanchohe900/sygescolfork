import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const BtnVerPdt = ({ size, setSize, handleOpen }: any) => {
  return (
    <>
      <Dialog
        open={size === "lg"}
        size={size || "lg"}
        handler={() => setSize(null)}
      >
        <DialogHeader>Descripción del Requerimiento 1 General- 4</DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo!
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

export default BtnVerPdt;
