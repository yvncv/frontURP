import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useCatalogs } from "../../hooks/catalog/useCatalogs";
import { Catalog } from "../../types/Catalog";
import { CatalogCardInscrito } from "../CatalogCardInscrito";
import { CatalogCard } from "../CatalogCard";

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

  const filtrar = (terminoBusqueda: any) => {
    var resultadosBusqueda = catalogs.filter((catalog) => {
      if (
        catalog.tema_conferencia
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        catalog.expositor
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
        //   ||
        // catalog.dirigido
        //   .toString()
        //   .toLowerCase()
        //   .includes(terminoBusqueda.toLowerCase()) ||
        //   catalog.salon
        //   .toString()
        //   .toLowerCase()
        //   .includes(terminoBusqueda.toLowerCase()) ||
        // catalog.fecha
        //   .toString()
        //   .toLowerCase()
        //   .includes(terminoBusqueda.toLowerCase())
      ) {
        return catalog;
      }
    });
    setConfe(resultadosBusqueda);
  };

  useEffect(() => {
    filtrar(busqueda);
  }, [busqueda, catalogs]);

  return (
    <div className="contenedor-buscador-confes">
      <div className="contenedor-input">
        <input
          className="inputBuscar"
          value={busqueda}
          placeholder="Buscar conferencia por tema, expositor, escuela, auditorio, fecha..."
          onChange={handleChange}
        />
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faSearch} />
        </button>
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
            {/* para próximas conferencias */}
          {conferencias.map((catalog) => (
            <CatalogCard key={catalog.id} catalog={catalog} />
          ))}

             {/* para repositorio 
          {conferencias.map((catalog) => (
            <CatalogCardInscrito key={catalog.id} catalog={catalog} />
          ))}*/} 
        </div>
      </div>
    </div>
  );
};
