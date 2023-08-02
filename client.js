const net = require("net"); 


const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interprets incoming data as text
  conn.setEncoding("utf8");

  // Registers the "connect" event
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    const playerName = "Edwin";
    conn.write(`Name: ${playerName}`);
  });



  return conn;
};

console.log("Connecting ...");
connect();

