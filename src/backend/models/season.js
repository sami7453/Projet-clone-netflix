const pool = require("../db/pool");

class Season {
    // ----------------- CRUD -----------------
    
    static async getAllSeasons() {
        const result = await pool.query("SELECT * FROM seasons");
        return result.rows;
    }

    static async getSeasonsById(id) {
        const result = await pool.query("SELECT * FROM seasons WHERE id = $1", [id]);
        return result.rows[0];
    }

    static async createSeason({ seriesId, number, description, date, episodeCount }) {
        const result = await pool.query(
            "INSERT INTO seasons (series_id, season_number, description, release_date, episode_count) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [seriesId, number, description, date, episodeCount]
        );
        return result.rows[0];
    }

    static async updateSeason(id, { number, description, episodeCount }) {
        const result = await pool.query(
            "UPDATE seasons SET season_number = $1, description = $2, episode_count = $3 WHERE id = $4 RETURNING *",
            [number, description, episodeCount, id]
        );
        return result.rows[0];
    }

    static async deleteSeason(id) {
        await pool.query("DELETE FROM seasons WHERE id = $1", [id]);
    }
}

module.exports = Season;
