import React from "react";
import { useAuth } from "../context/AuthContext";

const Login = ()=>{
    const {login} = useAuth();

    return(
        <div>
            <h1>Inicio sesión</h1>
            <button onClick={login}>Iniciar sesión</button>
        </div>
    );
};

export default Login;