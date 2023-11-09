import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import { Convalida } from "../../types/Convalida";

export const useConvalidas = () => {
    const [users, setUsers] = useState<Convalida[]>([]);

    const createConvalida = async (data: Convalida): Promise<boolean> => {
         const response = await api.post('/convalidars', {
                 ...data,
                 tema_conferencia:data.tema_conferencia,
                 nombre_institucion: data.nombre_institucion,
                 ubicacion: data.ubicacion,
         }).catch(response => {
             return response.response;
         });

        if (response.data?.error) {
            const { details: { errors } } = response.data.error;


            return false;
        }

         await getUsers();

         return response.status === 200;
    };


    const getUsers = async () => {
        const { data } = await api.get('/users');

        setUsers(data);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return {
        users,
        createConvalida,
       
    };
};
