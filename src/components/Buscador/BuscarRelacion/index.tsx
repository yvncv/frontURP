import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useCatalogs } from "../../../hooks/catalog/useCatalogs";
import { CatalogRow } from "../../CatalogCard/tablecatalog";

export const BuscadorRelacion = () => {
  const [conferencias, setConfe] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const { catalogs } = useCatalogs();

  useEffect(() => {
    setConfe(catalogs);
  }, [catalogs]);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = catalogs.filter((catalog) => {
      return (
        catalog.tema_conferencia
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        catalog.expositor
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        (catalog.dirigido &&
          catalog.dirigido
            .toString()
            .toLowerCase()
            .includes(terminoBusqueda.toLowerCase())) ||
        (catalog.salon.data?.attributes?.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()))
      );
    });
    setConfe(resultadosBusqueda);
  };

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
          placeholder="Buscar conferencia por tema, expositor, escuela, auditorio..."
          onChange={handleChange}
        />
      </div>

      <div className="container contenedor-proximos">
        {conferencias.map((catalog) => (
            <CatalogRow key={catalog.id} catalog={catalog} />
          ))}
      </div>
    </div>
  );
};
