const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    const playerName = "Edwin";
    conn.write(`Name: ${playerName}`);
  });

  conn.on("data", data => {
    if (data === 'w') {
      conn.write('Move: up');
    }
    // Add other conditions for 'a', 's', and 'd' if needed

    console.log(`Received data: ${data}`);
  });

  return conn;
};

console.log("Connecting ...");
connect();
