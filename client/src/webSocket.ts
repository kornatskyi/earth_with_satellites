export const initWebSocket = (): WebSocket => {
  // Create a WebSocket connection
  const socket = new WebSocket("ws://localhost:3000");

  // Connection opened
  socket.addEventListener("open", (event) => {
    console.log("WebSocket connection opened");
  });

  // Listen for messages
  socket.addEventListener("message", (event) => {
    console.log("Received message:", event.data);
    // Handle incoming messages from the server
  });

  // Connection closed
  socket.addEventListener("close", (event) => {
    console.log("WebSocket connection closed");
  });
  return socket;
};
