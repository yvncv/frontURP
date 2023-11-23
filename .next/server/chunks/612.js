"use strict";
exports.id = 612;
exports.ids = [612];
exports.modules = {

/***/ 7169:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_catalog_useCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8114);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _ResponsivePage_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2698);
/* harmony import */ var _hooks_catalog_useCatalogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9086);
/* harmony import */ var _hooks_user_useUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1662);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_catalog_useCatalog__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hooks_catalog_useCatalogs__WEBPACK_IMPORTED_MODULE_5__, _hooks_user_useUsers__WEBPACK_IMPORTED_MODULE_6__, axios__WEBPACK_IMPORTED_MODULE_7__]);
([_hooks_catalog_useCatalog__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hooks_catalog_useCatalogs__WEBPACK_IMPORTED_MODULE_5__, _hooks_user_useUsers__WEBPACK_IMPORTED_MODULE_6__, axios__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








//@ts-ignore
function formatearFecha(fechaOriginal) {
    const fecha = new Date(fechaOriginal);
    fecha.setDate(fecha.getDate() + 1);
    const dia = fecha.getDate();
    const mes = fecha.toLocaleDateString("es-ES", {
        month: "long"
    });
    const anio = fecha.getFullYear();
    return `${dia} de ${mes}`;
}
//@ts-ignore
const ModalInscribir = ({ estado , cambiarEstado , catalogo , setCatalogo , estadoModalQR , cambiarEstadoQR  })=>{
    const { user  } = (0,_ResponsivePage_context__WEBPACK_IMPORTED_MODULE_4__/* .useResponsivePageContext */ .XG)();
    const { updateUser  } = (0,_hooks_user_useUsers__WEBPACK_IMPORTED_MODULE_6__/* .useUsers */ .U)();
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();
    const [estadoModal, cambiarEstadoModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { updateCatalog  } = (0,_hooks_catalog_useCatalog__WEBPACK_IMPORTED_MODULE_2__/* .useCatalog */ .r)(); // Asegúrate de importar la función updateCatalog correctamente.
    const { catalogs , myCatalog  } = (0,_hooks_catalog_useCatalogs__WEBPACK_IMPORTED_MODULE_5__/* .useCatalogs */ .$)();
    const [fotoUrl, setFotoUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const fetchData = async ()=>{
            try {
                const apiFoto = await axios__WEBPACK_IMPORTED_MODULE_7__["default"].get(`https://shrieking-web-97943-0c89be05ca8d.herokuapp.com/api/catologos/${catalogo.id}?populate=foto`);
                setFotoUrl(apiFoto.data.data.attributes.foto);
                console.log(fotoUrl);
            } catch (error) {
                console.error("Error al obtener la foto:", error);
            }
        };
        fetchData();
    }, [
        catalogo.id
    ]);
    //al darle click al boton
    const handleOnSubmit = async (data)=>{
        //pone el miconf de la conferencia en true
        const handleMyCatalog = async (catalogId)=>{
            await myCatalog(catalogId);
        };
        const nuevoAlumno = {
            nombre: user?.nombre,
            apellido: user?.apellido,
            codigo: user?.codigo,
            carrera: user?.escuela,
            asistencia: "No"
        };
        // Obtén la lista de objetos actual del campo JSON
        let la;
        if (catalogo.inscripciones != null) {
            let listaDeAlumnos = catalogo.inscripciones;
            la = modificarInscripciones(listaDeAlumnos);
        } else {
            let listaDeAlumnos1 = [];
            la = modificarInscripciones(listaDeAlumnos1);
        }
        function modificarInscripciones(listaDeAlumnos) {
            let flag = false;
            if (listaDeAlumnos?.length == 0) {
                listaDeAlumnos.push(nuevoAlumno);
            } else {
                //@ts-ignore
                listaDeAlumnos.forEach((alumno)=>{
                    if (alumno.codigo != nuevoAlumno.codigo) {
                        flag = true;
                    } else {
                        console.log("El alumno ya se inscrbio");
                    }
                });
                //@ts-ignore
                if (flag == true) {
                    listaDeAlumnos.push(nuevoAlumno);
                }
            }
            return listaDeAlumnos;
        }
        // Actualiza el campo JSON del catálogo con la lista actualizada
        const updatedCatalog = {
            inscripciones: la
        };
        // Llama a la función updateCatalog para actualizar el catálogo con la nueva lista de objetos.
        const response = await updateCatalog(catalogo.id, updatedCatalog);
        if (response) {
            console.log("Nuevo alumno registrado con \xe9xito:", response);
            // Realiza cualquier otra acción necesaria después de la actualización.
            cambiarEstadoQR(!estadoModalQR);
        } else {
            console.error("Error al registrar al nuevo alumno.");
        }
        cambiarEstado(!estado);
    };
    const fechaFormateada = formatearFecha(Date.parse(catalogo?.fecha));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: estado && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "overlay",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "contenido-modal",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "encabezado-modal",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "INSCR\xcdBETE AHORA"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "boton-cerrar",
                        onClick: ()=>cambiarEstado(false),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "\\close-solid.svg",
                            alt: "close"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contenido",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "seccion",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Conferencia: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: catalogo.tema_conferencia
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "seccion",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Fecha y hora: "
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            fechaFormateada === null ? "No establecida" : fechaFormateada,
                                            " - ",
                                            catalogo.hora === null ? "No establecida" : catalogo.hora.slice(0, 5)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "seccion",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Sal\xf3n: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: catalogo.salon.data?.attributes?.nombre === null ? "No establecido" : catalogo.salon.data?.attributes?.nombre
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "seccion",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Dirigido a: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: catalogo.dirigido === null ? "No establecido" : catalogo.dirigido
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "seccion-titulo-alumno",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    children: "Informaci\xf3n del alumno"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "seccion",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "C\xf3digo: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: user?.codigo
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "seccion",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Escuela: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: user?.escuela
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "seccion",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Nombres: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: user?.nombre
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "seccion",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        children: "Apellidos: "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: user?.apellido
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "seccion-botones",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "botones-modal",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "inscribirme-ahora",
                                        onClick: handleSubmit(handleOnSubmit),
                                        children: "INSCRIBIRME AHORA"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalInscribir);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2663:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResponsivePage_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2698);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3267);
/* harmony import */ var react_qr_code__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_qr_code__WEBPACK_IMPORTED_MODULE_3__);




//npm i react-qr-code
//npm i react-native-svg
{}const ModalQR = ({ estado , cambiarEstado  })=>{
    const { user  } = (0,_ResponsivePage_context__WEBPACK_IMPORTED_MODULE_1__/* .useResponsivePageContext */ .XG)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: estado && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "overlay",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "contenido-modal",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "encabezado-modal",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "INSCRIPCI\xd3N CORRECTA"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "boton-cerrar",
                        onClick: ()=>{
                            cambiarEstado(false);
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "\\close-solid.svg",
                            alt: "close"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "contenedorQR",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_qr_code__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "codigoQR",
                                value: user?.codigo || "",
                                viewBox: `0 0 256 256`,
                                fgColor: "black"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "textoQR",
                        children: "Se ha registrado correctamente a la conferencia, por favor, guarde su pase QR con el bot\xf3n de abajo o con una captura de pantalla, ser\xe1 necesario para el ingreso a la conferencia."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "inscribirme-ahora",
                        style: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        children: "Descargar QR"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalQR);


/***/ })

};
;