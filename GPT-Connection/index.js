// index.js

const express = require('express');
const { jsonParser } = require('./src/middleware/middlewares');
const gptRoutes = require('./src/routes/routes');
const cors = require('cors');


const app = express();
const port = 9000;
app.use(cors()); // CORS Config to reach the endpoint from anywhere
// Global middleware
app.use(jsonParser);

// Use the GPT routes
app.use('/gpt', gptRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
