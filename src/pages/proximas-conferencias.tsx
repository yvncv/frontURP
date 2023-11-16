import { ResponsivePage } from "../components/ResponsivePage";
import { useCatalogs } from "../hooks/catalog/useCatalogs";
import { CatalogCard } from "../components/CatalogCard";
import { user } from "../types/User";

const VerCatalogo = () => {
  const { catalogs } = useCatalogs(); // Usar "catalogs" en lugar de "catalogsClient"
  console.log(catalogs);

  // Filtrar las conferencias disponibles
  const fechaActual = new Date();

  function convertirStringADate(fechaString: any, hora: any) {
    const fechaObjeto = new Date(fechaString);
    fechaObjeto.setDate(fechaObjeto.getDate() + 1)
    const horaString = hora.toString();
    const date = new Date(`2000-01-01 ${horaString}`);
    fechaObjeto.setHours(date.getHours())
    fechaObjeto.setMinutes(date.getMinutes())
    fechaObjeto.setSeconds(date.getSeconds())
    return fechaObjeto;
  }

  const conferenciasDisponibles = catalogs.filter(
    (catalog) => (catalog.disponible && (convertirStringADate(catalog.fecha.toString(), catalog.hora) > fechaActual) && (convertirStringADate(catalog.fecha.toString(), catalog.hora).getTime() > fechaActual.getTime()))
  );
  return ( 
    <ResponsivePage>
      <div className="container mt-3 mb-4">
        <h2>Próximas conferencias disponibles</h2>
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
          {conferenciasDisponibles.map((catalog) => (
            <CatalogCard key={catalog.id} catalog={catalog} /> // Usar "catalog.id" como clave
          ))}
        </div>
      </div>
    </ResponsivePage>
  );
};

export default VerCatalogo;
