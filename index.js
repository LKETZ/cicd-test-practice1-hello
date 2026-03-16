const http = require('http');
const port = process.env.PORT || 3000;
// Set port from environment variable or default to 3000

// Create an HTTP server that responds with "Hello World from DevOps Lab!"
const server = http.createServer((req, res) => {
  //res = response object
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello World from DevOps Lab!\n');
});
server.listen(port, () => {
 console.log(`Server running at port ${port}`);
});