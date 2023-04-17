import { Image, Page, Text, View } from "@react-pdf/renderer";
import React from "react";
export type Props = {
  dimensiones?: any;
  data?: any;
};
function Dimension({ dimensiones, data }: Props) {
  let desempeño: any = [
    {
      value: 1,
      label: "Superior",
      img: "caraSuperior",
    },
    {
      value: 2,
      label: "Alto",
      img: "caraAlto",
    },
    {
      value: 3,
      label: "Básico",
      img: "caraBasico",
    },
    {
      value: 4,
      img: "caraBajo",
      label: "Bajo",
    },
  ];
  const style: any = {
    table: {
      // display: "table" as any,
      width: "auto",
      heigth: "100%",
      borderStyle: "solid",
      borderWidth: 0,
      margin: "1%",
      marginTop: "3%",
    },
    table2: {
      display: "table" as any,
      width: "30%",
      heigth: "100%",
      borderStyle: "solid",
      borderWidth: 0,
      marginLeft: -1,
    },
    tableRow: {
      flexDirection: "row",
    },
    tableColText: {
      width: "90%",
      margin: "auto",
      borderStyle: "solid",
      borderWidth: 0,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCellTitle: {
      border: 1,
      width: "75%",
      textAlign: "center",
      fontSize: 10,
      padding: "2%",
      fontWeight: "bold",
    },
    tableCell: {
      border: 1,
      textAlign: "center",
      fontSize: 10,
      padding: "2%",
      fontWeight: "bold",
      marginLeft: -1,
    },
  };
  return (
    <>
      <View style={style.table}>
        <View style={style.tableRow}>
          <Text style={style.tableCellTitle}>DIMENSIONES</Text>
          <Text style={style.tableCell}>I.H.S</Text>
          <View style={style.table2}>
            <View style={style.tableRow}>
              <Text
                style={{
                  border: 1,
                  textAlign: "center",
                  width: "100%",
                  fontSize: 10,
                  padding: "2%",
                  fontWeight: "bold",
                }}
              >
                Valoración
              </Text>
            </View>
            <View>
              <Text
                style={{
                  border: 1,
                  textAlign: "center",
                  width: "100%",
                  fontSize: 10,
                  padding: "2%",
                  fontWeight: "bold",
                  marginTop: -1,
                }}
              >
                Desempeño
              </Text>
            </View>
          </View>
        </View>
        {dimensiones.map((dim: any, key: number) => {
          const notas = data?.notas?.find(
            (est: any) => dim.Asignaturas[0]?.id == est.Asignatura
          );
          let escala = desempeño.find((des: any) => des.value == notas?.escala);

          return (
            <>
              <View style={style.tableRow} key={key}>
                <Text
                  style={{
                    border: 1,
                    width: "75.3%",
                    fontSize: 10,
                    padding: "1%",
                    fontWeight: "bold",
                    marginTop: -1,
                  }}
                >
                  {dim.Area}
                </Text>
                <Text
                  style={{
                    border: 1,
                    width: "27%",
                    fontSize: 10,
                    padding: "1%",
                    fontWeight: "bold",
                    marginTop: -1,
                    marginLeft: -1,
                  }}
                >
                  {escala?.label || ""}
                </Text>
              </View>
              {dim.Asignaturas.map((asig: any, key2: number) => {
                const notas = data?.notas?.find(
                  (est: any) => asig?.id == est.Asignatura
                );
                let escala = desempeño.find(
                  (des: any) => des.value == notas?.escala
                );
                const procesos = data?.notas?.filter(
                  (est: any) => asig?.id == est.Asignatura
                );
                const observaciones = data?.observaciones?.filter(
                  (obs: any) => asig?.id == obs.Asignatura
                );
                return (
                  <>
                    <View style={style.tableRow} key={key2}>
                      <Text
                        style={{
                          border: 1,
                          width: "67.3%",
                          fontSize: 10,
                          padding: "1%",
                          fontWeight: "bold",
                          marginTop: -1,
                        }}
                      >
                        {asig.asignatura}
                      </Text>
                      <Text
                        style={{
                          border: 1,
                          width: "8%",
                          fontSize: 10,
                          textAlign: "center",
                          padding: "1%",
                          fontWeight: "bold",
                          marginTop: -1,
                          marginLeft: -1,
                        }}
                      >
                        {asig.Horas}
                      </Text>
                      <Text
                        style={{
                          border: 1,
                          width: "27%",
                          fontSize: 10,
                          padding: "1%",
                          fontWeight: "bold",
                          marginLeft: -1,
                          marginTop: -1,
                        }}
                      >
                        {escala?.label || ""}
                      </Text>
                    </View>
                    {procesos?.map((pro: any, key3: number) => {
                      let escala2 = desempeño.find(
                        (des: any) => des.value == pro?.escala
                      );
                      // let contador = key3;
                      // if (contador == 2) {
                      //   <Page />;
                      //   contador = 0;
                      // }
                      return (
                        <>
                          <View style={style.tableRow}>
                            <Text
                              style={{
                                border: 1,
                                width: "75%",
                                fontSize: 10,
                                padding: "1%",
                                fontWeight: "bold",
                                marginTop: -1,
                              }}
                            >
                              {pro.texto.charAt(0).toUpperCase() +
                                pro.texto.slice(1).toLowerCase()}
                            </Text>
                            <View
                              style={{
                                border: 1,
                                width: "27%",
                                fontSize: 10,
                                padding: "1%",
                                fontWeight: "bold",
                                marginLeft: -1,
                                marginTop: -1,
                              }}
                            >
                              {/* <Image
                                src={`/Descriptores/${escala2?.img}.png`}
                                style={{
                                  width: 50,
                                  height: 50,
                                  margin: "auto",
                                }}
                              /> */}
                            </View>
                          </View>
                        </>
                      );
                    })}
                    {observaciones?.map((obs: any) => {
                      return (
                        <>
                          <View style={style.tableRow}>
                            <Text
                              style={{
                                border: 1,
                                width: "20%",
                                fontSize: 11,
                                padding: "1%",
                                fontWeight: "bold",
                                marginTop: -1,
                              }}
                            >
                              Observación:
                            </Text>
                            <Text
                              style={{
                                border: 1,
                                width: "85%",
                                fontSize: 10,
                                padding: "1%",
                                fontWeight: "bold",
                                marginTop: -1,
                                marginLeft: -1,
                              }}
                            >
                              {obs.texto}
                            </Text>
                          </View>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </>
          );
        })}
      </View>
    </>
  );
}

export default Dimension;
