const express = require("express");
const fetchData = require("./fetchData");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.ORIGIN || "http://localhost:5173", // Replace with the allowed origin(s)
};

const corsMiddleware = cors(corsOptions);
app.use(corsMiddleware);

// Get All Cats:
app.get("/api/getData", async (req, res) => {
  try {
    const url = `https://api.thecatapi.com/v1/breeds`;
    const data = await fetchData(url);
    const filteredData = await data.map(
      ({
        id,
        name,
        description,
        temperament,
        adaptability,
        origin,
        life_span,
        affection_level,
        child_friendly,
        grooming,
        health_issues,
        social_needs,
        stranger_friendly,
        image,
        intelligence,
      }) => ({
        id,
        name,
        description,
        temperament,
        origin,
        life_span,
        adaptability,
        affection_level,
        child_friendly,
        grooming,
        health_issues,
        social_needs,
        stranger_friendly,
        image,
        origin,
        intelligence,
      })
    );
    res.json(filteredData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get More Images:
app.get("/api/breedimages/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&include_breeds=true&limit=8`;
    const data = await fetchData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Handling other request methods (e.g., PUT, DELETE, etc.)
app.use((req, res) => {
  res.status(405).json({ error: "Method Not Allowed" });
});

app.listen(port, () => {
  console.log(`Server is running`);
});
