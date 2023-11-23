"use strict";
exports.id = 114;
exports.ids = [114];
exports.modules = {

/***/ 8114:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useCatalog)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2400);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_0__]);
_utils_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useCatalog = ()=>{
    const createCatalog = async (catalog, studentInfo)=>{
        const { data: { data: dataRaw  }  } = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post("/catologos", {
            data: catalog
        });
        return {
            ...dataRaw.attributes,
            id: dataRaw.id
        };
    };
    const getCatalogId = async (catalogId)=>{
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get(`/catologos/${catalogId}`);
        const catalogData = response.data.data.attributes;
        return catalogData;
    };
    const updateCatalog = async (catalogId, updatedCatalog)=>{
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.put */ .h.put(`/catologos/${catalogId}`, {
            data: updatedCatalog
        });
        if (response.status === 200) {
            return updatedCatalog; // Puedes devolver el catálogo actualizado si es necesario.
        } else {
            // Manejo de errores o retorno de nulo según tus necesidades.
            return null;
        }
    };
    const uploadPhoto = async (files, refId)=>{
        const formData = new FormData();
        formData.append("files", files);
        formData.append("ref", "api::catologo.catologo");
        formData.append("refId", refId);
        formData.append("field", "foto");
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post("/upload", formData, {
            headers: {
                "content-type": "multipart/form-data"
            }
        });
        return response.status === 200;
    };
    return {
        createCatalog,
        uploadPhoto,
        updateCatalog,
        getCatalogId
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;