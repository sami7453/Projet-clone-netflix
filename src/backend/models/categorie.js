const pool = require('../db/pool');

class Categorie {
    // ----------------- CRUD -----------------

    static async getAllCategories() {
        const result = await pool.query('SELECT * FROM categories')
        return result.rows;
    }

    static async getCategoryById(id) {
        const result = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
        return result.rows[0];
    }
    
    static async createCategory({ name }) {
        const result = await pool.query(
            'INSERT INTO categories (name) VALUES ($1) RETURNING *',
            [name]
        );
        return result.rows[0];
    }

    static async updateCategory(id, { name }) {
        const result = await pool.query(
            'UPDATE categories SET name = $1 WHERE id = $2 RETURNING *',
            [name, id]
        );
        return result.rows[0];
    }
    
    static async deleteCategorie(id) {
        await pool.query('DELETE FROM categories WHERE id = $1', [id]);
    }
}

module.exports = Categorie;
