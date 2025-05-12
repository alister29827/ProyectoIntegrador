import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar, { Beneficios, HeroSection, Datos } from './components/navbar/Navbar';
import FormularioNegocio from './components/formulario/FormularioNegocio';
import AuthPage from './views/AuthPage';

function AppWrapper({ isAuthenticated, onLogin }) {
  const location = useLocation();
  const isFormulario = location.pathname === '/registro-negocio';

  return (
    <>
      {!isFormulario && isAuthenticated && <Navbar />}
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <AuthPage onLogin={onLogin} />
            )
          }
        />

        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <HeroSection />
                <Beneficios />
                <Datos />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="/registro-negocio" element={<FormularioNegocio />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <AppWrapper isAuthenticated={isAuthenticated} onLogin={handleLogin} />
    </Router>
  );
}