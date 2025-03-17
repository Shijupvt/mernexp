const express = require('express');
const cors = require('cors');
const app = express();
const UserModel = require('./User');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Company')
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

// Register API Route
app.post('/register', (req, res) => {
    UserModel.create(req.body)
        .then(() => res.json('Data Saved Successfully'))
        .catch(err => res.json(err));
});

// Create API End Points (HTTP Request, Response)
app.get('/', (req, res) => {
    res.send('URK22CS2055');
});

// Config PORT and Start Server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});