import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GuardForm from "./components/GuardForm";
import IngresoEmbarcaciones from "./components/IngresoEmbarcaciones";
import InformacionGeneral from "./components/InformacionGeneral";
import NavBar from "./components/NavBar";


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
      
        <Route path="/parte-diarios" element={<GuardForm />} />
        <Route path="/ingreso-embarcaciones" element={<IngresoEmbarcaciones />} />
        <Route path="/informacion-general" element={<InformacionGeneral />} />
      </Routes>
    </Router>
  );
};

export default App;
