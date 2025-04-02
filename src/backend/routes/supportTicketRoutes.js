const express = require("express");
const router = express.Router();
const SupportTicket = require("../models/supportTicket");

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const supportTickets = await SupportTicket.getAllSupportTickets();
        res.status(200).json(supportTickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const supportTicket = await SupportTicket.getSupportTicketById(req.params.id);
        supportTicket
            ? res.status(200).json(supportTicket)
            : res.status(404).json({ message: "Support ticket not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { firstName, lastName, movieId, seriesId } = req.body;
        if (!firstName || !lastName || !movieId || !seriesId) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const supportTicket = await SupportTicket.createSupportTicket({ firstName, lastName,  movieId, seriesId });
        res.status(201).json(supportTicket);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { firstName, lastName, movieId, seriesId } = req.body;
        if (!firstName || !lastName || !movieId || !seriesId) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const supportTicket = await SupportTicket.updateSupportTicket(req.params.id, { firstName, lastName, movieId, seriesId });
        supportTicket
            ? res.status(200).json(supportTicket)
            : res.status(404).json({ message: "Support ticket not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const supportTicket = await SupportTicket.deleteSupportTicket(req.params.id);
        supportTicket
            ? res.status(200).json(supportTicket)
            : res.status(404).json({ message: "Support ticket not found" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ----------------- EXTRA -----------------

router.get("/users/:id", async (req, res) => {
    try {
        const supportTickets = await SupportTicket.getSupportTicketsByUserId(req.params.id);
        res.status(200).json(supportTickets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
