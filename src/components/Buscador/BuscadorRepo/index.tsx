import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useCatalogs } from "../../../hooks/catalog/useCatalogs";
import { Catalog } from "../../../types/Catalog";
import { CatalogCardInscrito } from "../../CatalogCardInscrito";
import { useResponsivePageContext } from "../../ResponsivePage/context";

// USAR:
// npm i bootstrap axios
// npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

export const BuscadorRepo = () => {
  const [conferencias, setConfe] = useState<Catalog[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const { user } = useResponsivePageContext();
  let opcionSeleccionada = "";

  const { catalogs } = useCatalogs();
  const conferenciasDisponibles = catalogs.filter(catalog => catalog.disponible);


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
          .includes(terminoBusqueda.toLowerCase()) ||
        catalog.dirigido
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

  const handleChange2 = (e: any) => {
    opcionSeleccionada = e.target.value;
    console.log(opcionSeleccionada);
    filtrarCombo();
  };

  const filtrarCombo = () => {
    var resultadosBusqueda = conferenciasDisponibles.filter((catalog) => {
      const fecha = new Date();
      const fechaConferencia = new Date(catalog.fecha);
      fechaConferencia.setDate(fechaConferencia.getDate() + 1);
      console.log(user?.codigo);
      let flag = false;
      //NO FUNCIONA EL NO ASISTIO, FALTA VALIDARLO BIEN
      // FALTA HACER UN ELIMINAR FILTROS
      if(opcionSeleccionada == "Asistió"){
        flag = catalog.inscripciones.some(inscripcion => (inscripcion.asistencia === "Sí" && inscripcion.codigo == user?.codigo && opcionSeleccionada == "Asistió"));
        return flag;
      }
      else if(opcionSeleccionada == "No asistió"){
        flag = catalog.inscripciones.some(inscripcion => ((inscripcion.codigo != user?.codigo && fechaConferencia < fecha && inscripcion.asistencia == "No")));
        return flag;
      }
      else if(opcionSeleccionada == "Pendiente"){
        flag = catalog.inscripciones.some(inscripcion => (fechaConferencia > fecha))
        return flag;
      }
    });
    console.log(resultadosBusqueda);
    setConfe(resultadosBusqueda);
  }


  return (
    <div className="contenedor-buscador-confes">
      <div className="contenedor-input">
        <button className="botonBuscador">
          <FontAwesomeIcon icon={faSearch} />
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
          <select id="asistencia" value={opcionSeleccionada} onChange={handleChange2}>
            <option value="1">Filtrado por asistencia</option>
            <option value="Asistió">Asistió</option>
            <option value="Pendiente">Pendiente</option>
            <option value="No asistió">No asistió</option>
          </select>
        </div>
        <div className="filtrado-comboBox-seccion">
          <select id="carrera" value={opcionSeleccionada} onChange={handleChange2}>
            <option value="1">Filtrado por carrera</option>
            <option value="2">Ingeniería Informática</option>
            <option value="3">Ingeniería Industrial</option>
            <option value="4">Ingeniería Civil</option>
          </select>
        </div>
        <div className="filtrado-comboBox-seccion">
          <select id="tiempo" value={opcionSeleccionada} onChange={handleChange2}>
            <option value="1">Filtrado por tiempo</option>
            <option value="2">Este año</option>
            <option value="3">Este mes</option>
            <option value="4">Esta semana</option>
          </select>
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
