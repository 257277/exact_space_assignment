const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cors());
app.get('/api', (req, res) => {
  res.json('{}');
});

app.post("/submit", async (req, res) => {
  try {
    console.log(req.body);
    const jsonData = JSON.parse(req.body.jsonData);
    res.json(jsonData);
  } catch (error) {
    res.status(400).json({ error: "Invalid JSON data" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


