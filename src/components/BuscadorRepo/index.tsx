import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useCatalogs } from "../../hooks/catalog/useCatalogs";
import { Catalog } from "../../types/Catalog";
import { CatalogCardInscrito } from "../CatalogCardInscrito";
import { CatalogCard } from "../CatalogCard";
import CatalogsRepo from "../CatalogsRepo";

// USAR:
// npm i bootstrap axios
// npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

export const BuscadorRepo = () => {
  const [conferencias, setConfe] = useState<Catalog[]>([]);
  const [busqueda, setBusqueda] = useState("");

  const { catalogs } = useCatalogs();

  useEffect(() => {
    setConfe(catalogs);
  }, [catalogs]);

  const handleChange = (e: any) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const hoy = new Date();

  const filtrar = (terminoBusqueda: any) => {
    var resultadosBusqueda = catalogs.filter((catalog) => {
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
  //o incluid filtrar ene l array
// eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    filtrar(busqueda);
  }, [busqueda, catalogs]);

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
