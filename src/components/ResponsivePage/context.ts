import { createContext, Dispatch, useCallback, useContext, useReducer } from 'react';
import { User } from "../../types/User";
import { Inventory } from "../../types/Inventario";

// Estado y acciones del contexto
type ResponsivePageState = {
    user: User | undefined;
    isLogged: boolean;
    isEmployee: boolean;
    inventories: Inventory[];
};

type ResponsivePageActionType = 
  | { type: 'SET_USER'; user: User | undefined; isLogged: boolean; isEmployee: boolean }
  | { type: 'SET_INVENTORIES'; inventories: Inventory[] };

export type ResponsivePageContextValue = ResponsivePageState & {
    dispatch: Dispatch<ResponsivePageActionType>;
};

// Reductor para manejar el estado
export const responsivePageReducer = (state: ResponsivePageState, action: ResponsivePageActionType): ResponsivePageState => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
                isLogged: action.isLogged,
                isEmployee: action.isEmployee,
            };
        case 'SET_INVENTORIES':
            return {
                ...state,
                inventories: action.inventories,
            };
        default:
            return state;
    }
};

// Creación del contexto con valores predeterminados
export const ResponsivePageContext = createContext<ResponsivePageContextValue>({
  user: undefined,
  isLogged: false,
  isEmployee: false,
  inventories: [],
  dispatch: () => {}, // Valor predeterminado para dispatch
});

// Hooks para acceder y actualizar el contexto
export const useResponsivePageContext = () => useContext(ResponsivePageContext);

export const useResponsivePageDispatch = () => {
    const { dispatch } = useContext(ResponsivePageContext);

    if (!dispatch) {
        throw new Error('useResponsivePageDispatch must be used within a ResponsivePageProvider');
    }

    const setUser = useCallback((user: User | undefined, isLogged: boolean, isEmployee: boolean) => {
        dispatch({ type: "SET_USER", user, isLogged, isEmployee });
    }, [dispatch]);

    return { setUser };
};

