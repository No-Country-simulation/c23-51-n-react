const { prepareFiles } = require('../utils/prepareFiles')

class FilesController {
    constructor(filesModel) {
        this.filesModel = filesModel
    }
    async createFiles(req, res) {
        try {
            console.log(prepareFiles(req.files))
            console.log(req.files)

        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}

module.exports = FilesController