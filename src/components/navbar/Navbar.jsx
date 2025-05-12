// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import logo from '../navbar/Raices.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Raíces Fusión Logo" />
        <span className="navbar-title">GastroData <span className="ai-highlight">AI</span></span>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/clientes">Para Clientes</a></li>
        <li><a href="/negocios">Para Negocios</a></li>
        <li><a href="/como-funciona">Cómo funciona</a></li>
        <li><a href="/precios">Precios</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <header className="hero-section">
      <div className="hero-content">
        <h1>
          Transforma tu <span className="highlight">negocio</span> gastronómico<br />con <span className="highlight">inteligencia artificial</span>
        </h1>
        <p>
          Haz que tu restaurante, cafetería o bar se vuelva inolvidable. Publica tu negocio,
          llega a más clientes, descubre sus preferencias y toma decisiones basadas en datos reales.
        </p>
        <div className="hero-buttons">
          <Link to="/registro-negocio" className="register-button">
            🚀 Registra tu negocio
          </Link>
          <button className="demo-button">🎬 Ver demostración</button>
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="stat">
          <h2>📊 1.409+</h2>
          <p>Negocios registrados</p>
        </div>
        <div className="stat">
          <h2>😊 85%</h2>
          <p>Clientes satisfechos</p>
        </div>
        <div className="stat">
          <h2>⭐ 4.8/5</h2>
          <p>Calificación promedio</p>
        </div>
      </div>
    </header>
  );
};

const Beneficios = () => {
  return (
    <section className="beneficios-section">
      <div className="beneficio-card">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1374&q=80" alt="Mayor visibilidad" className="beneficio-image" />
        <div className="beneficio-content">
          <h3>📈 Mayor visibilidad</h3>
          <p>
            Llega a miles de comensales que buscan exactamente lo que ofreces. Aparece en búsquedas por ubicación, tipo de comida y preferencias.
          </p>
        </div>
      </div>
      <div className="beneficio-card">
        <img src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=1470&q=80" alt="Clientes fieles" className="beneficio-image" />
        <div className="beneficio-content">
          <h3>❤️ Clientes fieles</h3>
          <p>
            Nuestro sistema de recomendaciones personalizadas ayuda a que los clientes vuelvan a elegirte una y otra vez.
          </p>
        </div>
      </div>
      <div className="beneficio-card">
        <img src="https://images.unsplash.com/photo-1521012012373-6a85bade18da?auto=format&fit=crop&w=1374&q=80" alt="Análisis avanzado" className="beneficio-image" />
        <div className="beneficio-content">
          <h3>🧠 Análisis avanzado</h3>
          <p>
            Conoce qué platos son los más populares, cuándo son tus horas pico y qué prefieren tus clientes con nuestro sistema de inteligencia artificial.
          </p>
        </div>
      </div>
    </section>
  );
};

const Datos = () => {
  return (
    <footer>
      <div className="container" id="footer">
        <div className="footer-content">
          <div className="footer-about">
            <p>
              Plataforma líder en análisis de preferencias gastronómicas mediante inteligencia artificial.
              Ayudamos a negocios a conectar mejor con sus clientes.
            </p>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Enlaces rápidos</h3>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Para negocios</a></li>
              <li><a href="#">Para clientes</a></li>
              <li><a href="#">Cómo funciona</a></li>
              <li><a href="#">Precios</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Recursos</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Casos de éxito</a></li>
              <li><a href="#">Preguntas frecuentes</a></li>
              <li><a href="#">Centro de ayuda</a></li>
              <li><a href="#">API para desarrolladores</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contacto</h3>
            <p><i className="fas fa-map-marker-alt"></i> Av. Ejemplo 123, Piura, Perú</p>
            <p><i className="fas fa-phone"></i> +51 123 456 789</p>
            <p><i className="fas fa-envelope"></i> hola@gastrodadata.com</p>
            <p><i className="fas fa-clock"></i> Lun-Vie: 9:00 - 18:00</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; 2025 GastroData AI. Todos los derechos reservados. |
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Términos y condiciones</a> |
            <a href="#" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Política de privacidad</a>
          </p>
        </div>
      </div>
    </footer>
  );
};


export default Navbar;
export { HeroSection, Beneficios, Datos };