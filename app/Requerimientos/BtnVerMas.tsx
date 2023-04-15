import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const BtnVerMas = ({ size, setSize, handleOpen }: any) => {
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
        <DialogHeader>
          Solución del Requerimiento 14 de abril del 2023 11:54 am
        </DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo!
        </DialogBody>
        <DialogHeader>Archivos Adjuntos</DialogHeader>
        <DialogBody divider>
          <a
            href="https://s3.amazonaws.com/uaovirtualasset/assets/img_cursos/fotos_saberpro/Documentos/Cuadernillo-de-preguntas-razonamiento-cuantitativo.pdf"
            target="_blank"
          >
            Hola soy un Adjunto
          </a>
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
            // onClick={() => handleOpen(null)}
          >
            <span>Adjuntos</span>
          </Button> */}
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default BtnVerMas;
