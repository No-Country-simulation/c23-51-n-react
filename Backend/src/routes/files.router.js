const router = require('express').Router()
const FilesController = require('../controllers/Files.controller.js')
const FilesModel = require('../models/Files.model.js')
const { connection: pool } = require('../config/db.js')

const createUploadMiddleware = require('../middlewares/multerSetup.js')
const dataFiles = {
    fileType: "video/mp4",
    maxSize: 50000000000,
    maxFiles: 2
}

const filesModel = new FilesModel(pool)
const filesController = new FilesController(filesModel)

router.route("/files")
    .post(createUploadMiddleware(dataFiles.fileType, dataFiles.maxSize, dataFiles.maxFiles), filesController.createFiles.bind(filesController))

module.exports = router