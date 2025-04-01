const pool = require("../db/pool");

class Series {
    // ----------------- CRUD -----------------

    static async getAllSeries() {
        const result = await pool.query("SELECT * FROM series");
        return result.rows;
    }

    static async getSerieById(id) {
        const result = await pool.query("SELECT * FROM series WHERE id = $1", [id]);
        return result.rows[0];
    }

    static async createSerie({ title, description, releaseDate, poster, categoryId }) {
        const result = await pool.query(
            "INSERT INTO series (title, description, release_date, poster, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [title, description, releaseDate, poster, categoryId]
        );
        return result.rows[0];
    }

    static async updateSerie(id, { title, description, poster }) {
        const result = await pool.query(
            "UPDATE series SET title = $1, description = $2, poster = $3 WHERE id = $4 RETURNING *",
            [title, description, poster, id]
        );
        return result.rows[0];
    }

    static async deleteSerie(id) {
        await pool.query("DELETE FROM series WHERE id = $1", [id]);
    }
}

module.exports = Series;
