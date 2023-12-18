// gptRoutes.js

const express = require('express');
const axios = require('axios');
const { jsonParser } = require('../middleware/middlewares');

const router = express.Router();

const gptApiEndpoint = 'YOUR API ENDPOINT GIVEN BY GPT '; // Update with your actual endpoint
const apiKey = 'API KEY'; // Update with your actual API key

// Endpoint for interacting with the GPT API
router.post('/generate-text', jsonParser, async (req, res) => {
  try {
    const { prompt } = req.body;

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    };

    const data = {
      prompt,
      max_tokens: 100,
    };

    const response = await axios.post(gptApiEndpoint, data, { headers });

    const generatedText = response.data.choices[0].text;

    res.json({ generatedText });
  } catch (error) {
    console.error('Error connecting to GPT API:', error.message);
    res.status(error.response ? error.response.status : 500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


// A FEW NOTES 

// 1. You will need to update the gptApiEndpoint and apiKey variables with your actual values.
// 2. The /generate-text endpoint is expecting a JSON body with a prompt property.
// 3. Keep your credentials inside a .env file which is environment veriable that would be safer 
// You can also write error corrections and configs for this service

// Remember its just a structure for your app, you should modify and improve that service, create request limits, port managements, more middlewares etc. 