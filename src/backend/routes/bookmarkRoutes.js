const express = require("express");
const router = express.Router();
const Bookmark = require("../models/bookmark");

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const bookmarks = await Bookmark.getAllBookmarks();
        res.status(200).json(bookmarks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const bookmark = await Bookmark.getBookmarkById(req.params.id);
        bookmark
            ? res.status(200).json(bookmark)
            : res.status(404).json({ message: "bookmark not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/:user_id/:movie_id", async (req, res) => {
    try {
        const { user_id, movie_id } = req.params;
        const bookmark = await Bookmark.createBookmark(user_id, movie_id);
        res.status(201).json(bookmark);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { user_id, movie_id } = req.body;
        if (!user_id || !movie_id) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const bookmark = await Bookmark.updateBookmark(req.params.id, user_id, movie_id);
        bookmark
            ? res.status(200).json(bookmark)
            : res.status(404).json({ message: "bookmark not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const bookmark = await Bookmark.deleteBookmark(req.params.id);
        bookmark
            ? res.status(200).json(bookmark)
            : res.status(404).json({ message: "bookmark not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ----------------- EXTRA -----------------

router.get("/users/:id", async (req, res) => {
    try {
        const bookmarks = await Bookmark.getBookmarksByUserId(req.params.id);
        res.status(200).json(bookmarks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;
