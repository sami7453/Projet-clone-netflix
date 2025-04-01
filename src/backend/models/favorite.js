const pool = require("../db/pool");

class Favorite {
    // ----------------- CRUD -----------------
    
    static async getAllFavorites() {
        const result = await pool.query("SELECT * FROM favorites");
        return result.rows;
    }

    static async getFavoriteById(id) {
        const result = await pool.query("SELECT * FROM favorites WHERE id = $1", [id]);
        return result.rows[0];
    }

    static async createFavorite({ userId, movieId, seriesId }) {
        const result = await pool.query(
            "INSERT INTO favorites (user_id, movie_id, series_id) VALUES ($1, $2, $3) RETURNING *",
            [userId, movieId, seriesId]
        );
        return result.rows[0];
    }

    static async updateFavorite(id, { userId, movieId, seriesId }) {
        const result = await pool.query(
            "UPDATE favorites SET user_id = $1, movie_id = $2, series_id = $3 WHERE id = $4 RETURNING *",
            [userId, movieId, seriesId, id]
        );
        return result.rows[0];
    }

    static async deleteFavorite(id) {
        pool.query("DELETE FROM favorites WHERE id = $1", [id]);
    }
}

module.exports = Favorite;
