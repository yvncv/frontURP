import { ResponsivePage } from "../components/ResponsivePage";
import { useCatalogs } from "../hooks/catalog/useCatalogs";
import { CatalogCard } from "../components/CatalogCard";
import Link from "next/link";
import { BuscadorProximas } from "../components/Buscador/BuscadorProximas";

const VerCatalogo = () => {
  const { catalogs } = useCatalogs(); // Usar "catalogs" en lugar de "catalogsClient"
  
  return ( 
    <ResponsivePage>
      <div className="container mt-3 mb-4 header-mis-conferencias">
        <h2>Próximas conferencias disponibles</h2>
        <Link href="/mis-conferencias"><img src="\icon-forward.svg" alt="search" /></Link>
      </div>
      <BuscadorProximas/>
    </ResponsivePage>
  );
};

export default VerCatalogo;
