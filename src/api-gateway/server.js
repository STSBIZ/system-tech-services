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

// Start the server
app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});
