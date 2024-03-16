// sockets/chatSocket.ts
import axios from "axios";
import { Server, WebSocket } from "ws";

export const setupSockets = (wss: Server) => {
  wss.on("connection", (ws) => {
    console.log("WebSocket client connected");

    ws.on("message", (message: Buffer) => {
      const messageString = message.toString();
      console.log("Received message:", messageString);
      // Handle incoming messages from the client
    });

    ws.on("close", () => {
      console.log("WebSocket client disconnected");
    });
  });
  const issMockData = {
    name: "iss",
    id: 25544,
    latitude: 0,
    longitude: 0,
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
  setInterval(() => {
    wss.clients.forEach(async (client) => {
      console.log("Sending data to client...");

      const url = "https://api.wheretheiss.at/v1/satellites/25544";
      const issData = (await axios.get(url)).data;

      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(issData));
      }
    });
  }, 5000);
};
