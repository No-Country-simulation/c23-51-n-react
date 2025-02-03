const { prepareFiles } = require('../utils/prepareFiles')

class FilesController {
    constructor(filesModel) {
        this.filesModel = filesModel
    }
    async createFiles(req, res) {
        try {
            if (!req.files || req.files.length === 0) {
                return res.status(400).json({
                    status: 400,
                    message: 'No se encontraron archivos para subir'
                });
            }

            const fileArray = prepareFiles(req, req.files)

            const files = await this.filesModel.bulkInsert(fileArray)

            if (!files) {
                return res.status(400).json({
                    status: 400,
                    message: 'No se pudieron subir los archivos'
                })
            }

            return res.status(201).json({
                status: 201,
                data: files,
                message: 'Archivos subidos correctamente'
            })

        } catch (error) {
            console.log(error)
            res.status(400).json({
                error: error.message,
            })
        }
    }
}

module.exports = FilesController