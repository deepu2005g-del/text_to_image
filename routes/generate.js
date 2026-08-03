const express = require("express");
const axios = require("axios");
const FormData = require("form-data");

const router = express.Router();

// POST /generate
router.post("/", async (req, res) => {
    try {
        // Get prompt from request body
        const { prompt } = req.body;

        // Validate prompt
        if (!prompt || prompt.trim() === "") {
            return res.status(400).json({
                success: false,
                error: "Prompt is required."
            });
        }

        // Create FormData
        const form = new FormData();
        form.append("prompt", prompt);

        // Call Clipdrop API
        const response = await axios.post(
            "https://clipdrop-api.co/text-to-image/v1",
            form,
            {
                headers: {
                    "x-api-key": process.env.CLIPDROP_API_KEY,
                    ...form.getHeaders()
                },
                responseType: "arraybuffer"
            }
        );

        // Send image back to client
        res.setHeader("Content-Type", "image/png");
        res.send(response.data);

    } catch (error) {

        // Clipdrop returned an error
        if (error.response) {
            const status = error.response.status;

            // Try to read JSON error body
            let errorMessage = "Unknown error";

            try {
                const data = JSON.parse(
                    Buffer.from(error.response.data).toString()
                );
                errorMessage = data.error || errorMessage;
            } catch (e) {
                // Ignore parsing error
            }

            return res.status(status).json({
                success: false,
                status,
                error: errorMessage
            });
        }

        // Unexpected server error
        console.error("Server Error:", error.message);

        res.status(500).json({
            success: false,
            error: "Internal Server Error"
        });
    }
});

module.exports = router;