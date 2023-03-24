import { NextResponse } from "next/server";
import School from "../../../../utils/School";

export async function GET() {
  try {
    const colegios = School();

    if (colegios?.length > 0) {
      let key = 0;
      for (const colegio of colegios) {
        console.log("entro al for");

        const DateCierrePeriodo = await fetch(
          `${process.env.APP_URL_BACKEND}/api/CierrePeriodo/VerificarFechas?Index=${key}`
        ).then((res) => res.json());

        console.log("DateCierrePeriodo", DateCierrePeriodo);

        if (DateCierrePeriodo?.GruposCerrar?.length) {
          const DateCierreConfig = await fetch(
            `${process.env.APP_URL_BACKEND}/api/CierrePeriodo/Students`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                colegio: colegio,
                grupos: DateCierrePeriodo?.GruposCerrar || [],
              }),
            }
          ).then((res) => res?.json());

          // console.log("DateCierreConfig", DateCierreConfig);

          if (DateCierreConfig?.Docentes.length > 0) {
            return NextResponse.json(
              {
                body: DateCierreConfig?.Docentes,
                Pendientes: DateCierreConfig?.Pendientes,
              },
              {
                status: 200,
              }
            );
          }
        }
        key++;
      }
    }
    return NextResponse.json(
      { body: "todo bien señor" },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { body: "Error al consultar la información" },
      { status: 404 }
    );
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
    responseLimit: "10mb",
  },
};
