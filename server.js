const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Use the PORT environment variable or default to 3000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Route to serve data.json from the repository
app.get('/api/data', (req, res) => {
    const filePath = path.join(__dirname, 'data.json'); // Adjust the path to your repository's data.json location
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading data.json:', err);
            return res.status(500).send('Error fetching data');
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseErr) {
            console.error('Error parsing JSON:', parseErr);
            res.status(500).send('Error parsing data');
        }
    });
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
