// server.js (ejemplo básico)
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();

// Configuración de Multer para subir archivos
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        let uploadPath = 'uploads/';
        
        if(file.fieldname === 'businessLogo') {
            uploadPath += 'logos/';
        } else if(file.fieldname === 'businessPhotos') {
            uploadPath += 'photos/';
        } else {
            uploadPath += 'documents/';
        }
        
        if(!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        
        cb(null, uploadPath);
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Ruta para registrar negocio
app.post('/api/register-business', upload.fields([
    { name: 'businessLogo', maxCount: 1 },
    { name: 'businessPhotos', maxCount: 10 },
    { name: 'businessPermit', maxCount: 1 },
    { name: 'businessID', maxCount: 1 },
    { name: 'additionalDocs', maxCount: 5 }
]), (req, res) => {
    // Aquí procesarías los datos del formulario y los archivos subidos
    // Verificar RUC con API externa
    // Guardar en base de datos
    // Enviar correo de verificación
    
    res.json({ 
        success: true,
        message: 'Negocio registrado exitosamente. Está pendiente de verificación.'
    });
});

// Ruta para obtener listado de negocios
app.get('/api/businesses', (req, res) => {
    // Obtener negocios de la base de datos
    // Aplicar filtros si existen
    
    res.json({
        success: true,
        data: [] // Array de negocios
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});