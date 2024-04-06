const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const respuestasPredefinidas = {
  hola: '¡Hola! ¿Cómo estás?',
  bien: 'Me alegro de que estés bien.',
  mal: 'Espero que te sientas mejor pronto.',
  gracias: '¡De nada!',
};

app.post('/api/mensaje', (req, res) => {
  const { mensaje } = req.body;
  
  // Verificar si hay una respuesta predefinida para el mensaje
  const respuesta = respuestasPredefinidas[mensaje.toLowerCase()] || 'No entendí tu mensaje';
  res.json({ respuesta });
});

app.get('/', (req, res) => {
  res.send('¡Servidor backend en funcionamiento!');
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en el puerto ${PORT}`);
});