import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Helmet } from "react-helmet";
import Login from "./pages/Login.js";
import AdminLogin from "./pages/AdminLogin.js";
import Administrador from "./pages/Administrador.js";

function App(){
  return(
    <div className="App">
<Router>
    <Helmet>
      <title>Sistema de proyectos</title>
    </Helmet>

    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Administrador" element={<Administrador />} />
      <Route path="/AdminLogin" element={<AdminLogin />} />
    </Routes>
    

</Router>

    </div>
  )
}

export default App;
