import { useCatalogs } from "../../hooks/catalog/useCatalogs";
import { Catalog } from "../../types/Catalog";
import { ResponsivePage } from "../../components/ResponsivePage";
import { QrReader } from 'react-qr-reader';
<<<<<<< HEAD

=======
>>>>>>> 1be5c294a980d49383fb3658c2dfbd8e763789c6
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from "next/router";
import { useCatalog } from "../../hooks/catalog/useCatalog";


const VerCatalogo = () => {
  const router = useRouter();
  const {getCatalogId, updateCatalog} = useCatalog();
<<<<<<< HEAD
=======
  const [catalogo, setCatalogo] = useState<Catalog | null>(null);
>>>>>>> 1be5c294a980d49383fb3658c2dfbd8e763789c6
  const [showQr,setshowQr] = useState(true);


  const actualizar = useCallback(async(inscripciones:any, catalogId:string) => {

    await updateCatalog(catalogId, {inscripciones});
    setshowQr(true);

  },[updateCatalog])

  const handleScan = useCallback((codigo:string,catalog:Catalog,catalogId:string) => {
    alert(codigo)

    const estaInscrito = catalog.inscripciones.some((catalogo:any)=> catalogo.codigo === codigo)
    const asistido = catalog.inscripciones.some((catalogo:any)=> catalogo.codigo === codigo && catalogo.asistencia === "Si")
    if (!estaInscrito){
      alert("Usted No esta Inscrito en esta conferencia")
      return;
    }

    if (asistido){
      alert("Ya marcó asistencia")
      return;
    }
   
      setshowQr(false)
      const inscripciones = catalog.inscripciones.map(catalogo => {

      if(catalogo.codigo === codigo){
          
       catalogo.asistencia = "Si";
       return catalogo;

      }
      return catalogo

 })

 
         actualizar(inscripciones,catalogId)
     
  },[]);

  const handleError = (error:any) => {
    console.error(error);
  }
 

  return (

    <ResponsivePage>
<<<<<<< HEAD
     
          <QrReader
          constraints={{ facingMode: 'environment' }}
=======
     {showQr && (
          <QrReader
          constraints={{ facingMode: 'environment' }}

          
>>>>>>> 1be5c294a980d49383fb3658c2dfbd8e763789c6
            onResult={async(result:any, error:any) => {
              if (!!result) {
                const catalogId = router.query.id;
    
               if(catalogId && typeof catalogId === "string" && showQr){

                  const catalogo = await getCatalogId(catalogId);
                  console.log(catalogo);
                  handleScan(result?.text,catalogo,catalogId);

               }
              }
    
              if (!!error) {
                console.info(error);
              }
            }}
            
          />
<<<<<<< HEAD
        
=======
          )}
>>>>>>> 1be5c294a980d49383fb3658c2dfbd8e763789c6
    </ResponsivePage>

   
  );
};

export default VerCatalogo;
