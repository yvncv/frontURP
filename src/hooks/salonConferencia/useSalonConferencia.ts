import {useEffect, useState} from "react";
import {api} from "../../utils/api";
/*
interface SalonConferencia {
  id: string;
  attributes: {
    nombre: string;
  };
}*/

export const useSalonConferencia = () => {
    const [SalonConferencia, setSalonConferencia] = useState<{ id: string; attributes:{nombre: string}; }[]>([]);

    const getSalonConferencia = async () => {
      const { data } = await api.get('/salons');
      if (Array.isArray(data.data)) {
        setSalonConferencia(data.data);
      } else {
        console.error('Los datos obtenidos no son un array:', data);
      }
      //setSalonConferencia(data);
    };
    return {
        SalonConferencia,
        getSalonConferencia
    };
};