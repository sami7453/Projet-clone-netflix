const express = require("express");
const router = express.Router();
const SupportTicket = require("../models/supportTicket");

// ----------------- CRUD -----------------

// GET all support tickets
router.get("/", async (req, res) => {
    try {
        const actors = await SupportTicket.getAllSupportTickets();
        res.status(200).json(actors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET support ticket by id
router.get("//:id", async (req, res) => {
    try {
        const actor = await SupportTicket.getSupportTicketById(req.params.id);
        actor
            ? res.status(200).json(actor)
            : res.status(404).json({ message: "Actor not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST support ticket
router.post("/", async (req, res) => {
    try {
        const { firstName, lastName, movieId, seriesId } = req.body;
        if (!firstName || !lastName || !movieId || !seriesId) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const actor = await SupportTicket.createSupportTicket({ firstName, lastName,  movieId, seriesId });
        res.status(201).json(actor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// PUT support ticket
router.put("/:id", async (req, res) => {
    try {
        const { firstName, lastName, movieId, seriesId } = req.body;
        if (!firstName || !lastName || !movieId || !seriesId) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const actor = await SupportTicket.updateSupportTicket(req.params.id, { firstName, lastName, movieId, seriesId });
        actor
            ? res.status(200).json(actor)
            : res.status(404).json({ message: "Actor not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE support ticket
router.delete("/:id", async (req, res) => {
    try {
        const actor = await SupportTicket.deleteSupportTicket(req.params.id);
        actor
            ? res.status(200).json(actor)
            : res.status(404).json({ message: "Actor not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ----------------- EXTRA -----------------

// GET support ticket by user id
router.get("/users/:user_id", async (req, res) => {});

module.exports = router;
