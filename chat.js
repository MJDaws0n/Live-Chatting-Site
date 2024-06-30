const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');

// Load SSL certificate and key
const server = https.createServer({
  cert: fs.readFileSync('/home/container/certs/fullchain.pem'),
  key: fs.readFileSync('/home/container/certs/privkey.pem'),
});

// Initialize WebSocket server
const wss = new WebSocket.Server({ server });

// Handle connections
wss.on('connection', (ws) => {
  console.log('New client connected');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start the server
server.listen(443, () => {
  console.log('WebSocket server is running on wss://chatting.api.mjdawson.net');
});
