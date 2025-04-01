const pool = require("../db/pool");

class Episode {
    // ----------------- CRUD -----------------
    
    static async getAllEpisodes() {
        const result = await pool.query("SELECT * FROM episodes");
        return result.rows;
    }

    static async getEpisodeById(id) {
        const result = await pool.query(
            "SELECT * FROM episodes WHERE id = $1",
            [id]
        );
        return result.rows[0];
    }

    static async createEpisode({ seasonId, number, title, description, date }) {
        const result = await pool.query(
            "INSERT INTO episode (season_id, episode_number, title, description, release_date) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [seasonId, number, title, description, date]
        );
        return result.rows[0];
    }

    static async updateEpisode(id, { number, title, description }) {
        const result = await pool.query(
            "UPDATE episodes SET episode_number = $1, title = $2, description = $3 WHERE = $4 RETURNING *",
            [number, title, description, id]
        );
        return result.rows[0];
    }

    static async deleteEpisode(id) {
        await pool.query(
            "DELETE FROM episodes WHERE id = $1",
            [id]
        );
    }
}

module.exports = Episode;
