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
    const uploadPhoto = async (files: any): Promise<boolean> => {
        const formData = new FormData();
  
        formData.append('files',files);
        formData.append('ref','api::convalida.convalida');
        formData.append('field','foto_certificado');
  
        const response = await api.post('/upload', formData, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
  
        return response.status === 200;
    }
    return {
        createConvalida,
        uploadPhoto
    };
}