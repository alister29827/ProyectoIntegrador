import React, { useState } from 'react';
import AuthService from '../../services/AuthService';

export default function RegisterForm() {
  const authService = new AuthService();
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica del frontend antes de enviar
    if (!formData.nombre || !formData.apellido || !formData.email || !formData.password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    try {
      const result = await authService.register(formData);
      alert(result.includes("Registro exitoso") ? "✅ Registro exitoso" : `❌ ${result}`);
    } catch (error) {
      console.error("Error en el registro:", error);
      alert("Ocurrió un error al registrar.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="apellido"
        placeholder="Apellido"
        required
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Correo Electrónico"
        required
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        required
        onChange={handleChange}
      />
      <button type="submit" className="register-btn">Registrarse</button>
    </form>
  );
}
