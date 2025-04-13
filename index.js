const express = require('express');
const app = express();
const PORT = 80;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "up"
    });
});

app.get('/api/posts/:id', async (req, res) => {
    const { id } = req.params;
    console.log('Received Id:', id);
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const globalData =  await response.json();
    res.json({ message: 'Data received successfully!', globalData });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});