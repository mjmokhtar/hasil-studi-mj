const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/api/data', async (req, res) => {
    try {
        const response = await axios.get('https://api-frontend.kemdikbud.go.id/detail_mhs/MDVGMTY1N0QtMDc2OC00RTU4LTk4NzYtNUQ5RThEOTM0MEFB');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

// Route to return the JSON with dynamic values including BUILD_DATE
app.get('/', (req, res) => {
    const buildDate = process.env.BUILD_DATE || new Date().toISOString();
    res.json({
        meta: {
            version: "0.0.4",
            api_env: "production",
            author: "mj",
            build_date: buildDate
        },
        data: ["hi"]
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
