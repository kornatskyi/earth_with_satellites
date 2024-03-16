import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import axios from "axios";
import WebSocket from "ws";
import http from "http";
import { updateSatellites } from "./satellites";
import routes from "./routes/routes";
import { setupChatSocket } from "./sockets/mainSocket";

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

const wss = new WebSocket.Server({ server });

setupChatSocket(wss);

// Enable CORS for all routes
app.use(cors());

// Serve static files from the client's dist directory
app.use(express.static(path.join(__dirname, "../../client/dist")));

app.use("/", routes);

// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
