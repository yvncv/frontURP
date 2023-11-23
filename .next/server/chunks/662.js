"use strict";
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 1662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useUsers)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2400);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_0__]);
_utils_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useUsers = ()=>{
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const createUser = async (data)=>{
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post("/auth/local/register", {
            ...data,
            username: data.email
        }).catch((response)=>{
            return response.response;
        });
        if (response.data?.error) {
            const { details: { errors  }  } = response.data.error;
            for (const { path , message  } of errors){
                if (path.includes("dni") && message.includes("unique")) {
                    alert("Este DNI ya se encuentra registrado por otro usuario");
                }
            }
            return false;
        }
        await getUsers();
        return response.status === 200;
    };
    const updateUser = async (data)=>{
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.put */ .h.put(`/users/${data.id}`, {
            nombre: data.nombre,
            apellido: data.apellido,
            dni: data.dni,
            email: data.email,
            username: data.email,
            ...data.password && {
                password: data.password
            },
            rol: {
                id: data.role.id
            },
            conferencias: data.conferencias
        }).catch((response)=>{
            return response.response;
        });
        if (response.data?.error) {
            const { details: { errors  }  } = response.data.error;
            for (const { path , message  } of errors){
                if (path.includes("dni") && message.includes("unique")) {
                    alert("Este DNI ya se encuentra registrado por otro usuario");
                }
            }
            return false;
        }
        await getUsers();
        return response.status === 200;
    };
    const removeUser = async (userId)=>{
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.put */ .h.put(`/users/${userId}`, {
            blocked: true
        });
        await getUsers();
        return response.status === 200;
    };
    const enableUser = async (userId)=>{
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.put */ .h.put(`/users/${userId}`, {
            blocked: false
        });
        await getUsers();
        return response.status === 200;
    };
    const getUsers = async ()=>{
        const { data  } = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.get */ .h.get("/users");
        setUsers(data);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        getUsers();
    }, []);
    return {
        users,
        createUser,
        updateUser,
        removeUser,
        enableUser
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;