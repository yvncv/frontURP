import { Button, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { useCatalogs } from "../../hooks/catalog/useCatalogs";
import { Catalog } from "../../types/Catalog";
import React, { FormEvent, useEffect, useMemo, useState } from "react";
import { AnyMxRecord } from "dns";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
//@ts-ignore
import DatePicker from 'react-datepicker';
//import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSalonConferencia } from "../../hooks/salonConferencia/useSalonConferencia";

//@ts-ignore
function formatearFecha(fechaOriginal) {
  const fecha = new Date(fechaOriginal);
  fecha.setDate(fecha.getDate() + 1);
  const dia = fecha.getDate();
  const mes = fecha.toLocaleDateString('es-ES', { month: 'long' });
  const anio = fecha.getFullYear();

  return `${dia} de ${mes}`;
}
const schema = yup.object().shape({
  id: yup.number().required(''),
 
  tema_conferencia: yup.string().required('El tema de la conferencia es requerido'),
  descripcion: yup.string().required('La descripción es requerida'),
  expositor: yup.string().required('El expositor es requerido'),
  salon: yup.number().required('Seleccione un salón'),
  fecha: yup.date().required('Seleccione una fecha'),
  hora: yup.string().required('Seleccione una hora'),
});
const horasDelDia = [
  {
      horaLabel: "2:00 PM",
      horaValue: "02:00:00.000",
  },
  {
      horaLabel: "3:00 PM",
      horaValue: "03:00:00.000",
  },
  {
      horaLabel: "4:00 PM",
      horaValue: "04:00:00.000",
  },
  {
      horaLabel: "5:00 PM",
      horaValue: "05:00:00.000",
  },
  {
      horaLabel: "6:00 PM",
      horaValue: "06:00:00.000",
  },
  {
      horaLabel: "7:00 PM",
      horaValue: "07:00:00.000",
  },
  {
      horaLabel: "8:00 PM",
      horaValue: "08:00:00.000",
  },
  {
      horaLabel: "9:00 PM",
      horaValue: "09:00:00.000",
  },
];
//@ts-ignore
const CatalogModalEditar = ({ estado, cambiarEstado,catalogo,setCatalogo}) => {
  const router = useRouter();
  const { catalogs, removeCatalog, setEditedCatalog, onUpdateCatalog, enabledCatalog } =
    useCatalogs();

    const { register, handleSubmit, formState: { errors }, setValue, trigger } = useForm<Catalog>({
      resolver: yupResolver(schema),
    });
    const [selectedDate, setSelectedDate] = useState(new Date());   
    const [salonId, setSalonId] = useState<number>(0);

    const { SalonConferencia, getSalonConferencia } = useSalonConferencia();
    
  const goToCreatePage = () => router.push("solicitudes/solicitar-conferencia");
  

  const handlesetEditedCatalog = async (catalog: Catalog) => {
    await setEditedCatalog(catalog);
  };
  const handleonUpdateCatalog = async (catalog: Catalog) => {
    await onUpdateCatalog(catalog);
  };
  const diasNoHabiles = useMemo(() => {

    const dias = catalogs.reduce((acc: Record<number, Date[]>, catalogs) => {
        const salonId = catalogs.salon?.data?.id;
            if(salonId){
                const fecha = new Date(new Date(catalogs.fecha).toLocaleString('en', { timeZone: 'UTC' }))
                if (acc[salonId]) {
                    acc[salonId] = acc[salonId].concat(fecha);
                    return acc;
                }
                acc[salonId] = [fecha]
            }
            return acc
    }, {})
    console.log(dias);
    return dias

}, [catalogs])

  const handleOnSubmit = async (data: any) => {
    const isValid = await trigger(); // Este método activará todas las validaciones y devolverá un booleano
    if (isValid) {
    const editedCatalog = {
        ...data,
    };
    await setEditedCatalog(editedCatalog);
    await onUpdateCatalog(editedCatalog);
    cambiarEstado(false);
  };
  }

  useEffect(() => {
    setValue('id', catalogo?.id)
    setValue('tema_conferencia', catalogo?.tema_conferencia)
    setValue('descripcion', catalogo?.descripcion)
    setValue('expositor', catalogo?.expositor)
    setValue('salon', catalogo?.salon)
    setValue('fecha', catalogo?.fecha)
    setValue('hora', catalogo?.hora)
}, [catalogo]);


useEffect(() => {
  const fetchData = async () => {
      try {
          await getSalonConferencia();
      } catch (error) {
          console.error('Error al obtener los datos:', error);
      }
  };
  fetchData();
}, []);

  return (
    <>
      {estado && (
        <div className="overlay">
          <div className="contenido-modal">
            <div className="encabezado-modal">
              <h3>Editar Solicitud</h3>
            </div>
            <button
              className="boton-cerrar"
              onClick={() => cambiarEstado(false)}
            >
              <img src="\close-solid.svg" alt="close" />
            </button>
            <div className="contenido">
              <Form onSubmit={handleSubmit(handleOnSubmit)}>
                {/* ...otros campos */}
                <Form.Group className="form-group mb-3">
                            <Form.Label>Tema de la conferencia</Form.Label>
                            <Form.Control  type="text" {...register("tema_conferencia")}/>
                            {errors.tema_conferencia && (
                                <Form.Text className='text-danger'>
                                    {errors.tema_conferencia.message}
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group className="form-group mb-3">
                            <Form.Label>Descripcion</Form.Label>
                            <Form.Control type="text" {...register("descripcion")} />
                            {errors.descripcion && (
                                <Form.Text className='text-danger'>
                                    {errors.descripcion.message}
                                </Form.Text>
                            )}
                        </Form.Group>
                        <Form.Group className="form-group mb-3">
                            <Form.Label>Expositor</Form.Label>
                            <Form.Control type="text" {...register("expositor")} />
                            {errors.expositor && (
                                <Form.Text className='text-danger'>
                                    {errors.expositor.message}
                                </Form.Text>
                            )}
                        </Form.Group>

                        <Form.Group className="form-group mb-3">
                            <Form.Label style={{ fontWeight: 'bold' }}>Salón</Form.Label>
                            <Form.Select onChange={event => {
                                setValue('salon', event.target.value)
                                setSalonId(Number(event.target.value));
                            }}>
                                <option>Seleccionar</option>
                                {SalonConferencia.map((salon) => {
                                    console.log(salon); // Mueve el console.log aquí para que se ejecute correctamente
                                    return (
                                        <option key={salon.id} value={salon.id}>
                                            {salon.attributes.nombre}
                                        </option>
                                    );
                                })}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="form-group mb-3">
                            <Form.Label style={{ fontWeight: 'bold' }} >Fecha</Form.Label>
                            <DatePicker 
                                minDate={new Date()}
                                excludeDates={diasNoHabiles[salonId] || []}
                                className="date-picker"
                                selected={selectedDate} 
                                onChange={(date: Date) => {setSelectedDate(date);
                                    setValue('fecha', date)}}
                            
                                dateFormat="dd/MM/yyyy" 
                                />
                            {errors.fecha && (
                                <Form.Text className='text-danger'>
                                    {errors.fecha.message}
                                </Form.Text>
                            )}
                            
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontWeight: 'bold' }}>Hora</Form.Label>
                            <select style={{ borderColor: 'green' }} {...register("hora")}>
                                <option value="" disabled>
                                    Seleccionar
                                </option>
                                {horasDelDia.map((hora, index) => (
                                    <option key={index} value={hora.horaValue}>
                                        {hora.horaLabel}
                                    </option>
                                ))}
                            </select>
                            {errors.hora && (
                                <Form.Text className='text-danger'>
                                    {errors.hora.message}
                                </Form.Text>
                            )}
                        </Form.Group>

                <div className="seccion-botones">
                  <div className="botones-modal">
                    <Button variant="primary" type="submit" onClick={handleSubmit(handleOnSubmit)}>
                      Guardar cambios
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
  
    </>
  );
  
};

export default CatalogModalEditar;