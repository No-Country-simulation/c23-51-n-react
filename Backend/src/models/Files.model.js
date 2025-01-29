const logger = require('../utils/logger');

class FilesModel {
  constructor(db) {
    this.db = db;
  }

  async bulkInsert(files) {
    try {
      const pool = this.db;

      const values = files.map(file => [
        file.training_id,
        file.name,
        file.url,
        1, // status por defecto
        new Date() // uploaded_at
      ]);

      const [result] = await pool.query(
        `INSERT INTO videos (training_id, name, url, status, created_at) VALUES ?`,
        [values]
      );

      return result.affectedRows;
    } catch (error) {
      logger.error('Error interno del servidor: ', error);
      throw error;
    }
  }
}

module.exports = FilesModel;