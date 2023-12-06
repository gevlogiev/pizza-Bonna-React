import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../Services/authService';
import usePersistedState from "../hooks/usePersistedState";
import { useBasket } from "./BasketContext";


const AuthContext = createContext();



export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const { clearBasket } = useBasket;
    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate("/");
    };

    const registerSubmitHandler = async (values) => {


        const result = await authService.register(values.email, values.password, 2); // Register only with role 2

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate("/");
    };

    const logoutHandler = () => {

        
        setAuth({});
        localStorage.removeItem('accessToken');

        clearBasket();
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
        role: auth.role
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;