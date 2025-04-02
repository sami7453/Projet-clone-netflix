const pool = require("../db/pool");

class Bookmark {
    // ----------------- CRUD -----------------
    
    static async getAllBookmarks() {
        const result = await pool.query("SELECT * FROM bookmarks");
        return result.rows;
    }

    static async getBookmarkById(id) {
        const result = await pool.query(
            "SELECT * FROM bookmarks WHERE id = $1",
            [id]
        );
        return result.rows[0];
    }

    static async createBookmark({ userId, movieId, seriesId }) {
        const result = await pool.query(
            "INSERT INTO bookmarks (user_id, movie_id, series_id) VALUES ($1, $2, $3) RETURNING *",
            [userId, movieId, seriesId]
        );
        return result.rows[0];
    }

    static async updateBookmark(id, { userId, movieId, seriesId }) {
        const result = await pool.query(
            "UPDATE bookmarks SET user_id = $1, movie_id = $2, series_id = $3 WHERE id = $4 RETURNING *",
            [userId, movieId, seriesId, id]
        );
        return result.rows[0];
    }

    static async deleteBookmark(id) {
        pool.query(
            "DELETE FROM bookmarks WHERE id = $1",
            [id]
        );
    }

    // ----------------- EXTRA -----------------

    static async getBookmarksByUserId(id) {
        const result = await pool.query(
            "SELECT * FROM bookmarks WHERE user_id = $1",
            [id]
        );
        return result.rows;
    }
}

module.exports = Bookmark;
