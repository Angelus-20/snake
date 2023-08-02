const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); // Exit on Ctrl+C
  } else if (key === 'w') {
    connection.write('Move: up'); // Send the 'Move: up' message to the server
  } else if (key === 'a') {
    connection.write('Move: left'); // Send the 'Move: left' message to the server
  } else if (key === 's') {
    connection.write('Move: right'); // Send the 'Move: right' message to the server
  } else if (key === 'd') {
    connection.write('Move: down'); // Send the 'Move: down' message to the server
  }
  // Add other conditions to handle other input, if needed
};

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
};

module.exports = { setupInput };
