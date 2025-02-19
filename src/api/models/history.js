const pool = require('../db/pool');

class History {
    static async getAllByUser(userId) {
        const result = await pool.query("SELECT * FROM history WHERE user_id = $1", [userId]);
        return result.rows;
    }

    static async addToHistory(userId, movieId) {
        const result = await pool.query(
            "INSERT INTO history (user_id, movie_id) VALUES ($1, $2) RETURNING *",
            [userId, movieId]
        );
        return result.rows[0];
    }

    static async clearUserHistory(userId) {
        const result = await pool.query("DELETE FROM history WHERE user_id = $1", [userId]);
        return result.rowCount;
    }

    static async deleteHistoryById(historyId) {
        const result = await pool.query("DELETE FROM history WHERE id = $1", [historyId]);
        return result.rowCount;
    }
}

module.exports = History;
