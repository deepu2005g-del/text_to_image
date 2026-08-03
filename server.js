// Load environment variables from .env
require("dotenv").config();

// Import packages
const express = require("express");
const cors = require("cors");

// Import routes
const generateRoute = require("./routes/generate");

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route (optional)
app.get("/", (req, res) => {
    res.json({
        message: "Text-to-Image API is running 🚀"
    });
});

// Generate image route
app.use("/generate", generateRoute);

// Handle unknown routes
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});