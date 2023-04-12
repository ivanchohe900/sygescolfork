import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function POST(req: any) {
  const { c, i, t } = await req.json();
  try {
    const conexion = conecctions[c];
    const [update] = await conexion.query(
      `UPDATE newBancoProcesos SET texto  = '${t}' WHERE id = ${i}`
    );
    console.log(`UPDATE newBancoProcesos SET texto  = '${t}' WHERE id = ${i}`);
    return NextResponse.json(
      { body: "La información fue editada con exito" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Este es el error", error);
    return NextResponse.json(
      { body: "Existe un error al editar la información" },
      { status: 404 }
    );
  }
}
