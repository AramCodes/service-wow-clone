const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protectedRoute = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // sets the token from the header
            token = req.headers.authorization.split(" ")[1];
            // verifies if the token is valid
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            // gets the user from the token
            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            console.error(`Error: ${error}`);
            res.status(401);
            throw new Error("Not Authorized");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not Authorized");
    }
});

module.exports = { protectedRoute };
