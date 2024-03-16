const express = require("express");
var cors = require("cors"); // Middleware for Cross Origin Resource Sharing
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;
const app = express();

app.use(cors()); //CORS Middleware

// Connects to the database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the ServiceWow API",
    });
});

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tickets", require("./routes/ticketRoutes"));

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
