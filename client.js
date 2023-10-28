const net = require("net");
const stdin = process.stdin;
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('data', (data) => {
    console.log('server said:', data);
  });

  conn.on('connect', () => {
    console.log("Successfully connected to game server")
  });

  conn.on('connect', () => {
    conn.write('Name: EHB');
  });


  return conn;
};




module.exports = connect;