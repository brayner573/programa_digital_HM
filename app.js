/* ================================================================
   SICE - app.js
   Base de datos: data/expedientes.json (GitHub Pages friendly)
================================================================ */

/* ===== CONSTANTES LOCALES ===== */
const DIST   = { PUNO:"2101", LIMA:"1801", AREQUIPA:"0401", CUSCO:"0701" };
const INST   = { JP:"JUZGADO DE PAZ LETRADO", JR:"JUZGADO ESPECIALIZADO", SP:"SALA SUPERIOR" };
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
  }
];

let DB_EXPS = [...BASE_EXPS]; // Siempre disponibles sin servidor

async function cargarDB() {
  // Intentar cargar JSON adicional (funciona en GitHub Pages / servidor local)
  try {
    const r = await fetch("data/expedientes.json?t=" + Date.now());
    if (r.ok) {
      const fetched = await r.json();
      const yaEnDB = new Set(DB_EXPS.map(x=>x.codigo));
      fetched.forEach(x => { if (!yaEnDB.has(x.codigo)) DB_EXPS.push(x); });
    }
  } catch(_) { /* Sin servidor: usa solo los datos integrados */ }
  // Agregar/actualizar los que el admin guardó en localStorage
  const local = JSON.parse(localStorage.getItem("sice_exps_v2") || "[]");
  local.forEach(x => {
    const idx = DB_EXPS.findIndex(e => e.codigo === x.codigo);
    if (idx !== -1) DB_EXPS[idx] = x;
    else DB_EXPS.push(x);
  });
}

function getCustomExps() { return JSON.parse(localStorage.getItem("sice_exps_v2") || "[]"); }
function saveCustomExps(arr) { localStorage.setItem("sice_exps_v2", JSON.stringify(arr)); }

/* ===== AUTENTICACIÓN ===== */
const sha = async t => [...new Uint8Array(
  await crypto.subtle.digest("SHA-256", new TextEncoder().encode(t))
)].map(b=>b.toString(16).padStart(2,"0")).join("");

// Usuarios por defecto siempre disponibles sin necesidad de registrarse primero
const HASH_123456 = "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"; // sha256("123456")
const DEFAULT_USERS = {
  "harry": { h: HASH_123456, nombre: "Harry (Administrador)" },
  "admin": { h: HASH_123456, nombre: "Administrador" },
  "usuario": { h: HASH_123456, nombre: "Usuario Demo" }
};
const users = () => {
  const local = JSON.parse(localStorage.getItem("sice_users") || "{}");
  return { ...DEFAULT_USERS, ...local };
};
let registro = false, finSesion = 0, timer, sesionActual = "";

$("btnModo").onclick = () => {
  registro = !registro;
  $("tituloLogin").textContent = registro ? "Crear cuenta" : "Iniciar sesión";
  $("btnLogin").textContent    = registro ? "Registrarme" : "Ingresar";
  $("btnModo").textContent     = registro ? "Ya tengo cuenta" : "¿No tienes cuenta? Regístrate";
  $("lblNombre").hidden = !registro;
  $("loginMsg").textContent = "";
};

$("formLogin").onsubmit = async e => {
  e.preventDefault();
  const u = $("lUser").value.trim().toLowerCase(),
        h = await sha($("lPass").value),
        db = users(), m = $("loginMsg");
  if (registro) {
    const local = JSON.parse(localStorage.getItem("sice_users") || "{}");
    if (local[u]) {
      m.className = "msg";
      return m.textContent = "Ese usuario ya existe.";
    }
    local[u] = { h, nombre: $("lNombre").value.trim() || u };
    localStorage.setItem("sice_users", JSON.stringify(local));
    registro = true;
    $("btnModo").click();
    m.className = "msg ok";
    m.textContent = "¡Cuenta creada con éxito! Ya puedes ingresar.";
  } else {
    if (!db[u] || db[u].h !== h) {
      m.className = "msg";
      return m.textContent = "Usuario o contraseña incorrectos.";
    }
    sessionStorage.setItem("sice_sesion", u);
    entrar(u, db[u].nombre);
  }
};

function entrar(usuario, nombre) {
  sesionActual = usuario;
  $("vistaLogin").hidden = true;
  $("vistaApp").hidden = false;
  $("usuario").textContent = nombre;
  finSesion = Date.now() + 15*60000;
  clearInterval(timer);
  timer = setInterval(reloj, 1000);
  reloj();
  nuevoCaptcha();
  $("btnAdmin").hidden = (usuario !== ADMIN_USER && usuario !== "admin");
  if (!$("botMsgs").children.length)
    botDi("Hola, soy el asistente del SICE. Pregúntame sobre juzgados, expedientes o leyes peruanas.");
}

function salir() { sessionStorage.removeItem("sice_sesion"); location.reload(); }
$("btnSalir").onclick = salir;

function reloj() {
  const r = Math.max(0, finSesion - Date.now()), p = n => String(n).padStart(2,"0");
  $("reloj").innerHTML =
    `Fecha: ${new Date().toLocaleString("es-PE")}<br>` +
    `Tiempo restante: ${p(Math.floor(r/60000))}:${p(Math.floor(r%60000/1000))}`;
  if (!r) { alert("Tu sesion expiro."); salir(); }
}

(() => {
  const s = sessionStorage.getItem("sice_sesion"), db = users();
  if (s && db[s]) entrar(s, db[s].nombre);
})();

/* ===== CAPTCHA ===== */
let capTxt = "";
function nuevoCaptcha() {
  const ch = "abcdefghjkmnpqrstuvwxyz23456789"; capTxt = "";
  for (let i=0;i<5;i++) capTxt += ch[crypto.getRandomValues(new Uint32Array(1))[0] % ch.length];
  const c=$("cap"),g=c.getContext("2d");
  g.fillStyle="#000"; g.fillRect(0,0,170,46);
  for(let i=0;i<6;i++){
    g.strokeStyle=`rgba(255,255,255,${Math.random()*.25})`;
    g.beginPath(); g.moveTo(0,Math.random()*46); g.lineTo(170,Math.random()*46); g.stroke();
  }
  g.font="italic bold 26px Georgia"; g.fillStyle="#ff3b3b";
  [...capTxt].forEach((l,i)=>{
    g.save(); g.translate(18+i*30,31);
    g.rotate((Math.random()-.5)*.5);
    g.fillText(Math.random()>.5?l.toUpperCase():l,0,0); g.restore();
  });
  $("capIn").value="";
}
$("capRef").onclick = nuevoCaptcha;
$("capVoz").onclick = () => {
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance([...capTxt].join(" "));
  u.lang="es-PE"; speechSynthesis.speak(u);
};

/* ===== FORMULARIO BUSQUEDA ===== */
fill($("fDist"), Object.fromEntries(Object.keys(DIST).map(k=>[k,k])), "Seleccione");
fill($("fInst"), INST, "Seleccione");
fill($("fEsp"),  ESP,  "Seleccione");
$("fAnio").innerHTML = "<option value=''>Seleccione</option>" +
  Array.from({length:12},(_,i)=>2026-i).map(a=>`<option>${a}</option>`).join("");

let modo = "filtros";
document.querySelectorAll(".tab").forEach(t => t.onclick = () => {
  modo = t.dataset.t;
  document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("on",x===t));
  $("pFiltros").hidden = modo!=="filtros";
  $("pCodigo").hidden  = modo!=="codigo";
  $("busqMsg").textContent = "";
});
document.querySelectorAll("[data-ej]").forEach(b => b.onclick = () => {
  b.dataset.ej.split("-").forEach((v,i) => $("c"+(i+1)).value = v);
});

$("formBusq").onsubmit = e => {
  e.preventDefault();
  const m = $("busqMsg"); m.className = "msg"; m.textContent = "";

  // Validar captcha
  if ($("capIn").value.trim().toLowerCase() !== capTxt) {
    m.textContent = "El codigo de confirmacion es incorrecto.";
    return nuevoCaptcha();
  }

  // Parte es OPCIONAL. Si se escribe, minimo 3 letras
  const parteRaw = $("fParte").value.trim();
  const parte    = norm(parteRaw);
  if (parteRaw.length > 0 && parte.length < 3) {
    return m.textContent = "Si escribes la parte, usa al menos 3 letras.";
  }

  // Construir filtro segun modo
  let f;
  if (modo === "filtros") {
    const numVal = $("fNum").value.trim();
    if (!numVal) return m.textContent = "Ingresa al menos el N° de Expediente (*).";
    const num     = numVal.padStart(5, "0");
    const distVal = $("fDist").value;
    const instVal = $("fInst").value;
    const espVal  = $("fEsp").value;
    const anioVal = $("fAnio").value;
    f = x =>
      x.sec === num &&
      (!distVal || x.dist === DIST[distVal]) &&
      (!instVal || x.inst === instVal) &&
      (!espVal  || x.esp  === espVal)  &&
      (!anioVal || x.anio === anioVal);
  } else {
    // Modo codigo: detectar si pegaron el codigo completo en c1
    const c1 = $("c1").value.trim();
    if (c1.includes("-") && c1.split("-").length === 7) {
      c1.split("-").forEach((v, i) => $("c" + (i + 1)).value = v);
    }
    const v = [1,2,3,4,5,6,7].map(i => $("c"+i).value.trim().toUpperCase());
    if (v.some(x => !x)) return m.textContent = "Completa los 7 campos del codigo.";
    f = x => x.codigo === v.join("-");
  }

  // Filtrar expedientes
  const r = DB_EXPS.filter(x => {
    if (!f(x)) return false;
    if (parte.length >= 3) {
      return x.partes.some(p => {
        const texto = norm((p.nombres||"")+" "+(p.apellidoPaterno||"")+" "+(p.apellidoMaterno||""));
        return texto.includes(parte);
      });
    }
    return true; // sin parte: muestra todos los que coincidan con el filtro
  });

  if (!r.length) m.textContent = "No se encontraron expedientes. Verifica los datos ingresados.";
  mostrarResultados(r);
  nuevoCaptcha();
};

/* ===== TABLA DE RESULTADOS ===== */
function mostrarResultados(r) {
  const R=$("resultados"); R.hidden=false;
  $("detalleExp").hidden = true;
  if (!r.length) {
    R.innerHTML="<h3>Resultados</h3><p class='vacio'>No se encontraron expedientes. Verifica el codigo, anio, especialidad y la parte.</p>";
    return;
  }
  R.innerHTML = `<h3>Resultados (${r.length})</h3>
    <table><tr><th>Expediente</th><th>Organo</th><th>Materia</th><th>Estado</th></tr>` +
    r.map((x,i)=>`<tr>
      <td><button class="link-exp" data-i="${i}">${x.codigo}</button></td>
      <td>${INST[x.inst]||x.inst}<br><small>${ESP[x.esp]||x.esp}</small></td>
      <td>${x.reporte.materia}</td>
      <td><span class="badge-estado">${x.reporte.estado}</span></td>
    </tr>`).join("") + "</table>";
  R.querySelectorAll(".link-exp").forEach(b => b.onclick = () => mostrarDetalle(r[b.dataset.i]));
  R.scrollIntoView({behavior:"smooth"});
}

/* ===== VISTA DETALLE (estilo capturas) ===== */
let paginaActual = 1, actsPorPag = 3, expActual = null;

function mostrarDetalle(x) {
  expActual = x;
  paginaActual = 1;
  const D = $("detalleExp"); D.hidden = false;
  const rp = x.reporte, pr = x.progreso;

  // ---- CASE REPORT ----
  $("det-codigo").textContent = x.codigo;
  $("det-organo").textContent = rp.organoJurisdiccional;
  $("det-juez").textContent   = rp.juez;
  $("det-fechaIni").textContent = rp.fechaInicio;
  $("det-obs").textContent    = rp.observacion;
  $("det-materia").textContent= rp.materia;
  $("det-etapa").textContent  = rp.etapaProcesal;
  $("det-ubicacion").textContent = rp.ubicacion;
  $("det-sumilla").textContent= rp.sumilla;
  $("det-distrito").textContent = rp.distritoJudicial;
  $("det-especialista").textContent = rp.especialistaLegal;
  $("det-proceso").textContent= rp.proceso;
  $("det-especialidad").textContent = rp.especialidad;
  $("det-estado").textContent = rp.estado;
  $("det-fechaFin").textContent = rp.fechaConclusion || "—";
  $("det-motivo").textContent = rp.motivoConclusion || "—";

  // ---- PROGRESO ----
  $("det-progreso-bar").style.width = pr.porcentaje + "%";
  $("det-progreso-pct").textContent = pr.porcentaje + "%";
  $("det-progreso-msg").textContent = pr.mensaje;
  renderEtapas(pr.etapas);
  renderHitos(pr.hitos);

  // ---- PARTES ----
  renderPartes(x.partes);

  // ---- ACTUACIONES ----
  renderActuaciones(x.actuaciones);

  D.scrollIntoView({behavior:"smooth"});
}

function renderEtapas(etapas) {
  $("det-etapas").innerHTML = etapas.map(e=>`
    <div class="etapa-item ${e.estado}">
      <div class="etapa-icon">${e.estado==="done"?"✔":e.estado==="current"?"▶":"○"}</div>
      <div class="etapa-info">
        <b>${e.nombre}</b>${e.estado==="current"?'<span class="badge-current">ETAPA ACTUAL</span>':''}
        <small>${e.desc}</small>
      </div>
    </div>`).join("");
}

function renderHitos(hitos) {
  $("det-hitos").innerHTML = hitos.map(h=>`
    <div class="hito-item">
      <div class="hito-dot"></div>
      <div class="hito-info">
        <b>${h.descripcion}</b>
        <small>${h.fecha}</small>
      </div>
    </div>`).join("");
}

function renderPartes(partes) {
  $("det-partes").innerHTML = partes.map(p=>`
    <tr>
      <td>${p.rol}</td>
      <td>${p.tipoPers}</td>
      <td>${p.apellidoPaterno||"—"}</td>
      <td>${p.apellidoMaterno||"—"}</td>
      <td>${p.nombres||p.apellidoPaterno}</td>
    </tr>`).join("");
}

/* ===== VISOR PDF INTEGRADO ===== */
async function abrirVisorPdf(url, titulo) {
  if (!url) {
    alert("El documento digitalizado aun no se encuentra disponible.");
    return;
  }
  let finalUrl = url.trim();

  // Si es un PDF subido localmente desde el Administrador
  if (finalUrl.startsWith("idb:")) {
    try {
      if (window.obtenerPdfLocal) {
        const item = await window.obtenerPdfLocal(finalUrl);
        if (item && item.blob) {
          finalUrl = URL.createObjectURL(item.blob);
        }
      }
    } catch (err) {
      console.error("Error al cargar PDF local:", err);
    }
  } else {
    // Convertir enlaces compartidos de Google Drive al formato de visor integrado /preview
    const driveMatch = finalUrl.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (driveMatch) {
      finalUrl = "https://drive.google.com/file/d/" + driveMatch[1] + "/preview";
    }
  }

  $("pdfModalTitle").textContent = titulo || "Visor de Documento";
  $("pdfModalIframe").src = finalUrl;
  $("pdfModalLinkExt").href = finalUrl;
  $("modalPdf").hidden = false;
  document.body.style.overflow = "hidden";
}

function cerrarVisorPdf() {
  $("modalPdf").hidden = true;
  $("pdfModalIframe").src = "";
  document.body.style.overflow = "";
}
window.abrirVisorPdf = abrirVisorPdf;
window.cerrarVisorPdf = cerrarVisorPdf;

$("btnCerrarPdf").onclick = cerrarVisorPdf;
$("modalPdf").addEventListener("click", e => {
  if (e.target === $("modalPdf")) cerrarVisorPdf();
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !$("modalPdf").hidden) cerrarVisorPdf();
});

function renderActuaciones(acts) {
  const total     = acts.length;
  const totalPags = Math.ceil(total / actsPorPag);
  const inicio    = (paginaActual - 1) * actsPorPag;
  const pagina    = acts.slice(inicio, inicio + actsPorPag);

  $('det-acts').innerHTML = pagina.map(a => {
    // Cedulas / notificaciones
    const cedulasHTML = (a.cedulas || []).map(c => `
      <div class="notif-card">
        <div class="notif-hdr"><span class="notif-tipo">| NOTIFICACION CEDULA ${c.numero} - <b>${c.parte}</b></span></div>
        <div class="notif-body">
          <div class="notif-left">
            <div class="notif-row"><span>Destinatario:</span> <b>${c.destinatario}</b></div>
            <div class="notif-row"><span>Fecha de envio:</span> ${c.fechaEnvio}</div>
          </div>
          <div class="notif-right">
            <div class="notif-row"><span>Forma de entrega:</span> <b>${c.formaEntrega || 'CASILLA ELECTRONICA'}</b></div>
            <div class="notif-btns">
              <button type="button" class="btn-notif-det" onclick="alert('Detalle de Cedula N° ${c.numero}\nDestinatario: ${c.destinatario}\nFecha de envio: ${c.fechaEnvio}\nEntrega: ${c.formaEntrega || 'CASILLA ELECTRONICA'}')">DETALLES 🔍</button>
              ${c.pdfUrl
                ? `<button type="button" class="btn-notif-doc" onclick="abrirVisorPdf('${c.pdfUrl}', 'CEDULA ${c.numero} - ${c.parte}')">VER CEDULA 🖨</button>`
                : `<button type="button" class="btn-notif-doc-off" disabled title="Cedula no digitalizada">VER CEDULA 🖨</button>`}
            </div>
          </div>
        </div>
      </div>`).join('');

    // Botones de documentos
    let btnDoc = '';
    if (a.docs && a.docs.length > 0) {
      btnDoc = '<div style="display:flex;gap:8px;flex-wrap:wrap;margin:6px 0">' +
        a.docs.map(d => `<button type="button" class="btn-ver-doc" onclick="abrirVisorPdf('${d.url}', '${a.acto} - ${d.label}')">VER ${d.label.toUpperCase()} 🖨</button>`).join('') +
        '</div>';
    } else if (a.pdfUrl) {
      btnDoc = `<button type="button" class="btn-ver-doc" onclick="abrirVisorPdf('${a.pdfUrl}', '${a.acto}')">VER DOCUMENTO 🖨</button>`;
    } else {
      btnDoc = `<button type="button" class="btn-ver-doc-off" disabled title="Documento no disponible">VER DOCUMENTO 🖨</button>`;
    }

    return `
    <div class="act-card">
      <span class="act-num">N° ${a.numero}</span>
      <div class="act-body">
        <div class="act-top">
          <span><b>Fecha/Resolucion:</b> ${a.fecha}</span>
          <span><b>Acto:</b> ${a.acto}</span>
        </div>
        <div class="act-sumilla-block">
          <div class="act-sumilla-label">≡ Sumilla:</div>
          <div class="act-sumilla-txt">${a.sumilla}</div>
        </div>
        <div class="act-resp">Usuario Responsable: <b>${a.responsable}</b></div>
        ${btnDoc}
        ${cedulasHTML}
      </div>
    </div>`;
  }).join('');

  let pags = `<button class="pag-btn" ${paginaActual===1?'disabled':''} data-p="1">Inicio</button>`;
  pags    += `<button class="pag-btn" ${paginaActual===1?'disabled':''} data-p="${paginaActual-1}">&#8249;</button>`;
  for (let i = 1; i <= totalPags; i++)
    pags += `<button class="pag-btn ${i===paginaActual?'active':''}" data-p="${i}">${i}</button>`;
  pags    += `<button class="pag-btn ${paginaActual===totalPags?'disabled':''} data-p="${paginaActual+1}">&#8250;</button>`;
  $('det-paginacion').innerHTML = pags;
  $('det-paginacion').querySelectorAll('.pag-btn:not([disabled])').forEach(b =>
    b.onclick = () => { paginaActual = parseInt(b.dataset.p); renderActuaciones(expActual.actuaciones); }
  );
}

/* ===== ENLACE A PANEL DE ADMINISTRACIÓN (admin.html) ===== */
if ($("btnAdmin")) {
  $("btnAdmin").onclick = e => {
    // Abre admin.html en una nueva ventana/pestaña limpia
    window.open("admin.html", "_blank");
  };
}

/* ===== CHATBOT ===== */
const KB=[
  [["paz letrado","jp"],"El Juzgado de Paz Letrado (JP) es de primera instancia y conoce procesos de alimentos, menor cuantia y civiles de cuantia reducida."],
  [["especializado","jr"],"El Juzgado Especializado (JR) conoce procesos de mayor complejidad y resuelve apelaciones de los Juzgados de Paz Letrados."],
  [["sala superior","sp","apelacion"],"La Sala Superior (SP) es segunda instancia: revisa por apelacion las decisiones de los Juzgados Especializados."],
  [["codigo de expediente","formato","numero de expediente"],"El codigo tiene 7 partes: Secuencia(5)-Anio(4)-Organo(1)-Distrito(4)-Instancia(2)-Especialidad(2)-Correlativo(2). Ej: 00203-2025-0-2101-JP-FC-01."],
  [["alimentos","29497","beneficios"],"Alimentos: Ley 27337 (Codigo Ninos y Adolescentes). Deudores morosos: REDAM (Ley 28970)."],
  [["penal","957"],"El proceso penal se rige por el Nuevo Codigo Procesal Penal (D.Leg. 957), modelo acusatorio."],
  [["hola","buenas"],"Hola. Preguntame sobre juzgados, expedientes o leyes peruanas."]
];
const DOMINIO=["juzgad","juez","sala","ley","codigo","expediente","proceso","demanda","sentencia","judicial","instancia","derecho"];
function botDi(t,u){const d=document.createElement("div");d.className="m "+(u?"u":"b");d.textContent=t;$("botMsgs").append(d);$("botMsgs").scrollTop=1e6;}
$("botFab").onclick  = ()=>$("bot").hidden = !$("bot").hidden;
$("botX").onclick    = ()=>$("bot").hidden = true;
$("navAyuda").onclick= e=>{ e.preventDefault(); $("bot").hidden=false; };
$("botForm").onsubmit= e=>{
  e.preventDefault(); const q=$("botIn").value.trim(); if(!q) return; $("botIn").value=""; botDi(q,1);
  const n=" "+q.toLowerCase()+" ";
  const hit=KB.find(([ks])=>ks.some(k=>k.length<=2?new RegExp(`\\b${k}\\b`).test(n):n.includes(k)));
  setTimeout(()=>botDi(hit?hit[1]+"\n\nInformacion referencial.":
    DOMINIO.some(d=>n.includes(d))?"No tengo ese dato. Consulta sobre juzgados, expedientes o leyes.":
    "Solo respondo sobre juzgados y expedientes."),350);
};

/* ===== INICIO ===== */
cargarDB();
