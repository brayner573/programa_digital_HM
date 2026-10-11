/* ================================================================
   SICE - app.js
   Base de datos: data/expedientes.json (GitHub Pages friendly)
================================================================ */

/* ===== CONSTANTES LOCALES ===== */
const DIST   = { PUNO:"2101", LIMA:"1801", AREQUIPA:"0401", CUSCO:"0701" };
const INST   = {
  "JUZGADO DE TRABAJO": "JUZGADO DE TRABAJO",
  "JUZGADO ESPECIALIZADO": "JUZGADO ESPECIALIZADO",
  "JUZGADO PENAL": "JUZGADO PENAL",
  "JUZGADO CIVIL": "JUZGADO CIVIL",
  "JUZGADO DE PAZ LETRADO": "JUZGADO DE PAZ LETRADO",
  "SALA SUPERIOR": "SALA SUPERIOR"
};
const ESP    = { FC:"FAMILIA CIVIL", CI:"CIVIL", PE:"PENAL", LA:"LABORAL", CO:"COMERCIAL" };
const ESTADOS = ["EN TRAMITE","EN EJECUCION","CONCLUIDO","ARCHIVADO","EN EJECUCION / RES JUDICATA"];
const ADMIN_USER = "harry";

/* ===== UTIL ===== */
const $ = id => document.getElementById(id);
const norm = s => (s||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toUpperCase().trim();
const fill = (sel, obj, ph) => {
  sel.innerHTML = `<option value="">${ph}</option>` +
    Object.entries(obj).map(([k,v])=>`<option value="${k}">${v}</option>`).join("");
};
const cod = x => [x.sec,x.anio,x.org,x.dist,x.inst,x.esp,x.corr].join("-");

/* ===== BASE DE DATOS INTEGRADA ===== */
// Datos base siempre disponibles (funciona sin servidor)
const BASE_EXPS = [
  {
    "codigo": "00957-2022-0-2111-JR-LA-01",
    "expedienteCompletoUrl": "expedientes/957-2022.pdf",
    "reporte": {
      "numero": "00957-2022-0-2111-JR-LA-01",
      "distritoJudicial": "PUNO",
      "organoJurisdiccional": "Juzgado de Trabajo - Zona Norte - Sede Juliaca",
      "sede": "Plaza Zarumilla S/N - Jr. Pumacahua Nº 223 - Juliaca",
      "juez": "HUAMAN ROMERO GONZALO VICTOR / ALE POLAR RAUL",
      "especialista": "LEA CALDERON ARAPA / CHAMBI RODRIGUEZ JOHAN MAX",
      "especialidad": "LABORAL",
      "subespecialidad": "LABORAL (NLPT)",
      "proceso": "ORDINARIO LABORAL",
      "materia": "DESNATURALIZACIÓN DE CONTRATO",
      "estado": "CONCLUIDO",
      "etapaProcesal": "SENTENCIA FIRME (ARCHIVO DEFINITIVO)",
      "fechaInicio": "02/09/2022",
      "cuantia": "S/ 0.00 (INDETERMINADA)",
      "ubicacion": "ARCHIVO MODULAR / EN RESERVA",
      "sumilla": "DEMANDA LABORAL SOBRE DESNATURALIZACIÓN DE CONTRATOS DE TERCERIZACIÓN Y REPOSICIÓN POR DESPIDO INCAUSADO"
    },
    "resumen": "Este es un proceso laboral de desnaturalización de contrato de tercerización laboral y reposición, donde un extrabajador demanda a la empresa principal (Electro Puno S.A.A.) y a diversas empresas contratistas (Consorcio Galcas Sur, Fegal S.R.L., Galcas Contratistas Generales S.A.C. y Voltec Contratistas Generales S.R.L.), alegando que prestó servicios personales y subordinados durante varios años (desde 2016) bajo la apariencia de contratos de tercerización y recibos por honorarios, configurándose un despido incausado. El proceso inició con una demanda declarada inadmisible, luego subsanada, admitida a trámite, con el desarrollo de la audiencia de conciliación y la audiencia de juzgamiento. En la Sentencia N.° 59-2023-LA (Resolución N.° 04), el Juzgado Especializado de Trabajo declaró infundada la excepción de caducidad e infundada en todos sus extremos la demanda, disponiendo el archivo definitivo del proceso sin costas ni costos.",
    "situacionResolutiva": {
      "titulo": "SENTENCIA INFUNDADA",
      "detalle": "En la Sentencia N.° 59-2023-LA (Resolución N.° 04), el Juzgado Especializado de Trabajo declaró infundada la excepción de caducidad e infundada en todos sus extremos la demanda, estableciendo que el demandante no logró acreditar haber estado bajo la subordinación directa de la empresa principal Electro Puno S.A.A. ni demostró la desnaturalización de los contratos de tercerización comercial, disponiendo el archivo definitivo del proceso sin costas ni costos."
    },
    "partes": [
      {
        "tipo": "DEMANDANTE",
        "nombres": "CHOQUE TICONA, WILSON RONALD",
        "tipoPersona": "NATURAL",
        "representante": "Yhon Cristhian Barrionuevo Monzón (Abogado Defensor, Reg. CAP N° 6994)"
      },
      {
        "tipo": "DEMANDADO",
        "nombres": "EMPRESA REGIONAL DE SERVICIO PUBLICO DE ELECTRICIDAD DE PUNO S.A.A. (ELECTRO PUNO S.A.A.)",
        "tipoPersona": "JURÍDICA",
        "representante": "Abg. Priscilla Marisha Barrientos Tejada (Abogada Apoderada, Reg. CAA N° 6255)"
      },
      {
        "tipo": "DEMANDADO",
        "nombres": "CONSORCIO GALCAS SUR",
        "tipoPersona": "JURÍDICA",
        "representante": "Representante Legal no apersonado (Declarado rebelde / Inasistente)"
      },
      {
        "tipo": "DEMANDADO",
        "nombres": "GALCAS CONTRATISTAS GENERALES S.A.C.",
        "tipoPersona": "JURÍDICA",
        "representante": "Representante Legal no apersonado"
      },
      {
        "tipo": "DEMANDADO",
        "nombres": "FEGAL SOCIEDAD COMERCIAL DE RESPONSABILIDAD LIMITADA (FEGAL S.R.L.)",
        "tipoPersona": "JURÍDICA",
        "representante": "Representante Legal no apersonado"
      },
      {
        "tipo": "DEMANDADO",
        "nombres": "VOLTEC CONTRATISTAS GENERALES SOCIEDAD COMERCIAL DE RESPONSABILIDAD LIMITADA (VOLTEC S.R.L.)",
        "tipoPersona": "JURÍDICA",
        "representante": "Representante Legal no apersonado"
      }
    ],
    "progreso": {
      "porcentaje": 80,
      "mensaje": "El proceso cuenta con Sentencia N.° 59-2023-LA emitida que declara infundada la demanda laboral.",
      "etapas": [
        {
          "nombre": "DEMANDA",
          "desc": "02/09/2022 - Presentación de la demanda laboral sobre desnaturalización y reposición.",
          "estado": "done",
          "fecha": "02/09/2022"
        },
        {
          "nombre": "CALIFICACIÓN",
          "desc": "20/09/2022 - Calificación y auto admisorio (Res. N° 02) tras subsanación de observaciones.",
          "estado": "done",
          "fecha": "20/09/2022"
        },
        {
          "nombre": "CONTESTACIÓN",
          "desc": "22/11/2022 - Contestación de demanda por Electro Puno S.A.A. con excepción de caducidad.",
          "estado": "done",
          "fecha": "22/11/2022"
        },
        {
          "nombre": "AUDIENCIA",
          "desc": "10/05/2023 - Audiencia de juzgamiento reanudada con confrontación de posiciones y alegatos.",
          "estado": "done",
          "fecha": "10/05/2023"
        },
        {
          "nombre": "SENTENCIA 1RA INST.",
          "desc": "12/05/2023 - Sentencia N.° 59-2023-LA (Res. N° 04) que declara infundada la excepción y la demanda.",
          "estado": "current",
          "fecha": "12/05/2023"
        },
        {
          "nombre": "APELACIÓN",
          "desc": "Plazo de ley para recurso impugnatorio de apelación.",
          "estado": "pending",
          "fecha": ""
        },
        {
          "nombre": "SALA SUPERIOR",
          "desc": "Elevación a Sala Laboral de la Corte Superior de Justicia de Puno.",
          "estado": "pending",
          "fecha": ""
        }
      ],
      "hitos": [
        {
          "fecha": "02/09/2022",
          "descripcion": "DEMANDA: Presentación de la demanda laboral"
        },
        {
          "fecha": "05/09/2022",
          "descripcion": "INADMISIBILIDAD: Resolución N° 01 - observaciones de forma"
        },
        {
          "fecha": "15/09/2022",
          "descripcion": "SUBSANACIÓN: Presentación de escrito y anexos subsanando observaciones"
        },
        {
          "fecha": "20/09/2022",
          "descripcion": "ADMISIÓN: Resolución N° 02 - admisión y citación a conciliación"
        },
        {
          "fecha": "30/09/2022",
          "descripcion": "APERSONAMIENTO: Apersonamiento de Electro Puno y pago de tasas"
        },
        {
          "fecha": "22/11/2022",
          "descripcion": "CONTESTACIÓN: Contestación de demanda de Electro Puno con excepción de caducidad"
        },
        {
          "fecha": "22/11/2022",
          "descripcion": "AUDIENCIA DE CONCILIACIÓN: Fracasada por inasistencia de contratistas"
        },
        {
          "fecha": "02/12/2022",
          "descripcion": "OFICIO: Requerimiento de exhibición documental a Electro Puno S.A.A."
        },
        {
          "fecha": "16/12/2022",
          "descripcion": "EXHIBICIONES: Presentación de medios probatorios por Electro Puno"
        },
        {
          "fecha": "02/01/2023",
          "descripcion": "SOLICITUD: Copias certificadas solicitadas por el demandante"
        },
        {
          "fecha": "04/01/2023",
          "descripcion": "RESOLUCIÓN N° 03: Expedición de copias y asunción del Juez Raúl Ale Polar"
        },
        {
          "fecha": "16/03/2023",
          "descripcion": "AUDIENCIA DE JUZGAMIENTO: Suspendida por falta de cédulas físicas"
        },
        {
          "fecha": "10/05/2023",
          "descripcion": "AUDIENCIA DE JUZGAMIENTO: Reanudada, actuación probatoria y alegatos"
        },
        {
          "fecha": "12/05/2023",
          "descripcion": "SENTENCIA N° 59-2023-LA: Declara infundada la excepción y la demanda"
        }
      ]
    },
    "actuaciones": [
      {
        "numero": 1,
        "fecha": "02/09/2022",
        "acto": "INTERPONE DEMANDA LABORAL",
        "sumilla": "El demandante interpone formalmente una demanda laboral sobre desnaturalización de contrato de tercerización laboral y reposición contra Electro Puno S.A.A. y otras empresas contratistas.",
        "responsable": "MESA DE PARTES / LEA CALDERON ARAPA",
        "pdfUrl": "expedientes/1 DEMANDA Y ANEXOS 1-658_261010_092318.pdf",
        "docs": [
          {
            "label": "Demanda y Anexos (Fojas 1-658)",
            "url": "expedientes/1 DEMANDA Y ANEXOS 1-658_261010_092318.pdf"
          }
        ]
      },
      {
        "numero": 2,
        "fecha": "05/09/2022",
        "acto": "INADMISIBILIDAD DE DEMANDA (RESOLUCIÓN N° 01)",
        "sumilla": "El Juzgado de Trabajo declara inadmisible la demanda debido a que se advirtieron omisiones de carácter subsanable respecto a los anexos, otorgando un plazo de cinco días para corregirlas bajo apercibimiento de ordenar el archivo del expediente.",
        "responsable": "HUAMAN ROMERO GONZALO VICTOR / LEA CALDERON ARAPA",
        "pdfUrl": "expedientes/2 AUTO QUE DECLARA INADMISIBLE LA DEMANDA.pdf",
        "docs": [
          {
            "label": "Resolución N° 01 (Auto Inadmisible)",
            "url": "expedientes/2 AUTO QUE DECLARA INADMISIBLE LA DEMANDA.pdf"
          },
          {
            "label": "Cédula de Notificación",
            "url": "expedientes/2.1 AUTO QUE DECLARA INADMISIBLE LA DEMANDA.pdf"
          }
        ]
      },
      {
        "numero": 3,
        "fecha": "15/09/2022",
        "acto": "SUBSANACIÓN DE OBSERVACIONES",
        "sumilla": "El demandante presenta escrito subsanando las observaciones advertidas por el juzgado, precisando los periodos correctos de los registros de capacitación y adjuntando medio digital con videos y fotografías probatorias.",
        "responsable": "LEA CALDERON ARAPA",
        "pdfUrl": "expedientes/3 SUBSANA OBSERVACIONES DE LA DEMANDA 661-664_261010_115347.pdf",
        "docs": [
          {
            "label": "Escrito de Subsanación (Fojas 661-664)",
            "url": "expedientes/3 SUBSANA OBSERVACIONES DE LA DEMANDA 661-664_261010_115347.pdf"
          }
        ]
      },
      {
        "numero": 4,
        "fecha": "20/09/2022",
        "acto": "ADMISIÓN DE DEMANDA (RESOLUCIÓN N° 02)",
        "sumilla": "El órgano jurisdiccional califica positivamente la demanda tras verificar el cumplimiento de los requisitos legales, admitiéndola a trámite en la vía del proceso ordinario laboral y citando a las partes a audiencia de conciliación virtual para el 22/11/2022.",
        "responsable": "HUAMAN ROMERO GONZALO VICTOR / LEA CALDERON ARAPA",
        "pdfUrl": "expedientes/4 AUTO QUE ADMITE DEMANDA RES 2 957-2022-665-668_261010_115630.pdf",
        "docs": [
          {
            "label": "Resolución N° 02 (Auto Admisorio)",
            "url": "expedientes/4 AUTO QUE ADMITE DEMANDA RES 2 957-2022-665-668_261010_115630.pdf"
          },
          {
            "label": "Cédula de Notificación N° 21043-2022",
            "url": "expedientes/4.4. NOTIFICACIÓN DE RES 2 669 - 672_261010_120203.pdf"
          }
        ]
      },
      {
        "numero": 5,
        "fecha": "30/09/2022",
        "acto": "APERSONAMIENTO Y CUMPLO REQUERIMIENTO",
        "sumilla": "La empresa principal Electro Puno S.A.A., a través de su apoderada Abg. Priscilla Barrientos Tejada, se apersona formalmente al proceso, señala domicilio procesal, casilla electrónica N° 6255 y proporciona datos de contacto conforme al requerimiento judicial.",
        "responsable": "CHAMBI RODRIGUEZ JOHAN MAX",
        "pdfUrl": "expedientes/5 APERSONAMIENTO Y CUMPLO REQUERIMIENTO 674-682_261010_120756.pdf",
        "docs": [
          {
            "label": "Escrito de Apersonamiento (Fojas 674-682)",
            "url": "expedientes/5 APERSONAMIENTO Y CUMPLO REQUERIMIENTO 674-682_261010_120756.pdf"
          }
        ]
      },
      {
        "numero": 6,
        "fecha": "22/11/2022",
        "acto": "CONTESTACIÓN DE DEMANDA Y EXCEPCIÓN DE CADUCIDAD",
        "sumilla": "La empresa principal Electro Puno S.A.A. contesta formalmente la demanda solicitando que sea declarada infundada en todos sus extremos y deduce excepción de caducidad, sosteniendo la validez de los contratos de tercerización y que el demandante nunca estuvo subordinado.",
        "responsable": "CHAMBI RODRIGUEZ JOHAN MAX",
        "pdfUrl": "expedientes/6 CONTESTACION DE LA DEMANDA 683-692_261010_122209.pdf",
        "docs": [
          {
            "label": "Contestación de Demanda (Fojas 683-692)",
            "url": "expedientes/6 CONTESTACION DE LA DEMANDA 683-692_261010_122209.pdf"
          }
        ]
      },
      {
        "numero": 7,
        "fecha": "22/11/2022",
        "acto": "ACTA DE REGISTRO DE AUDIENCIA DE CONCILIACIÓN",
        "sumilla": "Se lleva a cabo la audiencia virtual ante el Juez Wilber Paredes Jaén con la presencia del demandante y Electro Puno S.A.A. (dejándose constancia de la inasistencia de las demás empresas codemandadas). Al no haber acuerdo, se da por fracasada la conciliación y se fijan las pretensiones materia de juicio.",
        "responsable": "WILBER PAREDES JAEN / MONICA KAREN ROQUE QUISPE",
        "pdfUrl": "expedientes/7 ACTA DE REGISTRO DE AUDIENCIA DE CONCILIACION 69_261010_122610.pdf",
        "docs": [
          {
            "label": "Acta de Audiencia de Conciliación",
            "url": "expedientes/7 ACTA DE REGISTRO DE AUDIENCIA DE CONCILIACION 69_261010_122610.pdf"
          },
          {
            "label": "Cédula de Notificación N° 28369-2022",
            "url": "expedientes/7.1 ACTA DE REGISTRO DE AUDIENCIA DE CONCILIACION _261010_122706.pdf"
          }
        ]
      },
      {
        "numero": 8,
        "fecha": "02/12/2022",
        "acto": "REQUERIMIENTO DE EXHIBICIÓN DOCUMENTAL (OFICIO N° 3262-2022)",
        "sumilla": "El juzgado libra el Oficio N° 3262-2022-JET-MCL.ZN-CSJPU-PJ requiriendo al Gerente General de Electro Puno S.A.A. para que en el plazo de cinco días remita la totalidad de los documentos propuestos como medios probatorios y contratos suscritos.",
        "responsable": "JUZGADO ESPECIALIZADO LABORAL / CHAMBI RODRIGUEZ JOHAN MAX",
        "pdfUrl": "expedientes/8 Oficio de Requerimiento de Exhibición de Documen_261010_122812.pdf",
        "docs": [
          {
            "label": "Oficio N° 3262-2022-JET Requerimiento",
            "url": "expedientes/8 Oficio de Requerimiento de Exhibición de Documen_261010_122812.pdf"
          }
        ]
      },
      {
        "numero": 9,
        "fecha": "16/12/2022",
        "acto": "EXHIBICIONES DOCUMENTALES",
        "sumilla": "La codemandada Electro Puno S.A.A. cumple con absolver el requerimiento presentando exhibiciones de documentos mediante enlace digital de almacenamiento en la nube, precisando antecedentes archivísticos.",
        "responsable": "CHAMBI RODRIGUEZ JOHAN MAX",
        "pdfUrl": "expedientes/9 EXHIBICIONES 699-703_261010_123056.pdf",
        "docs": [
          {
            "label": "Escrito de Exhibiciones (Fojas 699-703)",
            "url": "expedientes/9 EXHIBICIONES 699-703_261010_123056.pdf"
          }
        ]
      },
      {
        "numero": 10,
        "fecha": "02/01/2023",
        "acto": "SOLICITUD DE COPIAS CERTIFICADAS Y OTROS",
        "sumilla": "La parte demandante presenta escrito solicitando al juzgado la expedición y entrega de copias certificadas de los actuados principales (demanda, anexos y auto admisorio) para los fines pertinentes de su derecho.",
        "responsable": "CHAMBI RODRIGUEZ JOHAN MAX",
        "pdfUrl": "expedientes/10 Solicito copias certificadas y otros 704-706_261010_123325.pdf",
        "docs": [
          {
            "label": "Escrito de Solicitud de Copias (Fojas 704-706)",
            "url": "expedientes/10 Solicito copias certificadas y otros 704-706_261010_123325.pdf"
          }
        ]
      },
      {
        "numero": 11,
        "fecha": "04/01/2023",
        "acto": "EXPEDICIÓN DE COPIAS Y ASUNCIÓN DE COMPETENCIA (RESOLUCIÓN N° 03)",
        "sumilla": "El juzgado resuelve proveer la solicitud de copias certificadas disponiendo su expedición, y pone en conocimiento de las partes la asunción de competencia del despacho por parte del magistrado Raúl Ale Polar por disposición superior.",
        "responsable": "ALE POLAR RAUL / CHAMBI RODRIGUEZ JOHAN MAX",
        "pdfUrl": "expedientes/11 Resolución 3 707-719_261010_123405.pdf",
        "docs": [
          {
            "label": "Resolución N° 03 (Asunción de Competencia)",
            "url": "expedientes/11 Resolución 3 707-719_261010_123405.pdf"
          },
          {
            "label": "Notificación y Cédulas N° 130-2023",
            "url": "expedientes/11-1 Resolución 3 707-719_261010_124343.pdf"
          }
        ]
      },
      {
        "numero": 12,
        "fecha": "16/03/2023",
        "acto": "AUDIENCIA DE JUZGAMIENTO (SUSPENDIDA)",
        "sumilla": "Al instalarse la audiencia, el juez advierte que no obran en el expediente físico las cédulas de notificación a las co-demandadas contratistas, por lo que dispone la suspensión y reprogramación de la diligencia, formulando llamado de atención al personal de trámite.",
        "responsable": "RAUL ALE POLAR / MONICA KAREN ROQUE QUISPE",
        "pdfUrl": "expedientes/12 ACTA DE REGISTRO DE AUDIENCIA DE JUZGAMIENTO 16_261010_124542.pdf",
        "docs": [
          {
            "label": "Acta de Juzgamiento Suspendida",
            "url": "expedientes/12 ACTA DE REGISTRO DE AUDIENCIA DE JUZGAMIENTO 16_261010_124542.pdf"
          },
          {
            "label": "Cédula de Notificación N° 4635-2023",
            "url": "expedientes/12.1 ACTA DE REGISTRO DE AUDIENCIA DE JUZGAMIENTO _261010_135915.pdf"
          }
        ]
      },
      {
        "numero": 13,
        "fecha": "10/05/2023",
        "acto": "AUDIENCIA DE JUZGAMIENTO (REANUDADA Y CONCLUIDA)",
        "sumilla": "Se lleva a cabo la reanudación y conclusión de la audiencia de juzgamiento con la confrontación de posiciones, fijación de puntos controvertidos, admisión y actuación de pruebas (exhibiciones digitales) y recepción de alegatos finales de las partes.",
        "responsable": "RAUL ALE POLAR / MONICA KAREN ROQUE QUISPE",
        "pdfUrl": "expedientes/13 ACTA DE REGISTRO DE AUDIENCIA DE JUZGAMIENTO 10_261010_124920.pdf",
        "docs": [
          {
            "label": "Acta de Juzgamiento Reanudada y Concluida",
            "url": "expedientes/13 ACTA DE REGISTRO DE AUDIENCIA DE JUZGAMIENTO 10_261010_124920.pdf"
          }
        ]
      },
      {
        "numero": 14,
        "fecha": "12/05/2023",
        "acto": "SENTENCIA N° 59-2023-LA (RESOLUCIÓN N° 04)",
        "sumilla": "El Juzgado Especializado de Trabajo declara infundada la excepción de caducidad deducida por Electro Puno S.A.A. e INFUNDADA en todos sus extremos la demanda principal de desnaturalización y reposición, al no acreditarse subordinación directa con la principal ni desnaturalización de la tercerización. Ordena el archivo definitivo sin costas ni costos.",
        "responsable": "RAUL ALE POLAR / CHAMBI RODRIGUEZ JOHAN MAX",
        "pdfUrl": "expedientes/14 SENTENCIA N° 59 – 2023 – LA res 4 737-754_261010_125512.pdf",
        "docs": [
          {
            "label": "Sentencia N° 59-2023-LA (Fojas 737-754)",
            "url": "expedientes/14 SENTENCIA N° 59 – 2023 – LA res 4 737-754_261010_125512.pdf"
          },
          {
            "label": "Cédula de Notificación N° 9194-2023",
            "url": "expedientes/14.1 SENTENCIA N° 59 – 2023 – LA res 4 737-754_261010_125930.pdf"
          }
        ]
      }
    ]
  },
  {
    "codigo": "00203-2025-0-2101-JP-FC-01",
    "sec": "00203",
    "anio": "2025",
    "org": "0",
    "dist": "2101",
    "inst": "JP",
    "esp": "FC",
    "corr": "01",
    "reporte": {
      "organoJurisdiccional": "1ER JUZGADO DE PAZ LETRADO - SEDE PUNO",
      "distritoJudicial": "PUNO",
      "juez": "MARY ****** / ELVER ******",
      "especialistaLegal": "DIANA ******",
      "fechaInicio": "24/01/2025",
      "proceso": "PROCESO SIMPLIFICADO VIRTUAL DE ALIMENTOS",
      "especialidad": "FAMILIA CIVIL",
      "estado": "EN EJECUCION / RES JUDICATA",
      "observacion": "Expediente con estado procesal final. Cuenta Banco Nacion 04-192-193325.",
      "materia": "ALIMENTOS",
      "etapaProcesal": "EJECUCION",
      "ubicacion": "JUZGADO",
      "sumilla": "DEMANDA DE ALIMENTOS (S/ 1,000.00)",
      "fechaConclusion": "26/09/2025",
      "motivoConclusion": "SENTENCIA CONSENTIDA"
    },
    "progreso": {
      "porcentaje": 95,
      "mensaje": "El proceso tiene la autoridad de cosa juzgada y se encuentra en etapa de ejecucion.",
      "etapas": [
        {
          "nombre": "Calificacion de Demanda",
          "desc": "Revision de admisibilidad y requisitos de procedencia.",
          "estado": "done"
        },
        {
          "nombre": "Saneamiento y Audiencia (Unica)",
          "desc": "Saneamiento, conciliacion, fijacion de puntos controvertidos y actuacion de medios probatorios.",
          "estado": "done"
        },
        {
          "nombre": "Sentencia",
          "desc": "Emision del fallo que resuelve el fondo del conflicto.",
          "estado": "done"
        },
        {
          "nombre": "Impugnaciones (Nulidad)",
          "desc": "Rechazo de recursos impugnatorios.",
          "estado": "done"
        },
        {
          "nombre": "Ejecucion",
          "desc": "Cumplimiento de lo dispuesto en la sentencia firme.",
          "estado": "current"
        }
      ],
      "hitos": [
        {
          "fecha": "24/01/2025",
          "descripcion": "Presentacion de Demanda"
        },
        {
          "fecha": "27/01/2025",
          "descripcion": "Auto Admisorio (Res. 01)"
        },
        {
          "fecha": "28/03/2025",
          "descripcion": "Audiencia Unica"
        },
        {
          "fecha": "31/03/2025",
          "descripcion": "Sentencia (Res. 08) - Fija pension S/ 1,000.00"
        },
        {
          "fecha": "18/07/2025",
          "descripcion": "Rechazo de Nulidad (Res. 12)"
        },
        {
          "fecha": "26/09/2025",
          "descripcion": "Sentencia Consentida (Res. 13)"
        }
      ]
    },
    "partes": [
      {
        "rol": "DEMANDADO",
        "tipoPers": "NATURAL",
        "apellidoPaterno": "******",
        "apellidoMaterno": "******",
        "nombres": "FRANC ******"
      },
      {
        "rol": "DEMANDANTE",
        "tipoPers": "NATURAL",
        "apellidoPaterno": "******",
        "apellidoMaterno": "******",
        "nombres": "ALEURELIA ******"
      }
    ],
    "actuaciones": [
      {
        "numero": 18,
        "fecha": "26/09/2025",
        "acto": "RESOLUCIÓN N° 13",
        "sumilla": "DECLARA CONSENTIDA LA SENTENCIA FAMILIA N° 60-2025 — ADQUIERE CALIDAD DE COSA JUZGADA.",
        "responsable": "ELVER ******",
        "pdfUrl": "https://drive.google.com/file/d/125s_hP1FWs02oQq1d-tjZS5ItxM1fITQ/preview",
        "docs": [],
        "cedulas": [
          {
            "numero": "77018",
            "parte": "DEMANDANTE",
            "destinatario": "ALEURELIA ******",
            "fechaEnvio": "30/09/2025 09:15",
            "formaEntrega": "CASILLA ELECTRÓNICA",
            "pdfUrl": "https://drive.google.com/file/d/1AMC5ryNHOt4dfC0kA-A_mxQfZnADPpOQ/preview"
          },
          {
            "numero": "77019",
            "parte": "DEMANDADO",
            "destinatario": "FRANC ******",
            "fechaEnvio": "30/09/2025 09:16",
            "formaEntrega": "CASILLA ELECTRÓNICA",
            "pdfUrl": "https://drive.google.com/file/d/1RMpQhIjBjmVJB0VFVMwNDOJSW883XZZA/preview"
          }
        ]
      },
      {
        "numero": 17,
        "fecha": "04/09/2025",
        "acto": "ESCRITO N° 38276-2025",
        "sumilla": "SOLICITO SE DECLARE CONSENTIDA LA SENTENCIA FAMILIA N° 60-2025.",
        "responsable": "IOSEF ******",
        "pdfUrl": "https://drive.google.com/file/d/1eepdobh5N1rrendSfzJFjf6ZuiQLblsA/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 16,
        "fecha": "25/07/2025",
        "acto": "CONSTANCIA DE RECEPCIÓN",
        "sumilla": "CONSTANCIA DE RECEPCIÓN DE ANEXOS.",
        "responsable": "MESA DE PARTES",
        "pdfUrl": "https://drive.google.com/file/d/1OgQf87z5zzOMhpDdWW942bsTeNZt0_Bt/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 15,
        "fecha": "10/07/2025",
        "acto": "RESOLUCIÓN N° 12",
        "sumilla": "DECLARA IMPROCEDENTE LA NULIDAD; DISPONE NOTIFICAR AL DEMANDADO CON COPIA DE LA SENTENCIA.",
        "responsable": "NORKA ******",
        "pdfUrl": "https://drive.google.com/file/d/1x-mgJUUQdig6arcxcY_jwmqi14B2hBTN/preview",
        "docs": [],
        "cedulas": [
          {
            "numero": "56593",
            "parte": "DEMANDANTE",
            "destinatario": "ALEURELIA ******",
            "fechaEnvio": "16/07/2025 11:20",
            "formaEntrega": "CASILLA ELECTRÓNICA",
            "pdfUrl": "https://drive.google.com/file/d/16eNDSW05Z7dOniktVyGf2nadvvOVinjH/preview"
          },
          {
            "numero": "56595",
            "parte": "DEMANDADO",
            "destinatario": "FRANC ******",
            "fechaEnvio": "16/07/2025 11:21",
            "formaEntrega": "CASILLA ELECTRÓNICA (ADJUNTA SENTENCIA)",
            "pdfUrl": "https://drive.google.com/file/d/1jIg84AQOoq_OdM1Jnejo6eHkogbSt1rV/preview"
          }
        ]
      },
      {
        "numero": 14,
        "fecha": "26/06/2025",
        "acto": "RESOLUCIÓN N° 11",
        "sumilla": "TÉNGASE POR ABSUELTO EL TRASLADO; PASAN AUTOS A DESPACHO PARA RESOLVER.",
        "responsable": "DIANA ******",
        "pdfUrl": "https://drive.google.com/file/d/1HcnWWbbrhUdymNSRxZQL_blC2zGVUQYj/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 13,
        "fecha": "13/06/2025",
        "acto": "ESCRITO N° 24536-2025",
        "sumilla": "ABSOLUCIÓN DE NULIDAD. SOLICITA SE DECLARE IMPROCEDENTE.",
        "responsable": "IOSEF ******",
        "pdfUrl": "https://drive.google.com/file/d/1MydX9jMx0_F8yuXc5_AApA1zrsh5eXD5/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 12,
        "fecha": "30/05/2025",
        "acto": "RESOLUCIÓN N° 09 (SUBSANADA) Y N° 10",
        "sumilla": "ADMITE LA NULIDAD SUBSANADA Y CORRE TRASLADO POR 3 DÍAS A LA DEMANDANTE.",
        "responsable": "NORKA ******",
        "pdfUrl": "https://drive.google.com/file/d/1RTYQNQ9dR66uLV4xRxIQuN4znXUGuMVx/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 11,
        "fecha": "21/05/2025",
        "acto": "ESCRITO N° 19742-2025",
        "sumilla": "RESPUESTA AL OFICIO DEL JUZGADO (EMPRESA KOMATSU-MITSUI).",
        "responsable": "LUIS ******",
        "pdfUrl": "https://drive.google.com/file/d/1XD8vtdn-GI04bf5oDBzSi9fkvETLo4Qa/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 10,
        "fecha": "20/05/2025",
        "acto": "ESCRITO N° 19468-2025",
        "sumilla": "ADJUNTA TASAS JUDICIALES (ARANCEL NULIDAD Y NOTIFICACIONES).",
        "responsable": "FRANC ******",
        "pdfUrl": "https://drive.google.com/file/d/1FflausH1mn8sN5nkiht4lJj-5nXWsh0O/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 9,
        "fecha": "19/05/2025",
        "acto": "RESOLUCIÓN N° 09",
        "sumilla": "DECLARA INADMISIBLE LA NULIDAD E INAPLAZA PLAZO PARA SUBSANAR.",
        "responsable": "NORKA ******",
        "pdfUrl": "https://drive.google.com/file/d/11p7BthkjcqI6OO4cDzCTnpL1sRft1cCY/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 8,
        "fecha": "07/05/2025",
        "acto": "ESCRITO N° 17300-2025",
        "sumilla": "NULIDAD DE TODO LO ACTUADO (PRESENTADO SIN ARANCEL).",
        "responsable": "CÉSAR ******",
        "pdfUrl": "https://drive.google.com/file/d/1OiayikwcwP1codfzbqh930ogxE6Bn8hm/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 7,
        "fecha": "31/03/2025",
        "acto": "RESOLUCIÓN N° 08 (SENTENCIA FAMILIA N° 60)",
        "sumilla": "DECLARA FUNDADA LA DEMANDA Y FIJA PENSIÓN ALIMENTICIA EN S/ 1,000.00 MENSUALES.",
        "responsable": "MARY ******",
        "pdfUrl": "https://drive.google.com/file/d/1oXSrTPqt_iOsNA58SjFXDj1DYlOWAfWz/preview",
        "docs": [],
        "cedulas": [
          {
            "numero": "21350",
            "parte": "DEMANDANTE",
            "destinatario": "ALEURELIA ******",
            "fechaEnvio": "31/03/2025 15:45",
            "formaEntrega": "CASILLA ELECTRÓNICA",
            "pdfUrl": "https://drive.google.com/file/d/1YH-zKnnwUS-uVnsMceRtseywlsgP6zlB/preview"
          }
        ]
      },
      {
        "numero": 6,
        "fecha": "31/03/2025",
        "acto": "RESOLUCIÓN N° 07",
        "sumilla": "PRESCINDE DEL MEDIO PROBATORIO RENIEC Y ORDENA DICTAR SENTENCIA.",
        "responsable": "MARY ******",
        "pdfUrl": "https://drive.google.com/file/d/1eJxFWGQ2nMXIfHEn6bOwTqFNAHZienmD/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 5,
        "fecha": "24/03/2025",
        "acto": "RESOLUCIÓN N° 06",
        "sumilla": "DE OFICIO: AGUARDA INFORME DE RENIEC ANTES DE SENTENCIAR.",
        "responsable": "MARY ******",
        "pdfUrl": "https://drive.google.com/file/d/1GTsfeU_A2J4QHkxFbtL-tZnSaCgLym76/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 4,
        "fecha": "20/03/2025",
        "acto": "ACTA DE AUDIENCIA ÚNICA (RES 3, 4 Y 5)",
        "sumilla": "REBELDÍA DEL DEMANDADO, SANEAMIENTO PROCESAL Y ADMISIÓN DE MEDIOS PROBATORIOS.",
        "responsable": "MARY ******",
        "pdfUrl": "https://drive.google.com/file/d/1gYu4waCqKJZ5ShKGVb-UJuGH7yl9cwiR/preview",
        "docs": [],
        "cedulas": []
      },
      {
        "numero": 3,
        "fecha": "11/03/2025",
        "acto": "CARTA BANCO DE LA NACIÓN + RES N° 02",
        "sumilla": "APERTURA CUENTA BN 04-192-193325 Y RESOLUCIÓN 02 PONIÉNDOLA EN CONOCIMIENTO.",
        "responsable": "DIANA ******",
        "pdfUrl": "https://drive.google.com/file/d/1JbPrywKol2o2OaqPpLJCKnVfNtMPE_8-/preview",
        "docs": [
          {
            "label": "Carta BN",
            "url": "https://drive.google.com/file/d/1JbPrywKol2o2OaqPpLJCKnVfNtMPE_8-/preview"
          },
          {
            "label": "Res. N° 02",
            "url": "https://drive.google.com/file/d/1HDkBx2K9kvnCYEsA4R9Z6cUt8HNJRPeA/preview"
          }
        ],
        "cedulas": []
      },
      {
        "numero": 2,
        "fecha": "27/01/2025",
        "acto": "OFICIOS GIRADOS (RENIEC Y BN)",
        "sumilla": "OFICIOS SOLICITANDO INFORME A RENIEC Y APERTURA DE CUENTA EN BANCO DE LA NACIÓN.",
        "responsable": "NORKA ******",
        "pdfUrl": "https://drive.google.com/file/d/1sVIGsK7oSd2mOPqDXq0qqLIXwuWdEp8y/preview",
        "docs": [
          {
            "label": "Oficio RENIEC",
            "url": "https://drive.google.com/file/d/1sVIGsK7oSd2mOPqDXq0qqLIXwuWdEp8y/preview"
          },
          {
            "label": "Oficio BN",
            "url": "https://drive.google.com/file/d/1w1RjhmLQRdFlrftDuzaZkxsXaivlba3F/preview"
          }
        ],
        "cedulas": []
      },
      {
        "numero": 1,
        "fecha": "27/01/2025",
        "acto": "RESOLUCIÓN N° 01 (AUTO ADMISORIO)",
        "sumilla": "ADMITE LA DEMANDA DE ALIMENTOS Y FIJA ASIGNACIÓN ANTICIPADA DE OFICIO.",
        "responsable": "NORKA ******",
        "pdfUrl": "https://drive.google.com/file/d/12SKVA9ixdT9D3dtnvYMdiB71W7UGPqsK/preview",
        "docs": [],
        "cedulas": []
      }
    ]
  },
  {
    "codigo": "00417-2024-0-2101-JR-CI-02",
    "sec": "00417",
    "anio": "2024",
    "org": "0",
    "dist": "2101",
    "inst": "JR",
    "esp": "CI",
    "corr": "02",
    "reporte": {
      "organoJurisdiccional": "JUZGADO ESPECIALIZADO CIVIL - PUNO",
      "distritoJudicial": "PUNO",
      "juez": "JUEZA L. CALLA T.",
      "especialistaLegal": "ESPECIALISTA A.",
      "fechaInicio": "10/05/2024",
      "proceso": "PROCESO UNICO DE EJECUCION",
      "especialidad": "CIVIL",
      "estado": "EN EJECUCION",
      "observacion": "Expediente en etapa de ejecucion de sentencia.",
      "materia": "OBLIGACION DE DAR SUMA DE DINERO",
      "etapaProcesal": "EJECUCION",
      "ubicacion": "JUZGADO",
      "sumilla": "COBRO DE S/ 25,000.00",
      "fechaConclusion": "",
      "motivoConclusion": ""
    },
    "progreso": {
      "porcentaje": 80,
      "mensaje": "El proceso se encuentra en etapa de ejecucion de sentencia.",
      "etapas": [
        {
          "nombre": "Admision de Demanda",
          "desc": "Revision y admision de la demanda ejecutiva.",
          "estado": "done"
        },
        {
          "nombre": "Contradiccion",
          "desc": "Plazo para que el ejecutado formule contradiccion.",
          "estado": "done"
        },
        {
          "nombre": "Sentencia",
          "desc": "Resolucion que declara fundada la demanda.",
          "estado": "done"
        },
        {
          "nombre": "Ejecucion",
          "desc": "Cumplimiento forzado del mandato de pago.",
          "estado": "current"
        }
      ],
      "hitos": [
        {
          "fecha": "10/05/2024",
          "descripcion": "Admision a tramite de la demanda (Res. 01)"
        },
        {
          "fecha": "02/12/2024",
          "descripcion": "Sentencia que declara fundada la demanda (Res. 05)"
        }
      ]
    },
    "partes": [
      {
        "rol": "DEMANDANTE",
        "tipoPers": "JURIDICA",
        "apellidoPaterno": "COMERCIAL ANDINA S.A.C.",
        "apellidoMaterno": "",
        "nombres": ""
      },
      {
        "rol": "DEMANDADO",
        "tipoPers": "NATURAL",
        "apellidoPaterno": "APAZA",
        "apellidoMaterno": "LIMACHI",
        "nombres": "FRANCISCO"
      }
    ],
    "actuaciones": [
      {
        "numero": 2,
        "fecha": "02/12/2024",
        "acto": "SENTENCIA (Res. 05)",
        "sumilla": "Se declara FUNDADA la demanda ejecutiva. Mandato de pago por S/ 25,000.00.",
        "responsable": "JUEZA L. CALLA T.",
        "pdfUrl": "https://drive.google.com/file/d/1oXSrTPqt_iOsNA58SjFXDj1DYlOWAfWz/preview",
        "cedulas": [
          {
            "numero": "34102",
            "parte": "DEMANDADO",
            "destinatario": "APAZA LIMACHI FRANCISCO",
            "fechaEnvio": "05/12/2024 10:20",
            "formaEntrega": "CASILLA ELECTRÓNICA",
            "pdfUrl": "https://drive.google.com/file/d/1YH-zKnnwUS-uVnsMceRtseywlsgP6zlB/preview"
          }
        ]
      },
      {
        "numero": 1,
        "fecha": "10/05/2024",
        "acto": "RESOLUCION NRO. 01",
        "sumilla": "Se admite a tramite la demanda ejecutiva y se requiere al ejecutado el pago bajo apercibimiento.",
        "responsable": "JUEZA L. CALLA T.",
        "pdfUrl": "https://drive.google.com/file/d/12SKVA9ixdT9D3dtnvYMdiB71W7UGPqsK/preview",
        "cedulas": []
      }
    ]
  },
  {
    "codigo": "00123-2023-0-2111-JR-PE-01",
    "sec": "00123",
    "anio": "2023",
    "org": "0",
    "dist": "2111",
    "inst": "JR",
    "esp": "PE",
    "corr": "01",
    "reporte": {
      "organoJurisdiccional": "1° JUZGADO PENAL - PUNO",
      "distritoJudicial": "PUNO",
      "juez": "DR. RICARDO MAMANI CALIZAYA",
      "especialistaLegal": "ESPECIALISTA PENAL",
      "fechaInicio": "28/09/2023",
      "proceso": "PROCESO PENAL COMÚN (NCPP)",
      "especialidad": "PENAL",
      "estado": "ACTIVO / CONCLUIDO",
      "observacion": "Sentencia condenatoria en primera instancia.",
      "materia": "ROBO AGRAVADO / ANULABILIDAD DE ACTO JURÍDICO",
      "etapaProcesal": "JUZGAMIENTO",
      "ubicacion": "JUZGADO PENAL",
      "sumilla": "PROCESO PENAL POR ROBO AGRAVADO",
      "fechaConclusion": "20/10/2025",
      "motivoConclusion": "SENTENCIA CONDENATORIA"
    },
    "progreso": {
      "porcentaje": 90,
      "mensaje": "Se completó la etapa de pruebas y se expidió sentencia.",
      "etapas": [
        {
          "nombre": "Demanda",
          "desc": "Denuncia e investigación preparatoria.",
          "estado": "done"
        },
        {
          "nombre": "Calificación",
          "desc": "Control de acusación y auto de enjuiciamiento.",
          "estado": "done"
        },
        {
          "nombre": "Contestación",
          "desc": "Alegatos y defensa técnica.",
          "estado": "done"
        },
        {
          "nombre": "Audiencia",
          "desc": "Juicio oral y actuación de pruebas.",
          "estado": "done"
        },
        {
          "nombre": "Sentencia 1ra Inst.",
          "desc": "Sentencia condenatoria.",
          "estado": "current"
        },
        {
          "nombre": "Apelación",
          "desc": "Plazo para apelación de sentencia.",
          "estado": "pending"
        },
        {
          "nombre": "Sala Superior",
          "desc": "Segunda instancia penal.",
          "estado": "pending"
        }
      ],
      "hitos": [
        {
          "fecha": "03/06/2025",
          "descripcion": "Interposición de Demanda / Acusación"
        },
        {
          "fecha": "18/06/2025",
          "descripcion": "Calificación y Admisión"
        },
        {
          "fecha": "09/07/2025",
          "descripcion": "Contestación de la Acusación"
        },
        {
          "fecha": "15/07/2025",
          "descripcion": "Audiencia de Pruebas"
        },
        {
          "fecha": "12/11/2025",
          "descripcion": "Sentencia Condenatoria (Res. N° 023-2025)"
        }
      ]
    },
    "partes": [
      {
        "rol": "DEMANDANTE",
        "tipoPers": "NATURAL",
        "apellidoPaterno": "MAMANI",
        "apellidoMaterno": "CALIZAYA",
        "nombres": "RICARDO JUNIOR"
      },
      {
        "rol": "DEMANDADO",
        "tipoPers": "NATURAL",
        "apellidoPaterno": "PEREZ",
        "apellidoMaterno": "CARDENAS",
        "nombres": "JUAN CAMILO"
      }
    ],
    "resumen": "Este es un proceso civil de anulabilidad de acto jurídico por dolo, donde una madre demanda a su hijo y su pareja, alegando que fue engañada para firmar una compraventa de su inmueble creyendo que firmaba una hipoteca. El proceso inició con una demanda que fue declarada inadmisible, luego subsanada y finalmente admitida. El conflicto gira en torno al vicio de voluntad (dolo causante) y la posible invalidez de la compraventa.",
    "situacion": {
      "titulo": "SENTENCIA CONDENATORIA",
      "detalle": "En la Resolución N.° 023-2025, el Juzgado Civil declaró fundada la demanda y estableció que la compraventa es anulable por dolo, al haberse viciado la voluntad de la demandante; en consecuencia, el contrato queda sin efecto, se declara infundada la tacha y la parte demandada asume costas y costos del proceso."
    },
    "actuaciones": [
      {
        "numero": 3,
        "fecha": "12/11/2024",
        "acto": "SENTENCIA (Resolución N° 023-2025)",
        "sumilla": "SENTENCIA CONDENATORIA: DECLARA FUNDADA LA DEMANDA DE ANULABILIDAD POR DOLO.",
        "responsable": "DR. RICARDO MAMANI CALIZAYA",
        "pdfUrl": "https://drive.google.com/file/d/1vHs8SgtY-j73LSvYb62PUZXulgHQKsGX/preview",
        "cedulas": []
      },
      {
        "numero": 2,
        "fecha": "15/07/2024",
        "acto": "ACTA DE AUDIENCIA DE PRUEBAS",
        "sumilla": "SE ACTÚAN PRUEBAS DECISIVAS EN LA AUDIENCIA (VIDEO DEL ACTO).",
        "responsable": "ESPECIALISTA LEGAL",
        "pdfUrl": "https://drive.google.com/file/d/1kU_iE30jHUItXxW7k4eGLRqTrS_YunK0/preview",
        "cedulas": []
      },
      {
        "numero": 1,
        "fecha": "03/06/2024",
        "acto": "DEMANDA",
        "sumilla": "SE INTERPONE DEMANDA DE ANULABILIDAD POR DOLO (COMPRAVENTA).",
        "responsable": "MESA DE PARTES",
        "pdfUrl": "https://drive.google.com/file/d/1qDnc_lwNAmEH36AwrZsr1K7B_DZSlJMe/preview",
        "cedulas": []
      }
    ]
  }
];

let DB_EXPS = [...BASE_EXPS]; // Siempre disponibles sin servidor

async function cargarDB() {
  try {
    const r = await fetch('data/expedientes.json?t=' + Date.now());
    if (r.ok) {
      const fetched = await r.json();
      fetched.forEach(x => {
        const idx = DB_EXPS.findIndex(e => e.codigo === x.codigo);
        if (idx !== -1) DB_EXPS[idx] = x;
        else DB_EXPS.push(x);
      });
      try {
        const local = JSON.parse(localStorage.getItem('sice_exps_v2') || '[]');
        const cleaned = local.filter(x => x.codigo !== '00957-2022-0-2111-JR-LA-01');
        localStorage.setItem('sice_exps_v2', JSON.stringify(cleaned));
      } catch(_) {}
    }
  } catch(_) {}
  const local = JSON.parse(localStorage.getItem('sice_exps_v2') || '[]');
  local.forEach(x => {
    const isBase = BASE_EXPS.some(b => b.codigo === x.codigo);
    if (!isBase) {
      const idx = DB_EXPS.findIndex(e => e.codigo === x.codigo);
      if (idx !== -1) DB_EXPS[idx] = x;
      else DB_EXPS.push(x);
    }
  });
}

function getCustomExps() { return JSON.parse(localStorage.getItem("sice_exps_v2") || "[]"); }
function saveCustomExps(arr) { localStorage.setItem("sice_exps_v2", JSON.stringify(arr)); }
