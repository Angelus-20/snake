
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); // Exit on Ctrl+C
  } else if (key === 'w') {
    connection.write('Move: up'); 
    
  } else if (key === 'a') {
    connection.write('Move: left'); 

  } else if (key === 'd') {
    connection.write('Move: right'); 

  } else if (key === 's') {
    connection.write('Move: down'); 

  } else if (key === '1') {
    connection.write('Say: Move!'); 

  } else if (key === '2') {
    connection.write('Say: woooo!');

  } else if (key === '3') {
    connection.write('Say: finally!'); // Send canned message to the server
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
