const pool = require('../db/pool');

class Movie {

    // func CRUD
    static async getAllMovie() {
        const result = await pool.query("SELECT * FROM movies");
        return result.rows;
    }

    static async getMovieById(id) {
        const result = await pool.query("SELECT * FROM movies WHERE id = $1", [id]);
        return result.rows[0];
    }

    static async addMovie(title, description, release_date, category, poster, category_id) {
        const result = await pool.query("INSERT INTO movies (title,description,release_date,category,poster,category_id) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *", [title, description, release_date, category, poster, category_id]);
        return result.rows[0];
    }

    static async updateMovie(id, title, description, release_date, category, poster, category_id) {
        const result = await pool.query("UPDATE movies SET title = $2,description = $3,release_date = $4,category = $5,poster = $6,category_id = $7 WHERE id = $1 RETURNING *", [id, title, description, release_date, category, poster, category_id]);
        return result.rows[0];
    }

    static async deleteMovie(id) {
        const result = await pool.query("DELETE FROM movies WHERE id = $1 RETURNING *", [id]);
        return result.rows[0];
    }

    // func additional
    static async getMovieByCategory(category_id) {
        const result = await pool.query("SELECT * FROM movies WHERE category_id = $1", [category_id]);
        return result.rows;
    }

    static async getMovieByPopularity() {
        const result = await pool.query(`
            SELECT movies.*
            FROM movies
            JOIN ratings ON movies.id = ratings.movie_id
            GROUP BY movies.id
            HAVING AVG(ratings.rating) >= 4
        `);
        return result.rows;
    }

    static async getThisMountMovie() {
        const result = await pool.query(`
            SELECT * FROM movies
            WHERE EXTRACT(MONTH FROM release_date) = EXTRACT(MONTH FROM CURRENT_DATE)
        `);
        return result.rows;
    }

    // static async getRecommendedMoviesForUser(user_id) {
    //     const query = `
    //         SELECT m.id, m.title, m.description, m.release_date, m.poster, c.name AS category, 
    //                COALESCE(AVG(r.rating), 0) AS avg_rating
    //         FROM movies m
    //         JOIN categories c ON m.category_id = c.id
    //         LEFT JOIN ratings r ON m.id = r.movie_id
    //         WHERE c.id IN (
    //             SELECT category_id FROM (
    //                 SELECT m.category_id, COUNT(*) AS score
    //                 FROM history h
    //                 JOIN movies m ON h.movie_id = m.id
    //                 WHERE h.user_id = $1
    //                 GROUP BY m.category_id

    //                 UNION ALL

    //                 SELECT m.category_id, COUNT(*) * 2 AS score
    //                 FROM favorites f
    //                 JOIN movies m ON f.movie_id = m.id
    //                 WHERE f.user_id = $1
    //                 GROUP BY m.category_id
    //             ) AS user_categories
    //             ORDER BY score DESC
    //             LIMIT 5
    //         )
    //         AND m.id NOT IN (
    //             SELECT movie_id FROM history WHERE user_id = $1
    //         )
    //         GROUP BY m.id, c.name
    //         ORDER BY avg_rating DESC, RANDOM()
    //         LIMIT 10;
    //     `;

    //     const result = await pool.query(query, [user_id]);
    //     return result.rows;
    // }






}

module.exports = Movie;