"use strict";
exports.id = 236;
exports.ids = [236];
exports.modules = {

/***/ 199:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ResponsivePage_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2698);
/* harmony import */ var _SideBar_SidebarContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(553);






const Header = ()=>{
    const { toggleSidebar  } = (0,_SideBar_SidebarContext__WEBPACK_IMPORTED_MODULE_5__/* .useSidebarContext */ .S)();
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { user , isLogged , isEmployee  } = (0,_ResponsivePage_context__WEBPACK_IMPORTED_MODULE_4__/* .useResponsivePageContext */ .XG)();
    const { setUser  } = (0,_ResponsivePage_context__WEBPACK_IMPORTED_MODULE_4__/* .useResponsivePageDispatch */ .BO)();
    const handleClose = ()=>setShow(false);
    const handleShow = ()=>setShow(true);
    const goToLogin = ()=>router.push("iniciar-sesion");
    const handleLogout = ()=>{
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(undefined, false, false);
        router.push("/iniciar-sesion");
    };
    const goToProfile = ()=>router.push("/perfil");
    const goToMyOrders = ()=>router.push("/mis-pedidos");
    const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: isLogged ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: "navbar navbar-expand-lg cabecera--principal",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: toggleSidebar,
                    className: "sidebar-toggle",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "\\menu.svg",
                        alt: "Logo"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "acciones-defecto",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "\\icon.svg",
                            alt: "Logo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "\\icon.svg",
                            alt: "Logo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "\\icon.svg",
                            alt: "Logo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "\\icon.svg",
                            alt: "Logo"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "nombre-uni",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Universidad Ricardo Palma"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "alumno-acciones",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "\\icon.svg",
                            alt: "Logo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "\\icon.svg",
                            alt: "Logo"
                        }),
                        isLogged && user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Toggle, {
                                    variant: "light btn--loguin",
                                    id: "dropdown-basic",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        src: "\\profile-circle.svg",
                                        alt: "Logo"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Menu, {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                user.nombre,
                                                " ",
                                                user.apellido
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: user.conferencia
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {
                                            onClick: goToProfile,
                                            children: "Mi perfil"
                                        }),
                                        !isEmployee && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {
                                            onClick: goToMyOrders,
                                            children: "Mis Pedidos"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Dropdown.Item, {
                                            onClick: handleLogout,
                                            children: "Cerrar Sesion"
                                        })
                                    ]
                                })
                            ]
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            className: "me-2 btn--loguin",
                            variant: "light",
                            onClick: goToLogin,
                            children: "Iniciar Sesion"
                        })
                    ]
                })
            ]
        }) : null
    });
};


/***/ }),

/***/ 2698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BO": () => (/* binding */ useResponsivePageDispatch),
/* harmony export */   "SM": () => (/* binding */ responsivePageReducer),
/* harmony export */   "XG": () => (/* binding */ useResponsivePageContext),
/* harmony export */   "fr": () => (/* binding */ ResponsivePageContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const responsivePageReducer = (state, action)=>{
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user,
                isLogged: action.isLogged,
                isEmployee: action.isEmployee
            };
        case "SET_INVENTORIES":
            return {
                ...state,
                inventories: action.inventories
            };
        default:
            return state;
    }
};
const ResponsivePageContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const useResponsivePageContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ResponsivePageContext);
const useResponsivePageDispatch = ()=>{
    const { dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(ResponsivePageContext);
    const setUser = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((user, isLogged, isEmployee)=>{
        dispatch({
            type: "SET_USER",
            user,
            isLogged,
            isEmployee
        });
    }, [
        dispatch
    ]);
    return {
        setUser
    };
};


/***/ }),

/***/ 1236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ ResponsivePage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4016);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2698);
/* harmony import */ var _hooks_inventory_useInventory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7361);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_inventory_useInventory__WEBPACK_IMPORTED_MODULE_5__]);
_hooks_inventory_useInventory__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const ResponsivePage = ({ children , user  })=>{
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(_context__WEBPACK_IMPORTED_MODULE_4__/* .responsivePageReducer */ .SM, {
        user,
        isLogged: false,
        isEmployee: false,
        inventories: []
    });
    const [checkUser, setCheckUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
    const [showSideBar, setShowSideBar] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { inventories  } = (0,_hooks_inventory_useInventory__WEBPACK_IMPORTED_MODULE_5__/* .useInventory */ .m)();
    const contextValue = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>({
            ...state,
            dispatch
        }), [
        state
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (checkUser && user && user !== state.user) {
            const isEmployee = user.role.id !== 3;
            setShowSideBar(isEmployee);
            dispatch({
                type: "SET_USER",
                user,
                isLogged: true,
                isEmployee
            });
        }
    }, [
        user,
        state.user,
        checkUser
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const userRaw = localStorage.getItem("user");
        if (userRaw) {
            const user = JSON.parse(userRaw);
            if (user) {
                const isEmployee = user.role.id !== 999;
                setCheckUser(false);
                setShowSideBar(isEmployee);
                dispatch({
                    type: "SET_USER",
                    user,
                    isLogged: true,
                    isEmployee
                });
            }
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (inventories.length) {
            const availableInventories = inventories.filter((inventory)=>inventory.disponible);
            console.info("inventory", availableInventories);
            dispatch({
                type: "SET_INVENTORIES",
                inventories: availableInventories
            });
        }
    }, [
        inventories
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context__WEBPACK_IMPORTED_MODULE_4__/* .ResponsivePageContext.Provider */ .fr.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .h, {}),
                showSideBar && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SideBar__WEBPACK_IMPORTED_MODULE_3__/* .SideBar */ .K, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "d-flex contenedor-main",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-fluid",
                        children: children
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ SidebarProvider),
/* harmony export */   "S": () => (/* binding */ useSidebarContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SidebarContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    isSidebarOpen: false,
    toggleSidebar: ()=>{}
});
const useSidebarContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SidebarContext);
//@ts-ignore
const SidebarProvider = ({ children  })=>{
    const [isSidebarOpen, setIsSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleSidebar = ()=>{
        setIsSidebarOpen(!isSidebarOpen);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SidebarContext.Provider, {
        value: {
            isSidebarOpen,
            toggleSidebar
        },
        children: children
    });
};


/***/ }),

/***/ 4016:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ResponsivePage_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2698);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SideBar_SidebarContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(553);





const SideBar = ()=>{
    const { isSidebarOpen , toggleSidebar  } = (0,_SideBar_SidebarContext__WEBPACK_IMPORTED_MODULE_4__/* .useSidebarContext */ .S)();
    const { user  } = (0,_ResponsivePage_context__WEBPACK_IMPORTED_MODULE_2__/* .useResponsivePageContext */ .XG)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `sidebar--admin ${isSidebarOpen ? "active" : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: toggleSidebar,
                        className: "close-sidebar",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "\\menu.svg",
                            alt: "Logo"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "\\logo-urp.png",
                        alt: "",
                        className: "logo-urp"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {})
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "nav-link",
                            href: "#",
                            children: "INFORMACI\xd3N PERSONAL"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "nav-link",
                            href: "#",
                            children: "AC\xc1DEMICO"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "nav-link",
                            href: "#",
                            children: "SERVICIOS"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "nav-link",
                            href: "#",
                            children: "GUIAS Y REGLAMENTOS"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "nav-link",
                            href: "#",
                            children: "CAT\xc1LOGO ABSYNET"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "nav-link",
                            href: "#",
                            children: "BASES DE DATOS"
                        })
                    }),
                    // ROLE 4 ADMINISTRADOR
                    user?.role.id === 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "nav-link",
                                href: "/administracion-salones",
                                children: "Administraci\xf3n de salones"
                            })
                        })
                    }),
                    // ROLE 3 DOCENTE
                    user?.role.id === 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
                            defaultActiveKey: "0",
                            className: "acordeon-confes",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion.Item, {
                                eventKey: "0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion.Header, {
                                        children: "CONFERENCIAS"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion.Body, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "nav-link",
                                                href: "/solicitudes/",
                                                children: "Solicitudes pendientes"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "nav-link",
                                                href: "/solicitudes/solicitar-conferencia",
                                                children: "Nueva solicitud"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "nav-link",
                                                href: "/relacion-conferencias",
                                                children: "Relaci\xf3n de conferencias"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "nav-link",
                                                href: "/conferencia-curso/",
                                                children: "Conferencias en curso"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    // ROLE 6 CENTRO DE EXTENSION
                    user?.role.id === 7 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "nav-item",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "nav-link",
                            href: "/administrar-solicitudes",
                            children: "Administrar solicitudes de conferencias"
                        })
                    }),
                    // ROLE 5 SECRETARIA
                    user?.role.id === 4 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "nav-item",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                className: "nav-link",
                                href: "/relacion-conferencias",
                                children: "VER RELACI\xd3N DE CONFERENCIAS"
                            })
                        })
                    }),
                    // ROLE 3 ALUMNO
                    user?.role.id === 5 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion, {
                            defaultActiveKey: "0",
                            className: "acordeon-confes",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion.Item, {
                                eventKey: "0",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion.Header, {
                                        children: "CONFERENCIAS"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.Accordion.Body, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "nav-link",
                                                href: "/proximas-conferencias",
                                                children: "Pr\xf3ximas conferencias"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "nav-link",
                                                href: "/conferencias-pasadas",
                                                children: "Conferencias pasadas"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "nav-link",
                                                href: "/sugiere-conferencia",
                                                children: "Sugiere una conferencia"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                className: "nav-link",
                                                href: "/mis-conferencias",
                                                children: "Mis conferencias"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 7361:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ useInventory)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2400);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_api__WEBPACK_IMPORTED_MODULE_1__]);
_utils_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useInventory = ()=>{
    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [inventories, setInventories] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const getProducts = async ()=>{
        const { data  } = await _utils_api__WEBPACK_IMPORTED_MODULE_1__/* .api.get */ .h.get("/productos/options");
        setProducts(data);
    };
    const getInventories = async ()=>{
        const { data  } = await _utils_api__WEBPACK_IMPORTED_MODULE_1__/* .api.get */ .h.get("/inventarios");
        setInventories(data);
    };
    const createInventory = async (inventory)=>{
        await _utils_api__WEBPACK_IMPORTED_MODULE_1__/* .api.post */ .h.post("/inventarios", {
            data: inventory
        });
        await getInventories();
    };
    const removeInventory = async (inventoryId)=>{
        await _utils_api__WEBPACK_IMPORTED_MODULE_1__/* .api.put */ .h.put(`/inventarios/${inventoryId}`, {
            data: {
                disponible: false
            }
        });
        await getInventories();
    };
    const updateInventory = async (inventory)=>{
        await _utils_api__WEBPACK_IMPORTED_MODULE_1__/* .api.put */ .h.put(`/inventarios/${inventory.id}`, {
            data: {
                stock: inventory.stock,
                disponible: inventory.disponible
            }
        });
        await getInventories();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        getInventories();
    }, []);
    return {
        products,
        inventories,
        createInventory,
        getProducts,
        removeInventory,
        updateInventory
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "https://shrieking-web-97943-0c89be05ca8d.herokuapp.com/api"
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;