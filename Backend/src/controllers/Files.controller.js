const { prepareFiles } = require('../utils/prepareFiles')

class FilesController {
    constructor(filesModel) {
        this.filesModel = filesModel
    }
    async createFiles(req, res) {
        try {
            const fileArray = prepareFiles(req, req.files)
            const resul = await this.filesModel.createFiles(fileArray)

            if (!resul) {
                return res.status(400).json({
                    status: 400,
                    message: 'No se pudieron subir los archivos'
                })
            }

            return res.status(201).json({
                status: 201,
                data: resul,
                message: 'Archivos subidos correctamente'
            })

        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}

module.exports = FilesController