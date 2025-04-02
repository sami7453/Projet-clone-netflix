const express = require("express");
const router = express.Router();
const User = require("../models/user");

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

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

router.put("/:id", async (req, res) => {});

router.delete("/:id", async (req, res) => {
    try {
        await User.deleteUser(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ----------------- EXTRA -----------------

// TODO

router.post("/register", async (req, res) => {});

router.post("/login", async (req, res) => {});

router.post("/logout", async (req, res) => {});

router.patch("/:id/first_name", async (req, res) => {});

router.patch("/:id/last_name", async (req, res) => {});

router.patch("/:id/email", async (req, res) => {});

router.patch("/:id/password", async (req, res) => {});

router.patch("/:id/avatar", async (req, res) => {});

module.exports = router;
