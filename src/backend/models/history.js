const pool = require("../db/pool");

class History {
    // ----------------- CRUD -----------------

    static async getAllHistories() {
        const result = await pool.query("SELECT * FROM history");
        return result.rows;
    }

    static async getHistoryById(id) {
        const result = await pool.query("SELECT * FROM history WHERE id = $1", [id]);
        return result.rows[0];
    }

    static async createHistory({ userId, movieId }) {
        const result = await pool.query(
            "INSERT INTO history (user_id, movie_id) VALUES ($1, $2) RETURNING *",
            [userId, movieId]
        );
        return result.rows[0];
    }

    static async updateHistory(id, { userId, movieId }) {
        const result = await pool.query(
            "UPDATE history SET user_id = $1, movie_id = $2 WHERE id = $3 RETURNING *",
            [userId, movieId, id]
        );
        return result.rows[0];
    }

    static async deleteHistory(id) {
        const result = await pool.query("DELETE FROM history WHERE id = $1", [id]);
        return result.rowCount;
    }
}

module.exports = History;
