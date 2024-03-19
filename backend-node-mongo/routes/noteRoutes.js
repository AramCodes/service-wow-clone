const express = require("express");
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require("../controllers/noteController");

const { protectedRoute } = require("../middleware/authMiddleware");

router.route("/").get(protectedRoute, getNotes).post(protectedRoute, addNote);

module.exports = router;
