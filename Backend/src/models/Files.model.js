const logger = require('../utils/logger')

class FilesModel {
  constructor (db) {
    this.db = db
  }

  /*CREATE TABLE if NOT EXISTS `videos` (
  `id` int(11) PRIMARY KEY AUTO_INCREMENT,
  `training_id` int(11),
  `name` varchar(100),
  `url` text,
  `status` tinyint DEFAULT 1,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `updated_at` DATETIME ON UPDATE CURRENT_TIMESTAMP(),
  `deleted_at` DATETIME DEFAULT NULL
);*/

  async createFiles (files) {
    try {
      const pool = this.db
      return pool
/*
      const [result] = await pool.query(`INSERT INTO files
        SET name = ?,
        path = ?,
        type = ?,
        size = ?`,
      [files.name, files.path, files.type, files.size])

      return +result.affectedRows
      */
    } catch (error) {
      logger.error('Error interno del servidor: ', error)
      throw error
    }
  }
}


module.exports = FilesModel
