import {api} from "../../utils/api";

export const useConvalida = () => {
    const createConvalida = async (convalida: any, studentInfo: any): Promise<any> => {
        const { data: { data: dataRaw } } = await api.post('/convalidas', {
            data: convalida,
        });
  
        return {
            ...dataRaw.attributes,
            id: dataRaw.id,
        };
    };

    return {
        createConvalida
    };
}