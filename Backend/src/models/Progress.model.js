const logger = require("../utils/logger")

class ProgressModel {
    constructor(db) {
        this.db = db
    }

    async createProgress(progress) {
        try {
            const { user_id, training_id, calories_burned, started_at, finished_at, status } = progress
            const pool = this.db

            const [result] = await pool.query(`INSERT INTO progress (user_id, training_id, calories_burned, started_at, finished_at, status)VALUES (?, ?, ?, ?, ?, ?)`
            [user_id, training_id, calories_burned, started_at, finished_at, status]
            );

            return result.affectedRows
        } catch (error) {
            logger.error('Error interno del servidor: ', error);
            throw error;
        }
    }

    async getProgressById(id) {
        try {
            const pool = this.db
            const [rows] = await pool.query('SELECT * FROM progress WHERE id = ?'[id])
            return rows[0]
        } catch (error) {
            logger.error('Error interno del servidor: ', error);
            throw error;
        }
    }

    async updateProgress(id, progress) {
        try {
            const { user_id, training_id, calories_burned, started_at, finished_at, status } = progress
            const pool = this.db

            const [reesult] = await pool.query(`UPDATE progress SET user_id = ?, training_id =?, calories_burned=?, started_at=?, finished_at=?, status=? WHERE id = ?`,
                [user_id, training_id, calories_burned, started_at, finished_at, status, id]
            )
            return result.affectedRows;
        } catch (error) {
            logger.error('Error interno del servidor: ', error);
            throw error;
        }
    }

    async deleteProgress(id) {
        try {
            const pool = this.db
            const [result] = await pool.query('UPDATE progress SET deleted_at = NOW() WHERE id = ?', [id])
            return result.affectedRows;
        } catch (error) {
            logger.error('Error interno del servidor: ', error);
            throw error;
        }
    }
}