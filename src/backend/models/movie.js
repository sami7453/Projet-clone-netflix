const pool = require("../db/pool");

class Movie {
    // ----------------- CRUD -----------------

    static async getAllMovies() {
        const result = await pool.query("SELECT * FROM movies");
        return result.rows;
    }

    static async getMovieById(id) {
        const result = await pool.query(
            "SELECT * FROM movies WHERE id = $1",
            [id]
        );
        return result.rows[0];
    }

    static async createMovie({ title, description, releaseDate, category, poster, categoryId }) {
        const result = await pool.query(
            "INSERT INTO movies (title, description, release_date, category, poster, category_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [title, description, releaseDate, category, poster, categoryId]
        );
        return result.rows[0];
    }

    static async updateMovie(id, { title, description, releaseDate, category, poster, categoryId }) {
        const result = await pool.query(
            "UPDATE movies SET title = $1, description = $2, release_date = $3, category = $4, poster = $5, category_id = $6 WHERE id = $7 RETURNING *",
            [title, description, releaseDate, category, poster, categoryId, id]
        );
        return result.rows[0];
    }

    static async deleteMovie(id) {
        await pool.query(
            "DELETE FROM movies WHERE id = $1 RETURNING *",
            [id]
        );
    }

    // ----------------- EXTRA -----------------

    static async getTrendingMovies() {
        const result = await pool.query("SELECT * FROM movies LIMIT 5");
        return result.rows;
    }

    static async getRecommendMovies() {
        const result = await pool.query("SELECT * FROM movies LIMIT 10");
        return result.rows;
    }
}

module.exports = Movie;
