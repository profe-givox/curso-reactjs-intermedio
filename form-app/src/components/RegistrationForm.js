import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import *  as yup from 'yup'
import '../styles/styles.css' 

//esquema de valiadacion usando yup
const schema = yup.object().shape({
    username: yup.string().required('Nombre de usuario')
    .min(3, "el usuario debe tener 3 caracteres"),
    email: yup.string().email('email debe ser valido')
    .required('Email requerido'),
    password: yup.string().required('password requerido')
    .min(6, 'password debe tener 6 caracteres'),
    confirmPassword: yup.string()
    .oneOf([yup.ref('password'),null],'Password deben match')
});

const RegistrationForm = () => {
    const {register, handleSubmit,formState: {errors}} =
        useForm(
            {resolver: yupResolver(schema)}
        );


    const onSubmit = data => {
        console.log(data);
        alert('Registro exitoso');
    };

    return(
        <div className="form-container">
            <h2>Formulario de registro</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="username">Usuario</label>
                    <input id="username" {...register('username')} />
                    {errors.username && 
                        <p className="error-message">
                            {errors.username.message}
                            </p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" {...register('email')} />
                    {errors.email && 
                        <p className="error-message">
                            {errors.email.message}
                            </p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" {...register('password')} />
                    {errors.password && 
                        <p className="error-message">
                            {errors.password.message}
                            </p>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirmar password</label>
                    <input id="confirmPassword" type="password" {...register('confirmPassword')} />
                    {errors.confirmPassword && 
                        <p className="error-message">
                            {errors.confirmPassword.message}
                            </p>}
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
    
}

export default RegistrationForm;