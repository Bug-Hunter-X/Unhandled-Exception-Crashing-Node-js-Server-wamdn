const http = require('http');

const server = http.createServer((req, res) => {
  // Without proper error handling, an unhandled exception will crash the server
  const data = JSON.parse(req.body);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'success' }));
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});