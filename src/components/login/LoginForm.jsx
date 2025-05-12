import React, { Component } from 'react';
import AuthService from '../../services/AuthService';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: '',
      contrasena: '',
    };
    this.authService = new AuthService();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { correo, contrasena } = this.state;
    const result = await this.authService.login(correo, contrasena);

    if (result === 'success') {
      this.props.onLogin(); // Llamar a la función onLogin para actualizar el estado de autenticación
    } else {
      alert(
        result === 'wrong_password'
          ? 'Contraseña incorrecta'
          : result === 'not_found'
          ? 'Correo no registrado'
          : 'Error al iniciar sesión'
      );
    }
  };

  render() {
    const { correo, contrasena } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="correo"
          placeholder="Correo"
          value={correo}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="contrasena"
          placeholder="Contraseña"
          value={contrasena}
          onChange={this.handleChange}
        />
        <button type="submit" className="login-btn">
          Iniciar Sesión
        </button>
      </form>
    );
  }
}

export default LoginForm;
