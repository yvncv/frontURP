import { ResponsivePage } from "../components/ResponsivePage";
import Link from "next/link";
import CatalogsRepo from "../components/CatalogsRepo";
import { BuscadorRepo } from "../components/Buscador/BuscadorRepo";

const VerCatalogo = () => {
  return (
    <ResponsivePage> 
      <div className="container mt-3 mb-4 header-mis-conferencias">
        <h2>Repositorio de conferencias</h2>
        <Link href="/mis-conferencias"><img src="\icon-forward.svg" alt="search" /></Link>
      </div>

        <BuscadorRepo/>
    </ResponsivePage>
  );
};

export default VerCatalogo;