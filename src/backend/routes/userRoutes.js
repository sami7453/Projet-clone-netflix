const express = require("express");
const router = express.Router();
const User = require("../models/user");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.getUserById(req.params.id);
        user
            ? res.status(200).json(user)
            : res.status(404).json({ message: "User not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;
        if (!first_name || !last_name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.getUserByEmail(email);
        if (user) {
            res.status(400).json({ message: "User already exists" });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        // Remapper first_name et last_name aux clés attendues par createUser et fixer role à "user"
        const newUser = await User.createUser({
            firstName: first_name,
            lastName: last_name,
            email,
            password: hashedPassword,
            role: "user"
        });
        res.status(201).json({ message: "User registered successfully", newUser });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// ----------------- EXTRA -----------------

// TODO

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.getUserByEmail(email);
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ erroror: "Invalid credentials" });
        }

        const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // On renvoie également les infos utilisateur (en utilisant user.first_name comme username)
        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user.id,
                username: user.first_name,
                email: user.email
            }
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



router.post("/logout", async (req, res) => {

});

router.patch("/:id/first_name", async (req, res) => { });

router.patch("/:id/last_name", async (req, res) => { });

router.patch("/:id/email", async (req, res) => { });

router.patch("/:id/password", async (req, res) => { });

router.patch("/:id/avatar", async (req, res) => { });

module.exports = router;
