const asyncHandler = require("express-async-handler");

//this route allow users to register @route /api/users/

const { error } = require("console");

// @access Public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please enter all fields");
    }

    res.send("Register User Route");
});

//this route allow users to login @route /api/users/
// @access Public
const loginUser = asyncHandler(async (req, res) => {
    res.send("Login User Route");
});

module.exports = {
    registerUser,
    loginUser,
};
