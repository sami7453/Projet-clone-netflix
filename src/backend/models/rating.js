const pool = require("../db/pool");

class Rating {
    // ----------------- CRUD -----------------

    static async getAllRatings() {
        const result = await pool.query("SELECT * FROM ratings");
        return result.rows;
    }

    static async getRatingById(id) {
        const result = await pool.query(
            "SELECT * FROM ratings WHERE id = $1",
            [id]
        );
        return result.rows[0];
    }

    static async createRating({ movieId, userId, grade, title, description }) {
        const result = await pool.query(
            "INSERT INTO ratings (movie_id, user_id, grade, title, description) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [movieId, userId, grade, title, description]
        );
        return result.rows[0];
    }

    static async updateRating(id, { grade, title, description }) {
        const result = await pool.query(
            "UPDATE ratings SET grade = $1, title = $2, description = $3 WHERE id = $4 RETURNING *",
            [grade, title, description, id]
        );
        return result.rows[0];
    }

    static async deleteRating(id) {
        const result = await pool.query(
            "DELETE FROM ratings WHERE id = $1",
            [id]
        );
        return result.rowCount;
    }

    // ----------------- EXTRA -----------------
    
    static async getRatingsByUserId(id) {
        const result = await pool.query(
            "SELECT * FROM ratings WHERE user_id = $1",
            [id]
        );
        return result.rows;
    }

    static async getRatingsByMovieId(id) {
        const result = await pool.query(
            "SELECT * FROM ratings WHERE movie_id = $1",
            [id]
        );
        return result.rows;
    }

    static async getRatingsBySeriesId(id) {
        const result = await pool.query(
            "SELECT * FROM ratings WHERE series_id = $1",
            [id]
        );
        return result.rows;
    }
}

module.exports = Rating;
