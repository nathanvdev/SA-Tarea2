const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json({ limit: '50mb' }));
app.use(cors());

const PORT = 3005;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en ${PORT}`);
});