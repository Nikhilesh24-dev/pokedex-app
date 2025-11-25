const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Create cache
const cache = new NodeCache({ stdTTL: 3600, checkperiod: 120 });

// Health check
app.get('/', (req, res) => {
  res.send('Pokedex Backend is running!');
});

// Pokemon API route
app.get('/pokemon/:name', async (req, res) => {
  const pokemonName = req.params.name.toLowerCase();

  // Check cache
  const cachedData = cache.get(pokemonName);
  if (cachedData) {
    return res.json({ data: cachedData, source: 'cache' });
  }

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const pokemonData = response.data;

    cache.set(pokemonName, pokemonData);

    res.json({ data: pokemonData, source: 'api' });
  } catch (error) {
    res.status(404).json({ error: 'Pokemon not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
