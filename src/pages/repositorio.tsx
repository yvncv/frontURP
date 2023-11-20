import { ResponsivePage } from "../components/ResponsivePage";
import Link from "next/link";
import CatalogsRepo from "../components/CatalogsRepo";
import { BuscadorRepo } from "../components/BuscadorRepo";
import Image from 'next/image';

const VerCatalogo = () => {
  return (
    <ResponsivePage> 
      <div className="container mt-3 mb-4 header-mis-conferencias">
        <h2>Repositorio de conferencias</h2>
        <Link href="/mis-conferencias"><Image src="\icon-forward.svg" alt="search" /></Link>
      </div>
      <div className="container senalizacion">
        <div className="senalizacion-seccion"><Image src="/icon-check.png" alt="check" /><h6>Asistió</h6></div>
        <div className="senalizacion-seccion"><Image src="/icon-equis.png" alt="equis" /><h6>No asistió</h6></div>
        <div className="senalizacion-seccion"><Image src="/icon-clock.png" alt="clock" /><h6>Pendiente</h6></div>
      </div>
        <BuscadorRepo/>
    </ResponsivePage>
  );
};

export default VerCatalogo;