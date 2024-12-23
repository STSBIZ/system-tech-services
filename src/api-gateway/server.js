/*
  Author: Abdul Sabry
  Version: 1.0.0
  Date: YYYY-MM-DD
  Description:
    Basic API Gateway for System Technology Services.
*/

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Simple health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'API Gateway is running' });
});

// Placeholder routes for microservices
app.use('/auth', (req, res) => {
  res.send('Auth Service Route');
});

app.use('/crm', (req, res) => {
  res.send('CRM Service Route');
});

app.use('/repair', (req, res) => {
  res.send('Repair Tracking Route');
});

app.use('/ai', (req, res) => {
  res.send('AI Recommendation Engine Route');
});

app.use('/inventory', (req, res) => {
  res.send('Inventory Management Route');
});

app.use('/ewaste', (req, res) => {
  res.send('E-waste Tracking Route');
});

// Start the server
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
