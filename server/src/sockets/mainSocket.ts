// sockets/chatSocket.ts
import { Server } from "ws";

export const setupChatSocket = (wss: Server) => {
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
};

// setInterval(() => {
//   const issMockData = {
//     name: "iss",
//     id: 25544,
//     latitude: -23.126153136809,
//     longitude: 40.761705973903,
//     altitude: 427.22454299866,
//     velocity: 27551.090571692,
//     visibility: "daylight",
//     footprint: 4544.0375671,
//     timestamp: 1710472132,
//     daynum: 2460384.6311574,
//     solar_lat: -1.9744295255473,
//     solar_lon: 135.00268461768,
//     units: "kilometers",
//   };
//   wss.clients.forEach((client) => {
//     console.log("Sending data to client...");

//     if (client.OPEN === WebSocket.OPEN) {
//       client.send(JSON.stringify(issMockData));
//     }
//   });
// }, 1000);
