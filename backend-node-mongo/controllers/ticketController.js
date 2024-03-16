const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc gets all of the current user's tickets
// @route GET /api/tickets/
// @access Private
const getTickets = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "getTickets" });
});

// @desc creates a new ticket  for the current user
// @route POST /api/tickets/
// @access Private
const createTicket = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "createTicket" });
});

module.exports = {
    getTickets,
    createTicket,
};
