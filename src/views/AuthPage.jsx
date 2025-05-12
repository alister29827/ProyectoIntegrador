import React, { Component } from 'react';
import Carousel from '../components/login/Carrusel';
import LoginForm from '../components/login/LoginForm';
import RegisterForm from '../components/login/RegisterForm';
// ✅ Correcto
import '../styles/AuthPage.css';



class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  toggleForm = (isLogin) => {
    this.setState({ isLogin });
  };

  render() {
    const { isLogin } = this.state;

    return (
      <div className="container">
        <div className="form-container">
          <Carousel />
          <div className="right-section">
            <div className="form-toggle">
              <button
                className={isLogin ? 'active' : ''}
                onClick={() => this.toggleForm(true)}
              >
                Iniciar Sesión
              </button>
              <button
                className={!isLogin ? 'active' : ''}
                onClick={() => this.toggleForm(false)}
              >
                Regístrate
              </button>
            </div>
            <h2>{isLogin ? 'Iniciar Sesión' : 'Registro'}</h2>
            {isLogin ? <LoginForm /> : <RegisterForm />}
          </div>
        </div>
      </div>
    );
  }
}

export default AuthPage;
