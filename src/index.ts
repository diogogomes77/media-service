import http from 'http';

// const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World! This is a test');
});

server.listen(port, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
  console.log(`Server running at port ${port}/`);
});
