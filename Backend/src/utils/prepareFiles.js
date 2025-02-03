const ip = require("ip");
require('dotenv').config()

function prepareFiles(req, files,) {
    let filesArray = []
    for (const file of files) {
        let data = {
            training_id: req.params.id,
            name: file.filename,
            url: `${req.protocol}://${ip.address()}:${process.env.PORT}/public/${file.filename}`
        }
        filesArray.push(data);
    }
    return filesArray;
}

module.exports = { prepareFiles }