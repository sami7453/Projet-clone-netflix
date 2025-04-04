const pool = require("../db/pool");

class User {
    // ----------------- CRUD -----------------

    static async getAllUsers() {
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    }

    static async getUserById(id) {
        const result = await pool.query(
            "SELECT * FROM users WHERE id = $1",
            [id]
        );
        return result.rows[0];
    }

    static async getUserByEmail(email) {
        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email]
        );
        return result.rows[0];
    }

    static async createUser({ firstName, lastName, email, password, role = "user" }) {
        const result = await pool.query(
            "INSERT INTO users (first_name, last_name, email, password, role) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [firstName, lastName, email, password, role]
        );
        return result.rows[0];
    }

    static async updateUser(id, { firstName, lastName, email, password, avatar }) {
        const result = await pool.query(
            "UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, avatar = $5 WHERE id = $6 RETURNING *",
            [firstName, lastName, email, password, avatar, id]
        );
        return result.rows[0];
    }

    static async deleteUser(id) {
        const result = await pool.query(
            "DELETE FROM users WHERE id = $1",
            [id]
        );
        return result.rowCount;
    }
}

module.exports = User;
