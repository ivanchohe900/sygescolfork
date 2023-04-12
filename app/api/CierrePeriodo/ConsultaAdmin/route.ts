import { NextResponse } from "next/server";
import { conecctions } from "../../../../utils/Conexions";

export async function POST(req: any) {
  const { colegio } = await req.json();

  const conexion = conecctions[colegio];
  try {
    const [datosPendientes]: any = await conexion.query(
      "SELECT detalle, grupo_nombre, CONCAT(dcne_ape1,' ',dcne_ape2,' ',dcne_nom1,' ',dcne_nom2) AS docente, auditoriaPeriodos.matri_id, aintrs.b AS Asignatura, auditoriaPeriodos.grupo_id,per_id FROM auditoriaPeriodos INNER JOIN v_grupos ON auditoriaPeriodos.grupo_id = v_grupos.grupo_id INNER JOIN dcne ON auditoriaPeriodos.dcne_id = dcne.i INNER JOIN cga ON cga.i = auditoriaPeriodos.cga_id INNER JOIN aintrs ON cga.a = aintrs.i"
    );

    let NewDataNormalizada: any = [];

    for (const ItemPendientes of datosPendientes) {
      if (ItemPendientes?.matri_id?.length > 1) {
        const IdsMatricula = ItemPendientes.matri_id.substring(
          0,
          ItemPendientes.matri_id.length - 1
        );

        const [AllEstudiantes]: any = await conexion.query(
          `SELECT matricula.matri_id as IdMatricula,alumno.alumno_id as AlumnoId,matricula.matri_codigo as CodigoMatricula, concat(alumno.alumno_nom1," ",alumno.alumno_nom2) as Nombre, concat(alumno.alumno_ape1," ",alumno.alumno_ape2) as Apellido FROM matricula INNER JOIN alumno ON alumno.alumno_id=matricula.alumno_id WHERE matricula.matri_id in (${IdsMatricula})`
        );

        NewDataNormalizada.push({
          ...ItemPendientes,
          estudiantes: AllEstudiantes,
        });
      } else {
        NewDataNormalizada.push({
          ...ItemPendientes,
        });
      }
    }

    const [periodo]: any = await conexion.query(
      "SELECT DISTINCT per_nombre, periodo_academicos.per_id FROM periodo_fechas INNER JOIN periodo_academicos"
    );

    const newData = NewDataNormalizada?.reduce((acc: any, item: any) => {
      const key = `${item.grupo_nombre}`;
      if (!acc[key]) {
        acc[key] = {
          id: item.grupo_id,
          nombre: item.grupo_nombre,
          Pendiente: [],
          Periodo: periodo.find((per: any) => per.per_id == item.per_id)
            ?.per_nombre,
        };
      }
      acc[key].Pendiente.push({ ...item });
      return acc;
    }, {});

    console.log("newData", newData);

    return NextResponse.json(
      { pendiente: Object.values(newData) },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { body: "Error al consultar la información de los pendientes" },
      { status: 404 }
    );
  }
}
