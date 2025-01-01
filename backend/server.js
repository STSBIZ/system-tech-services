const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
dleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .co
// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Midnnect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Base route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

app.use(express.json());

// Routes
app.get("/products", (req, res) => {
  res.send("Fetch all products");
});

app.post("/products", (req, res) => {
  const product = req.body;
  res.send(`Product ${product.name} added!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/sts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Database connection error:", err));
