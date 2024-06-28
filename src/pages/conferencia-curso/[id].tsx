import { useCatalogs } from "../../hooks/catalog/useCatalogs";
import { Catalog } from "../../types/Catalog";
import { Salon } from "../../types/Salon";
import { ResponsivePage } from "../../components/ResponsivePage";
//@ts-ignore
import Quagga from 'quagga';
import React, { useCallback, useEffect, useMemo,useRef, useState } from 'react';
import { useRouter } from "next/router";
import { useCatalog } from "../../hooks/catalog/useCatalog";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { QrReader } from 'react-qr-reader';

let contador = 0;

const VerCatalogo = () => {
  const router = useRouter();
  const {getCatalogId, updateCatalog} = useCatalog();
  const [catalogo, setCatalogo] = useState<Catalog | null>(null);
  const [showQr,setshowQr] = useState(true);
  
  //lector barras
  const firstUpdate = useRef(true);
  const [isStart, setIsStart] = useState(false);
  const [barcode, setBarcode] = useState('');

  const actualizar = useCallback(async(inscripciones:any, catalogId:string) => {

    await updateCatalog(catalogId, {inscripciones});
    setshowQr(true);

  },[updateCatalog])

  const handleScan = useCallback((codigo:string,catalog:Catalog,catalogId:string) => {
    alert("Se a registrado correctamente:"+codigo)

    const estaInscrito = catalog.inscripciones.some((catalogo:any)=> catalogo.codigo === codigo)
    const asistido = catalog.inscripciones.some((catalogo:any)=> catalogo.codigo === codigo && catalogo.asistencia === "Si")
    const marcoEntrada = catalog.inscripciones.some((catalogo:any)=> catalogo.codigo === codigo && catalogo.entrada === true)
    if (!estaInscrito){
      alert("Usted No esta Inscrito en esta conferencia")
      return;
    }

    if (asistido){
      alert("Ya marcó asistencia")
      return;
    }

    console.log(contador);
    if(contador>=catalog.salon?.data?.attributes.aforo && !marcoEntrada){
      alert("Ya esta full el salon")
      return
    
      }
   
      setshowQr(false)
      const inscripciones = catalog.inscripciones.map(catalogo => {

      if(catalogo.codigo === codigo && !catalogo.entrada){
          
       catalogo.entrada = true;
       
       contador = contador + 1;
       return catalogo;

      }


      if(catalogo.codigo === codigo && catalogo.entrada && !catalogo.salida){
          
        catalogo.salida = true;
        catalogo.asistencia = "Si";
    
 
        return catalogo;
 
       }
      

      return catalogo

 })

 
         

         console.log(catalog.salon?.data?.attributes.aforo);
         actualizar(inscripciones,catalogId)
         
     
  },[]);

  const handleError = (error:any) => {
    console.error(error);
  }

  useEffect(() => {
    return () => {
      if (isStart) setIsStart(false);
      
    };
  }, []);

  /* useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (isStart) startScanner();
    else stopScanner();
  }, [isStart]); */
  
  const _onDetected = async (res:any) => {
    setBarcode(res.text);
    // Obtener el catalogId de la URL
    const catalogId = router.query.id as string | undefined;
    
      // Aquí puedes realizar la lógica de actualización del catálogo

         if(catalogId && typeof catalogId === "string"){

            const catalogo = await getCatalogId(catalogId);
           
            handleScan(res.text,catalogo,catalogId);

      
      
      //alert(`Código leído: ${res.codeResult.code} en el catálogo con ID: ${catalogId}`);
    } else {
      console.error('No se pudo obtener el ID del catálogo desde la URL');
    }
  };

  /* const startScanner = () => {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          target: document.querySelector('#scanner-container'),
          constraints: {
            facingMode: 'environment' // or user
          }
        },
        numOfWorkers: navigator.hardwareConcurrency,
        locate: true,
        frequency: 1,
        debug: {
          drawBoundingBox: true,
          showFrequency: true,
          drawScanline: true,
          showPattern: true
        },
        multiple: false,
        locator: {
          halfSample: false,
          patchSize: 'large', // x-small, small, medium, large, x-large
          debug: {
            showCanvas: false,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
              showTransformed: false,
              showTransformedBox: false,
              showBB: false
            }
          }
        },
        decoder: {
          readers: [
            'code_128_reader',
            'ean_reader',
            'ean_8_reader',
            'code_39_reader',
            'code_39_vin_reader',
            'codabar_reader',
            'upc_reader',
            'upc_e_reader',
            'i2of5_reader',
            'i2of5_reader',
            '2of5_reader',
            'code_93_reader'
          ]
        }
      },
      //@ts-ignore
      err => {
        if (err) {
          return console.log(err);
        }
        Quagga.start();
      }
    );
    Quagga.onDetected(_onDetected);
    //@ts-ignore
    Quagga.onProcessed(result => {
      let drawingCtx = Quagga.canvas.ctx.overlay,
        drawingCanvas = Quagga.canvas.dom.overlay;
 
      if (result) {
        if (result.boxes) {
          drawingCtx.clearRect(
            0,
            0,
            parseInt(drawingCanvas.getAttribute('width')),
            parseInt(drawingCanvas.getAttribute('height'))
          );
          //@ts-ignore
          result.boxes.filter(box => box !== result.box).forEach(box => {
            Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
              color: 'green',
              lineWidth: 2
            });
          });
        }
 
        if (result.box) {
          Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: '#00F', lineWidth: 2 });
        }
 
        if (result.codeResult && result.codeResult.code) {
          Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
        }
      }
    });
  };
 */
 /*  const stopScanner = () => {
    Quagga.offProcessed();
    Quagga.offDetected();
    Quagga.stop();
  }; */
/*
  const actualizar = useCallback(async(inscripciones:any, catalogId:string) => {

    await updateCatalog(catalogId, {inscripciones});
    setshowQr(true);

  },[updateCatalog])

  const handleScan = useCallback((codigo:string,catalog:Catalog,catalogId:string) => {
    alert("Se a registrado correctamente:"+codigo)

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

      if(catalogo.codigo === codigo && !catalogo.entrada){
          
       catalogo.entrada = true;

       return catalogo;

      }

      if(catalogo.codigo === codigo && catalogo.entrada && !catalogo.salida){
          
        catalogo.salida = true;
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
 */
//QrReader
const handleQrScan = (result: any) => {
  if (result) {
    const catalogId = router.query.id as string | undefined;
    if (catalogId && typeof catalogId === "string" && showQr) {
      getCatalogId(catalogId).then(catalogo => {
        handleScan(result?.text, catalogo, catalogId);
      });
    }
  }
};
  return (

    <ResponsivePage>
      <div>
        <h3>Pasar Lista </h3>
        <button onClick={() => setIsStart(prevStart => !prevStart)} style={{ marginBottom: 20 }}>{isStart ? 'Stop' : 'Start'}</button>
        {isStart && (
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                handleQrScan(result);
              }
              if (!!error) {
                handleError(error);
              }
            }}
            constraints={{ facingMode: 'environment' }}
          />
        )}
      </div>
      <div>
        <span>Contador: {contador}</span>
      </div>
    </ResponsivePage>

   
  );
};

export default VerCatalogo;
