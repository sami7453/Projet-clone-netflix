const express = require("express");
const router = express.Router();
const SupportTicket = require("../models/supportTicket");

// ----------------- CRUD -----------------

router.get("/", async (req, res) => {
    try {
        const supportTickets = await SupportTicket.getAllSupportTickets();
        res.status(200).json(supportTickets);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const supportTicket = await SupportTicket.getSupportTicketById(req.params.id);
        supportTicket
            ? res.status(200).json(supportTicket)
            : res.status(404).json({ message: "Support ticket not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const { userId, title, description } = req.body;
        if (!userId || !title || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const supportTicket = await SupportTicket.createSupportTicket({ userId, title, description });
        res.status(201).json(supportTicket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const supportTicket = await SupportTicket.updateSupportTicket(req.params.id, { title, description });
        supportTicket
            ? res.status(200).json(supportTicket)
            : res.status(404).json({ message: "Support ticket not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const supportTicket = await SupportTicket.deleteSupportTicket(req.params.id);
        supportTicket
            ? res.status(200).json(supportTicket)
            : res.status(404).json({ message: "Support ticket not found" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
