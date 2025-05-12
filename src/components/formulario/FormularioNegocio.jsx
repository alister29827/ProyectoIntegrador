import React, { useState } from 'react';
import './FormularioNegocio.css';
import logo from '../formulario/Raices.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Raíces Fusión Logo" />
                <span className="navbar-title">GastroData <span className="ai-highlight">AI</span></span>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Inicio</a></li>
                <li><a href="/faq">Preguntas Frecuentes</a></li>
                <li><a href="/soporte">Soporte Técnico</a></li>
                <li><a href="/terminos-condiciones">Términos y Condiciones</a></li>
                <li><a href="/tutorial-registro">Cómo Registrar tu Negocio</a></li>
                <li><a href="/preguntas-comunes">Preguntas Comunes</a></li>
            </ul>
        </nav>
    );
};

export default function FormularioNegocio() {
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({}); // Agregado para manejar errores
    const [formData, setFormData] = useState({
        businessName: '',
        businessType: '',
        businessDescription: '',
        openingDate: '',
        businessAddress: '',
        businessDistrict: '',
        businessCity: '',
        businessPhone: '',
        businessEmail: '',
        businessRUC: '',
        businessPermit: null,
        businessID: null,
        additionalDocs: null,
        businessPhotos: null,
        mondayOpen: '',
        mondayClose: '',
        termsAgreement: false,
    });

    const handleChange = (e) => {
        const { name, value, type, files, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'file' ? files : type === 'checkbox' ? checked : value,
        }));
    };

    const validateStep1 = () => {
        const newErrors = {};

        if (!/^[0-9]{11}$/.test(formData.businessRUC)) {
            newErrors.businessRUC = "El RUC debe contener exactamente 11 dígitos numéricos.";
        }

        if (!formData.businessName.trim()) {
            newErrors.businessName = "El nombre del negocio es obligatorio.";
        }

        if (!formData.businessType) {
            newErrors.businessType = "Debe seleccionar un tipo de negocio.";
        }

        if (!formData.businessDescription || formData.businessDescription.length < 50) {
            newErrors.businessDescription = "La descripción debe tener al menos 50 caracteres.";
        }

        if (!formData.openingDate) {
            newErrors.openingDate = "Debe ingresar la fecha de apertura.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (step === 1 && !validateStep1()) return; // Validación para el paso 1
        setStep((s) => s + 1);
    };

    const prevStep = () => setStep((s) => s - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Formulario enviado correctamente (simulado)");
    };

    return (
        <>
            <Navbar />
            <div className="registro-container">
                {/* Barra de progreso */}
                <div className="progress-bar-container">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${(step / 4) * 100}%` }}
                    ></div>
                </div>

                <form className="registro-card" onSubmit={handleSubmit}>
                    {step === 1 && (
                        <>
                            <h2>📋 Información Básica</h2>
                            <p className="registro-subtitulo">
                                Completa esta sección con los datos iniciales de tu negocio.
                            </p>

                            <div className="campo">
                                <label>🆔 RUC</label>
                                <input
                                    type="text"
                                    name="businessRUC"
                                    placeholder="Ej: 12345678901"
                                    value={formData.businessRUC}
                                    onChange={handleChange}
                                />
                                {errors.businessRUC && <span className="error">{errors.businessRUC}</span>}
                            </div>

                            <div className="campo">
                                <label>🍽️ Nombre del Negocio</label>
                                <input
                                    type="text"
                                    name="businessName"
                                    placeholder="Ej: La Casa del Sabor"
                                    value={formData.businessName}
                                    onChange={handleChange}
                                />
                                {errors.businessName && <span className="error">{errors.businessName}</span>}
                            </div>

                            <div className="campo">
                                <label>🏷️ Tipo de Negocio</label>
                                <select
                                    name="businessType"
                                    value={formData.businessType}
                                    onChange={handleChange}
                                >
                                    <option value="">Seleccione tipo</option>
                                    <option value="restaurant">Restaurante</option>
                                    <option value="cafe">Cafetería</option>
                                    <option value="bar">Bar</option>
                                </select>
                                {errors.businessType && <span className="error">{errors.businessType}</span>}
                            </div>

                            <div className="campo">
                                <label>📝 Descripción</label>
                                <textarea
                                    name="businessDescription"
                                    placeholder="Describe tu negocio en 50-200 palabras"
                                    rows={4}
                                    value={formData.businessDescription}
                                    onChange={handleChange}
                                />
                                {errors.businessDescription && <span className="error">{errors.businessDescription}</span>}
                            </div>

                            <div className="campo">
                                <label>📅 Fecha de Apertura</label>
                                <input
                                    type="date"
                                    name="openingDate"
                                    value={formData.openingDate}
                                    onChange={handleChange}
                                />
                                {errors.openingDate && <span className="error">{errors.openingDate}</span>}
                            </div>

                            <div className="form-actions">
                                <button type="button" onClick={nextStep} className="btn-next">
                                    Siguiente ➡️
                                </button>
                            </div>
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h2>📍 Ubicación y Contacto</h2>

                            <div className="campo">
                                <label>📌 Dirección Exacta</label>
                                <input type="text" name="businessAddress" placeholder="Calle, N° y referencia" value={formData.businessAddress} onChange={handleChange} required />
                            </div>

                            <div className="campo">
                                <label>🏙️ Distrito</label>
                                <input type="text" name="businessDistrict" value={formData.businessDistrict} onChange={handleChange} required />
                            </div>

                            <div className="campo">
                                <label>🏡 Ciudad</label>
                                <input type="text" name="businessCity" value={formData.businessCity} onChange={handleChange} required />
                            </div>

                            <div className="campo">
                                <label>📞 Teléfono</label>
                                <input type="tel" name="businessPhone" value={formData.businessPhone} onChange={handleChange} required />
                            </div>

                            <div className="campo">
                                <label>📧 Correo Electrónico</label>
                                <input type="email" name="businessEmail" value={formData.businessEmail} onChange={handleChange} required />
                            </div>

                            <div className="form-actions">
                                <button type="button" onClick={prevStep}>⬅️ Anterior</button>
                                <button type="button" onClick={nextStep} className="btn-next">Siguiente ➡️</button>
                            </div>
                        </>
                    )}

                    {step === 3 && (
                        <>
                            <h2>📑 Documentación Legal</h2>

                            <div className="campo">
                                <label>📄 Permiso de Funcionamiento</label>
                                <input type="file" name="businessPermit" accept=".pdf,.jpg,.png" onChange={handleChange} required />
                            </div>

                            <div className="campo">
                                <label>🪪 Documento de Identidad</label>
                                <input type="file" name="businessID" accept=".pdf,.jpg,.png" onChange={handleChange} required />
                            </div>

                            <div className="campo">
                                <label>📎 Documentos Adicionales (opcional)</label>
                                <input type="file" name="additionalDocs" multiple onChange={handleChange} />
                            </div>

                            <div className="form-actions">
                                <button type="button" onClick={prevStep}>⬅️ Anterior</button>
                                <button type="button" onClick={nextStep} className="btn-next">Siguiente ➡️</button>
                            </div>
                        </>
                    )}

                    {step === 4 && (
                        <>
                            <h2>📷 Imágenes y Confirmación</h2>

                            <div className="campo">
                                <label>🏠 Fotos del Establecimiento (mínimo 3)</label>
                                <input type="file" name="businessPhotos" multiple required onChange={handleChange} />
                            </div>

                            <div className="campo day-hour">
                                <label>⏰ Horario (Lunes)</label>
                                <input type="time" name="mondayOpen" value={formData.mondayOpen} onChange={handleChange} />
                                <span>a</span>
                                <input type="time" name="mondayClose" value={formData.mondayClose} onChange={handleChange} />
                            </div>

                            <div className="checkbox-group">
                                <input type="checkbox" name="termsAgreement" checked={formData.termsAgreement} onChange={handleChange} required />
                                <label>Acepto los términos y condiciones y confirmo que la información es verídica*</label>
                            </div>

                            <div className="form-actions">
                                <button type="button" onClick={prevStep}>⬅️ Anterior</button>
                                <button type="submit" className="btn-submit">✅ Enviar Registro</button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </>
    );
}
