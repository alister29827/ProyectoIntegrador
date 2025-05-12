import React from 'react';
import './Plataforma.css';

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="overlay">
        <h1>RAÍCES <span className="highlight">FUSIÓN</span></h1>
        <p>
          Únete a nuestra comunidad gastronómica.<br />
          Descubre los mejores sabores en tu área.
        </p>
        <a href="/auth" className="enter-btn">Entrar a la Plataforma</a>
      </div>
    </div>
  );
}
