import {api} from "../../utils/api";
import {convalidar} from"../../types/valido";
import {useEffect, useState} from "react";
export const useValids = () => {
    const [users, setUsers] = useState<convalidar[]>([]);

    const createValidacion = async (data: convalidar): Promise<boolean> => {
         const response = await api.post('/convalidars', {
                 ...data,
                 nombre:data.nombre,
                 institucion: data.institucion,
                 ubicacion: data.ubicacion,
         }).catch(response => {
             return response.response;
         });

        if (response.data?.error) {
            const { details: { errors } } = response.data.error;

            for (const { path, message } of errors) {
                if (path.includes('dni') && message.includes('unique')) {
                    alert('Este DNI ya se encuentra registrado por otro usuario');
                }
            }

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
        createValidacion,
       
    };
};