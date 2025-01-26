const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Crear la carpeta 'public/' si no existe
const uploadDir = path.join(__dirname, '../../public');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

const createUploadMiddleware = (fileType, maxSize, maxFiles) => {

    console.log(fileType, maxSize, maxFiles)
    // Configuración de multer
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, uploadDir);
        },

        filename: function (req, file, cb) {
            const extension = path.extname(file.originalname); // Extrae la extensión (.mp4, .avi, etc.)
            const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
            cb(null, uniqueSuffix + extension);
        }
    });

    const fileFilter = (req, file, cb) => {
        // Verificar el tipo de archivo
        if (file.mimetype !== fileType) {
            return cb(new Error(`Solo se permiten archivos de tipo ${fileType}`), false);
        }
        cb(null, true);
    };

    const limits = {
        fileSize: maxSize // Limitar el tamaño del archivo
    };

    const upload = multer({
        storage: storage,
        fileFilter: fileFilter,
        limits: limits
    }).array('files', maxFiles); // Permitir hasta maxFiles archivos

    // Middleware para manejar la subida de archivos
    return (req, res, next) => {
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                // Errores de multer
                return res.status(400).json({ error: err.message });
            } else if (err) {
                // Otros errores
                return res.status(400).json({ error: err.message });
            }
            // Todo bien, continuar con la siguiente middleware
            next();
        });
    };
};

module.exports = createUploadMiddleware;