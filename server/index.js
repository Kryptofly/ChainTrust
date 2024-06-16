const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/chaintrust', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('ChainTrust API');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
