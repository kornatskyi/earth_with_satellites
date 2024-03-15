import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the client's dist directory
app.use(express.static(path.join(__dirname, '../../satellite-visualizer-frontend/dist')));

// API route to retrieve satellite data
app.get('/api/satellites', (req: Request, res: Response) => {
  // Placeholder satellite data
  const satelliteData = [
    { id: 1, name: 'Satellite 1', position: { x: 0, y: 0, z: 0 } },
    { id: 2, name: 'Satellite 2', position: { x: 1, y: 1, z: 1 } },
    { id: 3, name: 'Satellite 3', position: { x: 2, y: 2, z: 2 } },
  ];

  res.json(satelliteData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});