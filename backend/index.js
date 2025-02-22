const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/transformation_rules";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// PostgreSQL Connection
const pool = new Pool({
    connectionString: process.env.POSTGRES_URI || "postgres://user:password@localhost:5432/openehr",
});

// Serve Angular frontend
app.use(express.static(path.join(__dirname, "../frontend/dist/frontend")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/frontend/index.html"));
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
