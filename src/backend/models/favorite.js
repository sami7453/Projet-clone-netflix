const pool = require('../db/pool');

class Favorite {
    static async getAllFavorites() {
        const result = await pool.query('SELECT * FROM favorites');
        return result.rows;
    }

    static async getFavoriteById(id) {
        const result = await pool.query(
            'SELECT * FROM favorites WHERE id = $1',
            [id]
        );
        return result.rows[0];
    }

    static async createFavorite({ userId, movieId, seriesId }) {
        const result = await pool.query(
            'INSERT INTO favorites (user_id, movie_id, series_id) VALUES ($1, $2, $3) RETURNING *',
            [userId, movieId, seriesId]
        );
        return result.rows[0];
    }

    static async deleteFavories(id) {
        pool.query(
            'DELETE FROM favorites WHERE id = $1',
            [id]
        );
    }
}

module.exports = Favorite;
