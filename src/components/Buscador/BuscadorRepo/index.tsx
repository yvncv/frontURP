import { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useCatalogs } from "../../../hooks/catalog/useCatalogs";
import { Catalog } from "../../../types/Catalog";
import { CatalogCardInscrito } from "../../CatalogCardInscrito";
import { useResponsivePageContext } from "../../ResponsivePage/context";
import { MultiSelect, Option } from "react-multi-select-component";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

// USAR:
// npm i bootstrap axios
// npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
//yarn add react-multi-select-component

export const BuscadorRepo = () => {
  
  const [conferencias, setConfe] = useState<Catalog[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const { user } = useResponsivePageContext();
  let [opcionsSeleccionadas, setOpcionsSeleccionadas] = useState<string[]>([]);

  const { catalogs } = useCatalogs();
  const conferenciasDisponibles = catalogs.filter(catalog => catalog.disponible);

  function getWeekNumber(date: any) {
    let d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    //@ts-ignore
    let weekNumber = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return weekNumber;
  }

  useEffect(() => {
    setConfe(conferenciasDisponibles);
  }, [catalogs]);

  const handleChange = (e: any) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const hoy = new Date();

  const filtrar = (terminoBusqueda: any) => {
    var resultadosBusqueda = conferenciasDisponibles.filter((catalog) => {
      let fc = catalog.fecha;
      let fechaConferencia = new Date(fc.toString());
      fechaConferencia.setDate(fechaConferencia.getDate() + 1);
      if (
        catalog.tema_conferencia
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        catalog.expositor
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
          ||
        catalog.dirigido && catalog.dirigido
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
          catalog?.salon.data?.attributes?.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        catalog.fecha
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
          (terminoBusqueda.toLowerCase() === "hoy" &&
          fechaConferencia.toLocaleDateString() == hoy.toLocaleDateString())
      ) {
        return catalog;
      }
    });
    setConfe(resultadosBusqueda);
  };

  useEffect(() => {
    filtrar(busqueda);
  }, [busqueda, catalogs]);

  const opcionesSeleccionadasRef = useRef<string[]>(opcionsSeleccionadas);
  useEffect(() => {
    opcionesSeleccionadasRef.current = opcionsSeleccionadas;
  }, [opcionsSeleccionadas]);
  
  const handleChange2 = (selectedOptions: Option[]) => {
    const selectedValues = selectedOptions.map(option => option.value);
    setOpcionsSeleccionadas(selectedValues);
    console.log(selectedValues);
    filtrarCombo(selectedValues);
  };

  const filtrarCombo = (opcionesSeleccionadas: string[]) => {
    const resultadosBusqueda = conferenciasDisponibles.filter((catalog) => {
      const fecha = new Date();
      const fechaConferencia = new Date(catalog.fecha);
      fechaConferencia.setDate(fechaConferencia.getDate() + 1);
      if (
        (opcionesSeleccionadas.includes("Asistió") &&
          catalog.inscripciones &&
          catalog.inscripciones.some(
            (inscripcion) =>
              inscripcion.asistencia === "Si" &&
              inscripcion.codigo === user?.codigo
          )) ||
        (opcionesSeleccionadas.includes("No asistió") &&
          catalog.inscripciones &&
          catalog.inscripciones.some(
            (inscripcion) =>
              (inscripcion.codigo === user?.codigo &&
                fechaConferencia < fecha &&
                inscripcion.asistencia === "No") ||
              (inscripcion.codigo !== user?.codigo &&
                fechaConferencia < fecha &&
                inscripcion.asistencia === "No")
          )) ||
        (opcionesSeleccionadas.includes("Pendiente") &&
          catalog.inscripciones &&
          catalog.inscripciones.some(
            (inscripcion) =>
              (inscripcion.codigo === user?.codigo &&
                inscripcion.asistencia === "No" &&
                fechaConferencia > fecha)
          )) ||
        (opcionesSeleccionadas.includes("Informática") &&
          catalog.dirigido === "Ingeniería informática") ||
        (opcionesSeleccionadas.includes("Industrial") &&
          catalog.dirigido === "Ingeniería industrial") ||
        (opcionesSeleccionadas.includes("Civil") &&
          catalog.dirigido === "Todas las carreras") ||
        (opcionesSeleccionadas.includes("Este año") &&
          fecha.getFullYear() === fechaConferencia.getFullYear()) ||
        (opcionesSeleccionadas.includes("Este mes") &&
          fecha.getMonth() === fechaConferencia.getMonth()) ||
        (opcionesSeleccionadas.includes("Esta semana") &&
          getWeekNumber(fecha) === getWeekNumber(fechaConferencia))
      ) {
        return true;
      }
      return false;
    });
    setConfe(resultadosBusqueda);
  };

  const opciones = [
    //asistencia
    { label: "Asistió", value: "Asistió" },
    { label: "Pendiente", value: "Pendiente" },
    { label: "No asistió", value: "No asistió" },

    //carrera  
    { label: "Informática", value: "Informática" },
    { label: "Industrial", value: "Industrial" },
    { label: "Civil", value: "Civil" },

    //fecha
    { label: "Este año", value: "Este año" },
    { label: "Este mes", value: "Este mes" },
    { label: "Esta semana", value: "Esta semana" },
  ];

  const StringAOption = (s: string) => {
    const o = new Option(s,s);
    return o;
  }
  const iconSearch = faSearch as IconProp;
  const opcionesSeleccionadas = opciones.filter(opcion => opcionsSeleccionadas.includes(opcion.value));
  return (
    <div className="contenedor-buscador-confes">
      <div className="contenedor-buscador-general">
      <div className="contenedor-input">
        <button className="botonBuscador">
        <FontAwesomeIcon icon={iconSearch} />;
        </button>
        <input
          className="inputBuscar"
          value={busqueda}
          placeholder="Buscar conferencia por tema, expositor, escuela, auditorio, fecha..."
          onChange={handleChange}
        />
      </div>
      <div className="container filtrado-comboBox">
        <div className="filtrado-comboBox-seccion">
           
              <MultiSelect
                options={opciones}
                value={opcionesSeleccionadas}
                onChange={handleChange2}
                labelledBy="Select"
              />
        </div>
      </div>
      </div>
      <div className="container contenedor-proximos">
        <div
          className="contenedor-catalogo"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 20rem), 1fr))",
            columnGap: "35px",
            rowGap: "25px",
            marginTop: "20px",
          }}
        >
          {conferencias.map((catalog) => (
            <CatalogCardInscrito key={catalog.id} catalog={catalog} />
          ))}
        </div>
      </div>
    </div>
  );
};
