import { useEffect, useState } from "react";
import { Catalog } from "../../types/Catalog";
import { api } from "../../utils/api";
import { Salon } from "../../types/Salon";

export const useCatalogs = () => {
  const [catalogs, setCatalogs] = useState<Catalog[]>([]);

  const [SalonConferencia, setSalonConferencia] = useState<{ id: string; attributes:{nombre: string}; }[]>([]);

  const getSalonNombre = (salonId: string) => {
    const salon = SalonConferencia.find(salon => salon.id === salonId);
    return salon ? salon.attributes.nombre : '';
  };

  const getCatalogs = async () => {
    const { data: { data: dataRaw } } = await api.get('/catologos?populate=*');

    const catalogsMapping = dataRaw.map(({ id, attributes }: { id: number; attributes: any }) => ({
      ...attributes,
      id,
    }));

    setCatalogs(catalogsMapping);
  };

  const removeCatalog = async (catalogId: string) => {
    await api.put(`/catologos/${catalogId}`, {
      data: {
        disponible: false,
        miconf: false
      }
    });

    await getCatalogs();
  };

  const enabledCatalog = async (catalogId: string) => {
    await api.put(`/catologos/${catalogId}`, {
      data: {
        disponible: true,
        miconf: false
      }
    });

    await getCatalogs();
  };

  const myCatalog = async (catalogId: string) => {
    await api.put(`/catologos/${catalogId}`, {
      data: {
        disponible: true,
        miconf: true
      }
    });

    await getCatalogs();
  };
  const getCatalogId = async (catalogId: string) => {
    const response = await api.get(`/catologos/${catalogId}`);
    const catalogData = response.data.data.attributes;
    return catalogData;
  }
  useEffect(() => {
    getCatalogs();
  }, []);

  return {
    catalogs,
    removeCatalog,
    enabledCatalog,
    myCatalog,
    getCatalogId,
    getSalonNombre,
  };
};
