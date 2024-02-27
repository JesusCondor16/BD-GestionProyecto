import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../styles/Login.css';


export default function Login() {
    return (
    <div className="fondo-pantalla">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="contenedor-principal">
        <h1>Bienvenido al Sistema de Gestión de proyectos</h1>
      </div>

      <div className="contenedor-horizontal">
        <div className="contenedor-profesor">
          <div className="titulo-administrador">
            <h2>Administrador</h2>
            <Link to="/login-administrador">
              <button className="titulo-administrador-button">Iniciar Sesión</button>
            </Link>
          </div>
        </div>

        <div className="contenedor-trabajador">
          <div className="titulo-trabajador">
            <h2>Trabajadores</h2>
            <Link to="/login-trabajadores">
              <button className="titulo-trabajadores-button">Iniciar Sesión</button>
            </Link>
          </div>
        </div>

        
      </div>
    </div>
        );
}