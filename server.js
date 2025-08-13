const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/message`);
    res.send(`<h1>Frontend UI</h1><p>Message from backend: ${response.data.message}</p>`);
  } catch (error) {
    res.send(`<h1>Frontend UI</h1><p>Error: ${error.message}</p>`);
  }
});

app.listen(port, () => {
  console.log(`Frontend running at http://localhost:${port}`);
});
