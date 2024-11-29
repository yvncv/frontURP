import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useCatalogs } from "../../../hooks/catalog/useCatalogs";
import { CatalogRow } from "../../CatalogCard/tablecatalog";

export const BuscadorRelacion = () => {
  const [conferencias, setConfe] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const iconSearch = faSearch as IconProp;
  const { catalogs } = useCatalogs();

  useEffect(() => {
    //@ts-ignore
    setConfe(catalogs);
  }, [catalogs]);
//@ts-ignore
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
//@ts-ignore
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
    //@ts-ignore
    setConfe(resultadosBusqueda);
  };

  useEffect(() => {
    filtrar(busqueda);
  }, [busqueda, catalogs]);

  return (
    <div className="contenedor-buscador-confes">
      <div className="contenedor-input">
        <button className="botonBuscador">
        <FontAwesomeIcon icon={iconSearch} />;
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
          //@ts-ignore
            <CatalogRow key={catalog.id} catalog={catalog} />
          ))}
      </div>
    </div>
  );
};
