const pool = require("../db/pool");

class Actor {
    // ----------------- CRUD -----------------

    static async getAllActors() {
        const result = await pool.query("SELECT * FROM actors");
        return result.rows;
    }

    static async getActorById(id) {
        const result = await pool.query(
            "SELECT * FROM actors WHERE id = $1",
            [id]
        );
        return result.rows[0];
    }

    static async createActor({ firstName, lastName, movieId, seriesId }) {
        const result = await pool.query(
            "INSERT INTO actors (first_name, last_name, movie_id, series_id) VALUES ($1, $2, $3, $4) RETURNING *",
            [firstName, lastName, movieId, seriesId]
        );
        return result.rows[0];
    }

    static async updateActor(id, { firstName, lastName, movieId, seriesId }) {
        const result = await pool.query(
            "UPDATE actors SET first_name = $1, last_name = $2, movie_id = $3, series_id = $4 WHERE id = $5 RETURNING *",
            [firstName, lastName, movieId, seriesId, id]
        );
        return result.rows[0];
    }

    static async deleteActor(id) {
        await pool.query(
            "DELETE FROM actors WHERE id = $1",
            [id]
        );
    }

    // ----------------- EXTRA -----------------

    static async getActorsByMovieId(id) {
        const result = await pool.query(
            "SELECT * FROM actors WHERE movie_id = $1",
            [id]
        );
        return result.rows;
    }

    static async getActorsBySeriesId(id) {
        const result = await pool.query(
            "SELECT * FROM actors WHERE series_id = $1",
            [id]
        );
        return result.rows;
    }
}

module.exports = Actor;
