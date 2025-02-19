const {Pool} = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

class favories{
    static async getALL(){
        const result = await pool.query("SELECT * FROM favorites")
        return result.rows
    }
    static async getUSERS(id){
        const result = await pool.query("SELECT user_id FROM favorites WHERE id = $1", [id])
        return result.rows
    }
    static async getMOVIE(id){
        const result = await pool.query("SELECT movie_id FROM favorites WHERE id = $1", [id])
        return result.rows
    }
    static async getSERIE(id){
        const result = await pool.query("SELECT series_id FROM favorites WHERE id = $1", [id])
        return result.rows
    }
    static async createFavories({user_id, movie_id, series_id}){
        const result = await pool.query('INSERT INTO favorites (user_id, movie_id, series_id) VALUES ($1, $2, $3) RETURNING *', [user_id, movie_id, series_id]);
        return result.rows[0];
    }
    static async deleteFavories(id){
        const result  = await pool.query('DELETE FROM favorites WHERE id = $1', [id]);
        return result.rowCount;
    }
}

module.exports = favories;