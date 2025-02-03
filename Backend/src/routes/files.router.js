const router = require('express').Router();
const FilesController = require('../controllers/Files.controller.js');
const FilesModel = require('../models/Files.model.js');
const { connection: pool } = require('../config/db.js');

const createUploadMiddleware = require('../middlewares/multerSetup.js');

//aqui definimos los tipos de archivos que se pueden subir
// como su peso y cantidad
const dataFiles = {
    fileTypes: ["image/jpeg", "image/png"],
    maxSize: 5000000, // 5 MB
    maxFiles: 2
};

const filesModel = new FilesModel(pool);
const filesController = new FilesController(filesModel);

// se envia el training_id para la asociacion de los archivos con el training
router.route("/files/:id")
    .post(createUploadMiddleware(dataFiles.fileTypes, dataFiles.maxSize, dataFiles.maxFiles), filesController.createFiles.bind(filesController));

module.exports = router;