import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import TablaModifica from "./TablaModifica";

const BotonGrados = () => {
  const [size, setSize] = useState(null);
  const handleOpen = (value: any) => setSize(value);

  return (
    <>
      <div className="px-2 py-2 m-1">
        <Fragment>
          <Button onClick={() => handleOpen("xl")} variant="gradient">
            6-01
          </Button>
          <Dialog open={size === "xl"} size={size || "xl"} handler={handleOpen}>
            <DialogHeader>Relación de los Pendientes Hallados</DialogHeader>
            <DialogBody divider>
              <TablaModifica />
            </DialogBody>

            <DialogFooter>
              {/* <Button
                variant="text"
                color="red"
                onClick={() => handleOpen(null)}
                className="mr-1"
              >
                <span>Cancel</span>
              </Button> */}
              <Button
                variant="gradient"
                color="green"
                onClick={() => handleOpen(null)}
              >
                <span>Cerrar</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </Fragment>
      </div>
    </>
  );
};

export default BotonGrados;
