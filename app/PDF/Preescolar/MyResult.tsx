"useClient";
import React from "react";
import { Document, Page, View } from "@react-pdf/renderer";
import Asistencia from "./Estructura/Asistencia";
import Cabecera from "./Estructura/Cabecera";
import Comportamiento from "./Estructura/Comportamiento";
import Dimension from "./Estructura/Dimension";
import Firmas from "./Estructura/Firmas";
import PersonalInfo from "./Estructura/PersonalInfo";
export type Props = {
  InfoPdf: any;
  data: any;
  firma: any;
};
function MyResult({ InfoPdf, data, firma }: Props) {
  return (
    <Document>
      {InfoPdf?.estudiante.map((inf: any, key: number) => {
        return (
          <Page size={"A4"} key={key} wrap>
            <View
              style={
                {
                  border: "2px solid black",
                  height: "96%",
                  width: "90%",
                  margin: "auto",
                  display: "block",
                } as any
              }
            >
              <Cabecera data={data} />
              <PersonalInfo data={inf} grup={InfoPdf?.grupo} />
              <Dimension dimensiones={InfoPdf?.cga} data={inf} />
              <Comportamiento data={inf} />
              <Asistencia data={inf.asistencia} />
              <Firmas firma={firma} />
            </View>
          </Page>
        );
      })}
    </Document>
  );
}

export default MyResult;
