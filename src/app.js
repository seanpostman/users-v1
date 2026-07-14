const express = require('express');
const app = express();
const port = 3000;

app.get('/users', (req, res) => {
  res.json([{
    "id": 1,
    "firstName": "Ada",
    "lastName": "Lovelace",
    "email": "ada@example.com",
    "role": "admin",
    "createdAt": "2026-07-09T10:00:00Z"
  }]);
});

app.listen(port, () => {
  console.log(`User app listening on port ${port}`);
});
