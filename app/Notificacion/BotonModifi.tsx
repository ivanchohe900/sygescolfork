import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  DialogBody,
} from "@material-tailwind/react";

const BotonModifi = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Estudiantes
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 ">
            <DialogBody divider>
              <p>Hugo Hernandez</p>
              <p>Paco Jimenez</p>
              <p>Luis Chaverra</p>
            </DialogBody>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Cerrar
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default BotonModifi;
