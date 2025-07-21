const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading HTML file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        console.log("file read");  // <-- Here: after reading file
        res.end(content);
      }
    });
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

server.listen(port, hostname, () => {
  console.log(`✅ Server running at http://${hostname}:${port}/`);
});
