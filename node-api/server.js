const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send("Olá Looknet!")
})

app.listen(3001);