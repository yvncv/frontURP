import {ResponsivePage} from "../../components/ResponsivePage";
import {Button} from "react-bootstrap";
import {useRouter} from "next/router";
import {useCatalogs} from "../../hooks/catalog/useCatalogs";

const Catalogo = () => {
    const router = useRouter();
    const { catalogs, removeCatalog, enabledCatalog } = useCatalogs();

    const goToCreatePage = () => router.push('solicitudes/solicitar-conferencia');

    const handleRemoveCatalog = async (catalogId: string) => {
        await removeCatalog(catalogId);
    }

    const handleAddCatalog = async (catalogId: string) => {
        await enabledCatalog(catalogId);
    }

  return (
      <ResponsivePage>
          <div className='container mt-3'>
              <div className='d-flex justify-content-between'>
                  <h1 className='mb-2'>Solicitudes enviadas</h1>
                  <Button variant='success btn' onClick={goToCreatePage}>Nueva solicitud</Button>
              </div>
              <table className='table'>
                  <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Tema</th>
                      <th scope="col">Dirigido a</th>
                      <th scope="col">Salón</th>
                      <th scope="col">Estado de solicitud</th>
                      <th scope="col" />
                  </tr>
                  </thead>
                  <tbody>
                  {catalogs.length > 0 && catalogs.map(catalog => (
                      <tr key={`catalog-${catalog.id}`}>
                          <td>{catalog.id}</td>
                          <td>{catalog.tema_conferencia}</td>
                          <td>{catalog.dirigido}</td>
                          <td>{catalog.salon}</td>
                          <td>{catalog.disponible ? 'Aprobado' : 'Rechazado'}</td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>
      </ResponsivePage>
  );
};

export default Catalogo;
