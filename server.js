const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());                        // Enable CORS for all routes
app.use(morgan('tiny'));                // Use 'tiny' configuration for Morgan
app.use(express.json());                // Parse JSON bodies (as sent by API clients)

// Sample route
app.all('*', (req, res) => {
    console.log({ message: `You used the ${req.method} method!`, data: req.body });
    res.json({ message: `You used the ${req.method} method!`, data: req.body });
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
