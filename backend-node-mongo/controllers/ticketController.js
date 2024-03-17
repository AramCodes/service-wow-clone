const asyncHandler = require("express-async-handler");

const Ticket = require("../models/ticketModel");

// @desc gets all of the current user's tickets
// @route GET /api/tickets/
// @access Private
const getTickets = asyncHandler(async (req, res) => {
    const tickets = await Ticket.find({ user: req.user.id });

    res.status(200).json(tickets);
});

// @desc gets a ticketby id
// @route GET /api/tickets/:id
// @access Private
const getTicket = asyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
        res.status(404);
        throw new Error("Ticket not found");
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("Not authorized");
    }

    res.status(200).json(ticket);
});

// @desc creates a new ticket  for the current user
// @route POST /api/tickets/
// @access Private
const createTicket = asyncHandler(async (req, res) => {
    const { product, description } = req.body;

    if (!product || !description) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    const newTicket = await Ticket.create({
        product,
        description,
        user: req.user.id,
        status: "new",
    });

    res.status(201).json(newTicket);
});

// @desc delete a ticket by id
// @route DELETE /api/tickets/:id
// @access Private
const deleteTicket = asyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
        res.status(404);
        throw new Error("Ticket not found");
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("Not authorized");
    }

    await ticket.deleteOne();

    res.status(200).json({ success: true });
});

// @desc update a ticketby id
// @route PUT /api/tickets/:id
// @access Private
const updateTicket = asyncHandler(async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
        res.status(404);
        throw new Error("Ticket not found");
    }

    if (ticket.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error("Not authorized");
    }

    const updatedTicket = await Ticket.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );

    res.status(200).json(updatedTicket);
});

module.exports = {
    getTicket,
    getTickets,
    createTicket,
    deleteTicket,
    updateTicket,
};
