import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/weather", async (req, res) => {
    const city = req.query.city;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (data.cod === "404") {
            res.status(404).json({ message: "City not found" });
        } else {
            res.json(data);
        }
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

app.get("/autocomplete", async (req, res) => {
    const text = req.query.text;
    const apiKey = process.env.GEOAPIFY_API_KEY;

    if (!text || text.length < 3) return res.json([]);

    try {
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&type=city&format=json&limit=5&apiKey=${apiKey}`);
        const data = await response.json();

        const suggestions = Array.isArray(data.results)
  ? data.results.map(f => f.city || f.name).filter(Boolean)
  : [];

        res.json(suggestions);
    } catch (error) {
        res.status(500).json({ message: "Autocomplete error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
