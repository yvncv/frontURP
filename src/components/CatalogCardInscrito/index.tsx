import { Card } from "react-bootstrap";
import { Catalog } from "../../types/Catalog";
import { useResponsivePageContext } from "../ResponsivePage/context";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from 'next/image';
<<<<<<< HEAD
=======
const imagenPorDefecto = "https://res.cloudinary.com/dbe36qiba/image/upload/v1700542339/1_mcbxr_Q9dmg_X6v8_KA_7_Uo4nw_acc5422e6f.jpg";
>>>>>>> 1be5c294a980d49383fb3658c2dfbd8e763789c6

export const CatalogCardInscrito = ({ catalog }: { catalog: Catalog }) => {
  const { user } = useResponsivePageContext();
  const [fotoUrl, setFotoUrl] = useState("");

  let estado = '';

  const fecha = new Date();
  const fechaConferencia = new Date(catalog.fecha);
  fechaConferencia.setDate(fechaConferencia.getDate() + 1);


  if(catalog.inscripciones != null){
    catalog.inscripciones.forEach(inscripcion => {
      if(inscripcion.codigo == user?.codigo){
<<<<<<< HEAD
          if(inscripcion.asistencia == "Sí"){
=======
          if(inscripcion.asistencia == "Si"){
>>>>>>> 1be5c294a980d49383fb3658c2dfbd8e763789c6
            estado = 'Asistió';
          }
          else{
            if(fechaConferencia > fecha){
              estado = 'Pendiente';
            }
            else{
              
              estado = 'No asistió';
            }
          }
      }
      else{
        if(fechaConferencia > fecha){
          estado = 'Pendiente';
        }
        else{
          
          estado = 'No asistió';
        }
      }
    })
  }
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiFoto = await axios.get(`https://shrieking-web-97943-0c89be05ca8d.herokuapp.com/api/catologos/${catalog.id}?populate=foto`);
        const url = apiFoto.data.data.attributes.foto.data.attributes.url;
        setFotoUrl(`https://shrieking-web-97943-0c89be05ca8d.herokuapp.com${url}`);
      } catch (error) {
        console.error("Error al obtener la foto:", error);
      }
    };

    fetchData();
  }, [catalog.id]);
  
  return (
    <Card key={`catalog-${catalog.id}`}>
    <div className="cont-img">
<<<<<<< HEAD
      <Card.Img
        variant="top"
        src={fotoUrl}
      />
=======
    <Card.Img
          variant="top"
          src={catalog.foto?.data?.attributes.url || imagenPorDefecto}
        />
>>>>>>> 1be5c294a980d49383fb3658c2dfbd8e763789c6
    </div>

    <Card.Body className="card-body-inscrito">
      <Card.Title>{catalog.tema_conferencia}</Card.Title>
      <p className="nombre-expositor">Dirigido por: {catalog.expositor}</p>
      <div className="card-inscrito">
        <div className="card-inscrito-seccion-texto">
          <div className="card-estado-conferencia">{estado === "Asistió"? (
            <img src="\icon-check.png" alt="asistio" />
          ): estado === "No asistió"? (
            <img src="\icon-equis.png" alt="noAsistio" />
          ): <img src="\icon-clock.png" alt="pendiente" />}</div>
          <p className="card-inscrito-texto">
            <img src="\calendario-icon-black.svg" alt="fecha" />
            {catalog.fecha} -{" "}
            {/*@ts-ignore*/}
            {catalog.hora === null ? "" : catalog.hora.slice(0, 5)}
          </p>

          <p className="card-inscrito-texto">
<<<<<<< HEAD
            <Image src="\salon-icon-black.svg" alt="salon" />
=======
            <img src="\salon-icon-black.svg" alt="salon" />
>>>>>>> 1be5c294a980d49383fb3658c2dfbd8e763789c6
            {catalog?.salon.data?.attributes?.nombre === null ? "" : catalog.salon.data?.attributes?.nombre}
          </p>
        </div>
        
        <div className="card-inscrito-seccion-boton">
          
          {catalog.repositorio ? (
            
            <a href={catalog.repositorio} target="_blank" rel="noopener noreferrer">VER MATERIAL</a>
          ) : (
            <span>MATERIAL NO DISPONIBLE</span>
          )}
        </div>
      </div>
    </Card.Body>
  </Card>
    //target decia targetet
  );
};
