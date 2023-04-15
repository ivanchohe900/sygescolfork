import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import VerPdt from "./VerPdt";

const BotonPdts = ({ size3, setSize3, handleOpenPdts }: any) => {
  return (
    <>
      <Dialog
        open={size3 === "lg"}
        size={size3 || "lg"}
        handler={() => setSize3(null)}
      >
        <DialogHeader>Requerimientos Pendientes</DialogHeader>
        <DialogBody divider>
          {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            ad reprehenderit omnis perspiciatis aut odit! Unde architecto
            perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
            praesentium magni corrupti explicabo! */}
          <VerPdt />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setSize3(1)}
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

export default BotonPdts;
