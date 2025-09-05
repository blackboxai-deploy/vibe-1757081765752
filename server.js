const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'healthy', message: 'Apology website is running with love ♥' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`💕 Apology & Smile website is running on port ${PORT}`);
    console.log(`🌸 Open http://localhost:${PORT} to see the magic`);
    console.log(`🐱 Oscar is waiting with love messages...`);
});

module.exports = app;