"use strict";
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 9086:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ useCatalogs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2400);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_1__]);
_utils_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useCatalogs = ()=>{
    const [catalogs, setCatalogs] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [SalonConferencia, setSalonConferencia] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const getSalonNombre = (salonId)=>{
        const salon = SalonConferencia.find((salon)=>salon.id === salonId);
        return salon ? salon.attributes.nombre : "";
    };
    const getCatalogs = async ()=>{
        const { data: { data: dataRaw  }  } = await _utils_api__WEBPACK_IMPORTED_MODULE_1__/* .api.get */ .h.get("/catologos?populate=*");
        const catalogsMapping = dataRaw.map(({ id , attributes  })=>({
                ...attributes,
                id
            }));
        setCatalogs(catalogsMapping);
    };
    const removeCatalog = async (catalogId)=>{
        await _utils_api__WEBPACK_IMPORTED_MODULE_1__/* .api.put */ .h.put(`/catologos/${catalogId}`, {
            data: {
                disponible: false,
                miconf: false
            }
        });
        await getCatalogs();
    };
    const enabledCatalog = async (catalogId)=>{
        await _utils_api__WEBPACK_IMPORTED_MODULE_1__/* .api.put */ .h.put(`/catologos/${catalogId}`, {
            data: {
                disponible: true,
                miconf: false
            }
        });
        await getCatalogs();
    };
    const myCatalog = async (catalogId)=>{
        await _utils_api__WEBPACK_IMPORTED_MODULE_1__/* .api.put */ .h.put(`/catologos/${catalogId}`, {
            data: {
                disponible: true,
                miconf: true
            }
        });
        await getCatalogs();
    };
    const getCatalogId = async (catalogId)=>{
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_1__/* .api.get */ .h.get(`/catologos/${catalogId}`);
        const catalogData = response.data.data.attributes;
        return catalogData;
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        getCatalogs();
    }, []);
    return {
        catalogs,
        removeCatalog,
        enabledCatalog,
        myCatalog,
        getCatalogId,
        getSalonNombre
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;