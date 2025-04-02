const express = require("express");
const router = express.Router();
const Category = require("../models/category");

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const categories = await Category.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const category = await Category.getCategoryById(req.params.id);
        category
            ? res.status(200).json(category)
            : res.status(404).json({ message: "Category not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const category = await Category.createCategory(name);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const category = await Category.updateCategory(req.params.id, name);
        category
            ? res.status(200).json(category)
            : res.status(404).json({ message: "Category not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const category = await Category.deleteCategory(req.params.id);
        category
            ? res.status(200).json(category)
            : res.status(404).json({ message: "Category not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
