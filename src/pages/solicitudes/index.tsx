import { ResponsivePage } from "../../components/ResponsivePage";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useCatalogs } from "../../hooks/catalog/useCatalogs";
import CatalogModal from "../../components/CatalogEditarSolicitud";
import { Catalog } from "../../types/Catalog";
import React, { useEffect, useState } from "react";

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


    const [estadoModal, cambiarEstadoModal] = useState(false);
    const [catalogElement, setCatalogElement] = useState<Catalog>();
    
    // useEffect to fetch data when the component mounts
     useEffect(() => {
        
    }, [estadoModal]);

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
                            <th scope="col">Fecha</th>
                            <th scope="col">Salón</th>
                            <th scope="col">Estado de solicitud</th>
                            <th scope="col" />
                        </tr>
                    </thead>
                    <tbody>
                        {catalogs.length > 0 && catalogs.map(catalog => {
                            console.log(catalog);
                            return (

                                <tr key={`catalog-${catalog.id}`}>
                                    <td>{catalog.id}</td>
                                    <td>{catalog.tema_conferencia}</td>
                                    <td>{catalog.fecha ? new Date(catalog.fecha).toLocaleDateString('es-PE', { timeZone: 'UTC' }) : ""}</td>
                                    <td>{catalog?.salons && catalog.salons.data.length > 0 ? catalog?.salons.data?.[0].attributes.nombre : ""}</td>
                                    <td>{catalog.disponible ? 'Aprobado' : 'Rechazado'}</td>
                                    <td>
                                        <Button
                                            className="bi bi-pencil custom-button"
                                            onClick={() => {
                                                cambiarEstadoModal(!estadoModal);
                                                setCatalogElement(catalog);
                                            }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                                                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                            </svg>
                                        </Button>

                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <CatalogModal
                    estado={estadoModal}
                    cambiarEstado={cambiarEstadoModal}
                    catalogo={catalogElement}
                    setCatalogo={setCatalogElement}
                />
            </div>
        </ResponsivePage>
    );
};

export default Catalogo;
