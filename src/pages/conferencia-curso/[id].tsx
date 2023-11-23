import { useCatalogs } from "../../hooks/catalog/useCatalogs";
import { Catalog } from "../../types/Catalog";
import { PythonShell } from "python-shell";
import { ResponsivePage } from "../../components/ResponsivePage";

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from "next/router";
import { useCatalog } from "../../hooks/catalog/useCatalog";
import { Console } from "console";

const VerCatalogo = () => {
  const router = useRouter();
  const {getCatalogId, updateCatalog} = useCatalog();
//@ts-ignore
  const catalog = useMemo<Catalog | null>(async ( ) => {

    const catalogId = router.query.id;
    if(catalogId && typeof catalogId === "string"){
    const catalogo = await getCatalogId(catalogId);
    console.log(catalogo);
    return catalogo;
    }
   return null;
  },[router])

  const actualizar = useCallback(async(inscripciones:any, catalogId:string) => {

    await updateCatalog(catalogId, {inscripciones});

  },[updateCatalog])


  useEffect(() => {
    const domReady = (fn: Function) => {
      if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
      } else {
        //@ts-ignore
        document.addEventListener("DOMContentLoaded", fn);
      }
    };

    domReady(() => {
      const myqr = document.getElementById('your-qr-result');
      let lastResult: string;
      let countResults = 0;

      const onScanSuccess = (decodeText: string, decodeResult: any) => {
        if (decodeText !== lastResult) {
          ++countResults;
          lastResult = decodeText;
          //alert("Su QR es: " + decodeText);
          const inscripciones = catalog!.inscripciones.map(catalogo => {

               if(catalogo.codigo === decodeText){
                   
                catalogo.asistencia = "Si";
                return catalogo;

               }
               return catalogo

          })

          
          actualizar(inscripciones,catalog!.id)


          if (myqr) {
            myqr.innerHTML = ` you scan ${countResults} : ${decodeText} `;
          }
        }
      };

      const htmlscanner = new (window as any).Html5QrcodeScanner(
        "my-qr-reader", { fps: 10, qrbox: 250 }
      );

      htmlscanner.render(onScanSuccess);
    });

  }, [actualizar]);


  return (

    <ResponsivePage>
      
      <button>escanear</button>
      <div id="your-qr-result"></div>
      <div className="my-qr-reader-cont">
        <div id="my-qr-reader" className="my-qr-reader"></div>
      </div>

        <script async src="https://unpkg.com/html5-qrcode"></script>
        
    </ResponsivePage>

   
  );
};

export default VerCatalogo;
