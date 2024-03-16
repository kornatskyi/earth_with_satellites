import { WebSocketServer } from "ws";

// interface SatelliteData {
//   name: string;
//   id: number;
//   latitude: number;
//   longitude: number;
//   altitude: number;
//   velocity: number;
//   visibility: "daylight" | "nighttime";
//   footprint: number;
//   timestamp: number;
//   daynum: number;
//   solar_lat: number;
//   solar_lon: number;
//   units: "kilometers";
// }

const issMockData = {
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

export const updateSatellites = async (ws: WebSocketServer) => {
  while (true) {
    ws.clients.forEach((client) => {
      console.log("Sending data to client...");

      if (client.OPEN === WebSocket.OPEN) {
        client.send(JSON.stringify(issMockData));
      }
    });
    await setTimeout(() => {}, 3000);
  }
};
