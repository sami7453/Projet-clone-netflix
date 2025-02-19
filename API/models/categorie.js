const pool = require('../db/pool');

class categorie {
    static async getAll() {
        const result = await pool.query("SELECT * FROM categories")
        return result.rows
    }
    static async getID() {
        const result = await pool.query("SELECT id FROM categories")
        return result.rows
    }
    // static async getNAME(){
    //     const result = await pool.query("SELECT name FROM categories")
    //     return result.rows
    // }
    static async createCategorie({ name }) {
        const result = await pool.query('INSERT INTO categories (name) VALUES ($1) RETURNING *', [name]);
        return result.rows[0];
    }
    static async deleteCategorie(id) {
        const result = await pool.query('DELETE FROM categories WHERE id = $1', [id]);
        return result.rowCount;
    }
}
module.exports = categorie;