const express = require("express");
const router = express.Router();
const { getTickets, createTicket } = require("../controllers/ticketController");

const { protectedRoute } = require("../middleware/authMiddleware");

router
    .route("/")
    .get(protectedRoute, getTickets)
    .post(protectedRoute, createTicket);

module.exports = router;
