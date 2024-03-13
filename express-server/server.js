const app = require('express')();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
})

app.listen(3000, () => {
  console.log(`Express app is running on port 3000`);
})