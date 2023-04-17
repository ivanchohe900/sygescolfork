import axios from "axios";
import { NextResponse } from "next/server";
import { conecctions } from "../../../../../../utils/Conexions";

export async function GET(req: any) {
  const { searchParams } = req.nextUrl;
  let colegio = searchParams.get("c");
  let grupo = searchParams.get("g");
  let matricula = searchParams.get("m");
  let idPeriodo = searchParams.get("p");
  try {
    const conexion = conecctions[colegio];
    const [dataColegio]: any = await conexion.query(
      `SELECT uu AS url FROM clrp`
    );

    const [estudiante]: any = await conexion.query(
      `SELECT CONCAT(alumno_ape1,' ',alumno_ape2,' ',alumno_nom1,' ',alumno_nom2,' ') AS nombre, alumno.alumno_id AS alumno, matri_id AS matricula, alumno_num_docu AS documento, alumno_rum AS rum FROM alumno INNER JOIN matricula ON alumno.alumno_id = matricula.alumno_id WHERE grupo_id = ${grupo} AND matri_id NOT IN (SELECT matri_id FROM novedad_estudiante) AND matri_estado = 0 ORDER BY alumno_ape1,alumno_ape2,alumno_nom1,alumno_nom2 ASC`
    );

    const [grupodData]: any = await conexion.query(
      `SELECT grupo_nombre AS grupo, jornada_nombre AS jornada, sede_nombre AS sede FROM v_grupos INNER JOIN sedes ON grupo_sede = sede_consecutivo WHERE grupo_id = ${grupo}`
    );
    const [asistencia]: any = await conexion.query(
      "SELECT * FROM inasistencia WHERE cga_id = 0 AND tipo_ina LIKE 'I'"
    );
    const [periodo]: any = await conexion.query(
      `SELECT periodo_academicos.per_id, per_nombre FROM periodo_academicos INNER JOIN periodo_fechas ON periodo_academicos.per_id = periodo_fechas.per_id  INNER JOIN v_grupos ON v_grupos.per_con_id = periodo_academicos.per_con_id INNER JOIN grados ON v_grupos.grado_base = grados.id_grado AND grados.nivel = periodo_academicos.nivel WHERE grupo_id = ${grupo} AND periodo_academicos.inicio_ing_notas <= CURDATE() AND periodo_academicos.fin_ing_notas >= CURDATE()`
    );
    const [periodos]: any = await conexion.query(
      `SELECT periodo_academicos.per_id AS value, per_nombre as label FROM periodo_academicos INNER JOIN periodo_fechas ON periodo_academicos.per_id = periodo_fechas.per_id  INNER JOIN v_grupos ON v_grupos.per_con_id = periodo_academicos.per_con_id INNER JOIN grados ON v_grupos.grado_base = grados.id_grado AND grados.nivel = periodo_academicos.nivel WHERE grupo_id = ${grupo} AND periodo_academicos.inicio_ing_notas <= CURDATE()`
    );

    const [cga]: any = await conexion.query(
      `SELECT cga.i AS id, aintrs.b AS asignatura, aes.b AS Area, cga.u AS Horas FROM cga INNER JOIN aintrs ON aintrs.i = cga.a INNER JOIN efr ON aintrs.g = efr.i INNER JOIN aes ON efr.a = aes.i  INNER JOIN v_grupos ON cga.b = v_grupos.grupo_id WHERE cga.b = ${grupo} AND grado_base = 0`
    );
    const [comportamiento]: any = await conexion.query(
      `SELECT compo_observacion, compo_nota_num_def, matri_id, per_id, esca_nac_nombre FROM comportamiento INNER JOIN escala_nacional ON escala_nacional.esca_nac_id = comportamiento.esca_nac_id_def WHERE per_id = '${idPeriodo}'`
    );
    const formatCga = cga?.reduce((acc: any, item: any) => {
      let key = `${item.Area}`;

      if (!acc[key]) {
        acc[key] = {
          Area: item.Area,
          Asignaturas: [],
        };
      }

      acc[key].Asignaturas.push({
        ...item,
      });

      return acc;
    }, {});

    // console.log(formatCga);
    const [notas]: any = await conexion.query(
      `SELECT PE.escala, texto, estudiante, NEP.cga AS Asignatura FROM newProcesoEstudiante NEP INNER JOIN newProcesosEvaluacion PE ON NEP.proceso = PE.id INNER JOIN newBancoProcesos BP ON BP.id = PE.relacionBanco WHERE NEP.periodo = ${idPeriodo}`
    );
    const [observaciones]: any = await conexion.query(
      `SELECT estudiante, texto, NOE.cga AS Asignatura FROM newObservacionesEstudiante NOE INNER JOIN newObservacionesProcesos NOP ON NOE.observacion = NOP.id INNER JOIN newBancoObservacionesProcesos NBOP ON NBOP.id = NOP.relacionBanco WHERE NOE.periodo = ${idPeriodo}`
    );
    const studentFormat: any = [];
    for await (const est of estudiante) {
      const notasEstu = notas.filter(
        (not: any) => not.estudiante == est.matricula
      );
      const observacionesEstu = observaciones.filter(
        (obs: any) => obs.estudiante == est.matricula
      );
      const comportamientoEstu = comportamiento.find(
        (com: any) => com.matri_id == est.matricula
      );
      const asistenciaEstu = asistencia.filter(
        (as: any) => as.matri_id == est.matricula
      );
      // console.log(asistenciaEstu.lenght);
      await axios
        .post(
          `${
            dataColegio[0]?.url
          }sygescol${new Date().getFullYear()}/images/fotos/estudiantes/${
            est.rum
          }.jpg`
        )
        .then((res) => {
          if (res.status == 200) {
            studentFormat.push({
              ...est,
              foto: `${
                dataColegio[0]?.url
              }sygescol${new Date().getFullYear()}/images/fotos/estudiantes/${
                est.rum
              }.jpg`,
              notas: notasEstu,
              observaciones: observacionesEstu,
              comportamiento: comportamientoEstu,
              asistencia: asistenciaEstu || [],
            });
          }
        })
        .catch((error) => {
          studentFormat.push({
            ...est,
            foto: `${
              dataColegio[0]?.url
            }sygescol${new Date().getFullYear()}/images/fotos/estudiantes/no_imagen.jpg`,
            notas: notasEstu,
            observaciones: observacionesEstu,
            comportamiento: comportamientoEstu,
            asistencia: asistenciaEstu || [],
          });
        });
    }
    return NextResponse.json(
      {
        estudiante: studentFormat,
        grupo: grupodData[0],
        cga: Object.values(formatCga),
        periodos: periodos,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        body: "Error al consultar la información para la generación de boletines",
      },
      { status: 404 }
    );
  }
}
