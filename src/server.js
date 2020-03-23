const express = require('express');
const helmet = require('helmet');
const path = require('path');

const app = express();

app.use(helmet());

app.use(express.static(path.join(__dirname, '../public')));

app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = 7700;
const write = console;
app.listen(port, () => {
  write.info(`Server is running on port ${port}`);
});