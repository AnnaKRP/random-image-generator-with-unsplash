import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();

// Set up __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the current directory and 'public' directory
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API route to fetch a random image from Unsplash
app.get('/api/random-image', async (req, res) => {
  try {
    const clientID = process.env.NEXT_PUBLIC_MY_API_KEY;

    // Log if API key is undefined for debugging
    if (!clientID) {
      console.error("API Key is missing. Ensure it's correctly defined in .env file.");
      return res.status(500).json({ message: 'API key missing' });
    }

    const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${clientID}`);

    // Check if Unsplash API response is successful
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Unsplash API Error:', errorText);
      return res.status(500).json({ message: 'Failed to fetch image from Unsplash' });
    }

    const jsonData = await response.json();

    // Extract and send only the relevant data
    const imageData = {
      url: jsonData.urls.regular,
      link: jsonData.links.html,
      creator: jsonData.user.name,
      likes: jsonData.likes,
    };

    res.json(imageData);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).json({ message: 'Error fetching image from Unsplash' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
