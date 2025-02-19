const pool = require('../db/pool');

class serie {
    static async getALL() {
        const result = await pool.query("SELECT * FROM series")
        return result.rows
    }
    static async getID() {
        const result = await pool.query("SELECT id FROM series")
        return result.rows
    }
    static async getTITRE(id) {
        const result = await pool.query("SELECT title FROM series WHERE id = $1", [id])
        return result.rows
    }
    static async getDESCRIPTION(id) {
        const result = await pool.query("SELECT description FROM series WHERE id = $1", [id])
        return result.rows
    }
    static async getSORTIE(id) {
        const result = await pool.query("SELECT release_date FROM series WHERE id = $1", [id])
        return result.rows
    }
    static async getAFFICHE(id) {
        const result = await pool.query("SELECT poster FROM series WHERE id = $1", [id])
        return result.rows
    }
    static async getCATEGORIE(id) {
        const result = await pool.query("SELECT category_id FROM series WHERE id = $1", [id])
        return result.rows
    }
    static async createSerie({ title, description, release_date, poster, category_id }) {
        const result = await pool.query('INSERT INTO series (title, description, release_date, poster, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [title, description, release_date, poster, category_id]);
        return result.rows[0];
    }
    static async deleteSerie(id) {
        const result = await pool.query("DELETE FROM series WHERE id = $1", [id]);
        return result.rowCount;
    }
}
module.exports = serie;