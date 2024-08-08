import React from "react";
import { useAuth } from "../context/AuthContext";

const DashBoard = () => {
    const {logout} = useAuth();

    return(
        <div>
            <h1>Tablero</h1>
            <p>Esta pagina esta protegida. Solo usuarios autenticados pueden verla</p>
            <button onClick={logout} >
                cerrar sesión
                </button>
        </div>
    );
};

export default DashBoard;