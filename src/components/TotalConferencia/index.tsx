import {useResponsivePageContext} from "../ResponsivePage/context";
import { ResponsivePage } from "../ResponsivePage";
import { useCatalogs } from "../../hooks/catalog/useCatalogs";
import Link from "next/link";

export const TotalConferencia = () => {
    const { user } = useResponsivePageContext();
    console.log(user);
    const { catalogs } = useCatalogs();
    let totalConferencia = 0;
    if (user?.escuela == "Ingeniería Informática"){
        totalConferencia = 40;
    }
    const misConferencias = catalogs.filter((catalog) => catalog.miconf);
    let actualConferencia = misConferencias.length;
    const progressBarStyles = {
      '--value': actualConferencia  * 100 / totalConferencia
    };
    return(
            <div className="seccion-mis-conferencias excepcion">
                    <div role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="40" style={progressBarStyles}>
                        <img className="img-excepcion" src="\icon-total-conferencias.png" alt="conferencias" />
                    </div>
                    <h1>{actualConferencia}</h1>
                    <h2>Total Conferencias</h2>
                    <Link href="/proximas-conferencias">Inscribirse</Link>
            </div>
    );
}
