const express = require("express");
const router = express.Router();
const User = require("../models/user");

// ----------------- CRUD -----------------

// GET all users
router.get("/", async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET user by id
router.get("/:id", async (req, res) => {
    try {
        const user = await User.getUserById(req.params.id);
        user
            ? res.status(200).json(user)
            : res.status(404).json({ message: "User not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST user
router.post("/", async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.createUser({ first_name, last_name, email, password });
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT user
router.put("/:id", async (req, res) => {});

// DELETE user
router.delete("/:id", async (req, res) => {
    try {
        await User.deleteUser(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ----------------- EXTRA -----------------

// POST register
router.post("/register", async (req, res) => {});

// POST login
router.post("/login", async (req, res) => {});

// POST logout
router.post("/logout", async (req, res) => {});

// PATCH update user first name
router.patch("/:id/first_name", async (req, res) => {});

// PATCH update user last name
router.patch("/:id/last_name", async (req, res) => {});

// PATCH update user email
router.patch("/:id/email", async (req, res) => {});

// PATCH update user password
router.patch("/:id/password", async (req, res) => {});

// PATCH update user avatar
router.patch("/:id/avatar", async (req, res) => {});

module.exports = router;
