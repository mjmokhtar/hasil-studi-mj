const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

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

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
