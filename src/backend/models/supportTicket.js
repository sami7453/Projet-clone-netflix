const pool = require("../db/pool");

class SupportTicket {
    // ----------------- CRUD -----------------
    
    static async getAllSupportTickets() {
        const result = await pool.query("SELECT * FROM support_tickets");
        return result.rows;
    }

    static async getSupportTicketById(id) {
        const result = await pool.query(
            "SELECT * FROM support_tickets WHERE id = $1",
            [id]
        );
        return result.rows[0];
    }

    static async createSupportTicket({ userId, title, description }) {
        const result = await pool.query(
            "INSERT INTO support_tickets (user_id, title, description) VALUES ($1, $2, $3) RETURNING *",
            [userId, title, description]
        );
        return result.rows[0];
    }

    static async updateSupportTicket(id, { title, description }) {
        const result = await pool.query(
            "UPDATE support_tickets SET title = $1, description = $2 WHERE id = $3 RETURNING *",
            [title, description, id]
        );
        return result.rows[0];
    }

    static async deleteSupportTicket(id) {
        await pool.query(
            "DELETE FROM support_tickets WHERE id = $1",
            [id]
        );
    }
}

module.exports = SupportTicket;
