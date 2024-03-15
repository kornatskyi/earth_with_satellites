import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import axios from "axios";

interface SatelliteData {
  name: string;
  id: number;
  latitude: number;
  longitude: number;
  altitude: number;
  velocity: number;
  visibility: "daylight" | "nighttime";
  footprint: number;
  timestamp: number;
  daynum: number;
  solar_lat: number;
  solar_lon: number;
  units: "kilometers";
}

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Serve static files from the client's dist directory
app.use(
  express.static(
    path.join(__dirname, "../../satellite-visualizer-frontend/dist")
  )
);

app.get("/api/iss", (req: Request, res: Response) => {
  const url = "https://api.wheretheiss.at/v1/satellites/25544";

  // axios.get(url).then((res) => {
  //   console.log(res.data);
  // });
  const issMockData: SatelliteData = {
    name: "iss",
    id: 25544,
    latitude: -23.126153136809,
    longitude: 40.761705973903,
    altitude: 427.22454299866,
    velocity: 27551.090571692,
    visibility: "daylight",
    footprint: 4544.0375671,
    timestamp: 1710472132,
    daynum: 2460384.6311574,
    solar_lat: -1.9744295255473,
    solar_lon: 135.00268461768,
    units: "kilometers",
  };
  res.json(issMockData);
});

// API route to retrieve satellite data
app.get("/api/satellites", (req: Request, res: Response) => {
  // Placeholder satellite data
  const satelliteData = [
    { id: 1, name: "Satellite 1", position: { x: 0, y: 0, z: 0 } },
    { id: 2, name: "Satellite 2", position: { x: 1, y: 1, z: 1 } },
    { id: 3, name: "Satellite 3", position: { x: 2, y: 2, z: 2 } },
  ];

  res.json(satelliteData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
