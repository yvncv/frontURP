import { ResponsivePage } from "../components/ResponsivePage";
import Link from "next/link";
import { useCatalogs } from "../hooks/catalog/useCatalogs";
import { CatalogCardInscrito } from "../components/CatalogCardInscrito";

const VerCatalogo = () => {
  const { catalogs } = useCatalogs(); // Usar "catalogs" en lugar de "catalogsClient"

  // Filtrar las conferencias disponibles
  const misConferencias = catalogs.filter((catalog) => catalog.miconf);
  
  return (
    <ResponsivePage>
      <div className="container mt-3 mb-4 header-mis-conferencias">
        <h2>Repositorio de conferencias</h2>
        <Link href="/mis-conferencias"><img src="\icon-forward.svg" alt="search" /></Link>
      </div>

      <div className="container contenedor-proximos">
        <div
          className="contenedor-catalogo"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 20rem), 1fr))",
            columnGap: "35px",
            rowGap: "25px",
            marginTop: "20px",
          }}
        >
          {misConferencias.map((catalog) => (
            <CatalogCardInscrito key={catalog.id} catalog={catalog} /> // Usar "catalog.id" como clave
          ))}
        </div>
      </div>
    </ResponsivePage>
  );
};

export default VerCatalogo;