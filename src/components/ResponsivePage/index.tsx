import { Header } from "../Header";
import { ReactNode, useEffect, useMemo, useReducer, useState } from "react";
import { SideBar } from "../SideBar";
import { ResponsivePageContext, responsivePageReducer } from "./context";
import { User } from "../../types/User";

type ResponsivePageProps = {
    children: ReactNode;
    user?: User;
}

export const ResponsivePage = ({ children, user }: ResponsivePageProps) => {
    const [state, dispatch] = useReducer(responsivePageReducer, { user, isLogged: false, isEmployee: false, inventories: [] });
    const [checkUser, setCheckUser] = useState(true);
    const [showSideBar, setShowSideBar] = useState(true); // Sidebar siempre visible

    const contextValue = useMemo(() => ({ ...state, dispatch }), [state]);

    useEffect(() => {
        if (checkUser && user && user !== state.user) {
            const isEmployee = user.role.id !== 3;
            setShowSideBar(true); // Mostrar sidebar siempre
            dispatch({ type: 'SET_USER', user, isLogged: true, isEmployee });
        }
    }, [user, state.user, checkUser]);

    useEffect(() => {
        const userRaw = localStorage.getItem('user');
        if (userRaw) {
            const user = JSON.parse(userRaw) as User;
            if (user) {
                setCheckUser(false);
                setShowSideBar(true); // Mostrar sidebar siempre
                dispatch({ type: 'SET_USER', user, isLogged: true, isEmployee: user.role.id !== 999 });
            }
        }
    }, []);

    return (
        <ResponsivePageContext.Provider value={contextValue}>
            <div>
                <Header />
                {showSideBar && <SideBar />} {/* Mostrar sidebar */}
                <div className="d-flex contenedor-main">
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
            </div>
        </ResponsivePageContext.Provider>
    );
}
