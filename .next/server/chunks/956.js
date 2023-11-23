"use strict";
exports.id = 956;
exports.ids = [956];
exports.modules = {

/***/ 5956:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useRegister)
/* harmony export */ });
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2400);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_0__]);
_utils_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const useRegister = ()=>{
    const createClient = async (data)=>{
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post("/auth/local/register", {
            ...data,
            username: data.email,
            role: {
                id: 3
            }
        }).catch((response)=>{
            return response.response;
        });
        if (response.data?.error) {
            const { message  } = response.data.error;
            if (message.includes("already taken")) {
                alert("El email ya se encuentra registrado");
                return false;
            }
            const { details: { errors  }  } = response.data.error;
            for (const { path , message: message1  } of errors){
                if (path.includes("dni") && message1.includes("unique")) {
                    alert("Este DNI ya se encuentra registrado por otro usuario");
                }
            }
            return false;
        }
        const { jwt , user  } = response.data;
        localStorage.setItem("token", jwt);
        localStorage.setItem("user", JSON.stringify(user));
        return user;
    };
    const forgotPassword = async (email)=>{
        const { data  } = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post("/auth/forgot-password", {
            email
        });
        const { ok  } = data;
        if (ok) {
            return data.resetPasswordToken;
        }
        return "Algo salio mal";
    };
    const resetPassword = async (reset)=>{
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_0__/* .api.post */ .h.post("/auth/reset-password", reset);
        return response.status === 200;
    };
    return {
        createClient,
        forgotPassword,
        resetPassword
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;