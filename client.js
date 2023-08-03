const net = require("net");
const { setupInput } = require("./input");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    const playerName = "Edwin";
    conn.write(`Name: ${playerName}`);
  });

  conn.on("data", data => {
    console.log(`Received data: ${data}`);
    // Process the incoming data from the server (if needed)
  });

  setupInput(conn); // Pass the connection to the setupInput function

  return conn;
};

console.log("Connecting ...");
connect();
