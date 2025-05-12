import React, { Component } from 'react';
import '../../styles/AuthPage.css'; 
class Carrusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0, // Índice de la imagen actual
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.nextImage, 3000); // Cambiar imagen cada 3 segundos
  }

  componentWillUnmount() {
    clearInterval(this.interval); // Limpiar el intervalo al desmontar el componente
  }

  nextImage = () => {
    const { currentIndex } = this.state;
    const totalImages = 3; // Número total de imágenes
    this.setState({
      currentIndex: (currentIndex + 1) % totalImages, // Cambiar al siguiente índice
    });
  };

  render() {
    const { currentIndex } = this.state;
    const images = [
      '../imagenes/bar.png',
      '../imagenes/cafeteria.png',
      '../imagenes/restaurante.png',
    ];

    return (
      <div
        className="carrusel"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          height: '100vh',
          padding: '20px',
          backgroundImage: `url(${images[currentIndex]})`, // Mostrar la imagen actual
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          color: '#fff',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          RAÍCES <span style={{ color: '#ff6347' }}>FUSIÓN</span>
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', lineHeight: '1.5' }}>
          Únete a nuestra comunidad gastronómica.<br />
          Descubre los mejores sabores en tu área.
        </p>
       
      </div>
    );
  }
}

export default Carrusel;
