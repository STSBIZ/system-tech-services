/*!
 * Author: Abdul Sabry
 * Version: 1.0.1
 * Date: <replace_with_today's_date>
 * Description: A basic API Gateway for System Technology Services
 */

const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


// Basic route to test the API Gateway
app.get('/', (req, res) => {
  res.json({ message: 'Hello from the API Gateway!' });
});

/*
 * Placeholder route for Auth Service
 */
app.use('/auth', (req, res) => {
  // Later, we'll forward requests to the Auth microservice
  res.json({ message: 'Auth Service Placeholder' });
});

/*
 * Placeholder route for CRM Service
 */
app.use('/crm', (req, res) => {
  res.json({ message: 'CRM Service Placeholder' });
});

/*
 * Placeholder route for Repair Tracking Service
 */
app.use('/repair', (req, res) => {
  res.json({ message: 'Repair Service Placeholder' });
});

/*
 * Placeholder route for AI Recommendation Engine
 */
app.use('/ai', (req, res) => {
  res.json({ message: 'AI Service Placeholder' });
});

/*
 * Placeholder route for Inventory Management
 */
app.use('/inventory', (req, res) => {
  res.json({ message: 'Inventory Service Placeholder' });
});

/*
 * Placeholder route for E-waste Tracking Service
 */
app.use('/ewaste', (req, res) => {
  res.json({ message: 'E-waste Service Placeholder' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
