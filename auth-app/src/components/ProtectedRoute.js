import React, { Component } from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({component: Component, ...rest}) => {
    const {isAuthenticated} = useAuth();

    return(
        <Route 
            {...rest}
            render={(props) => 
                        isAuthenticated ? <Component {...props} /> : <Navigate to='/login' />
            } />
    );

} ;

export default ProtectedRoute;