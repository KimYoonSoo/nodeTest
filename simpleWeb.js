const http = require('http');

http.createServer((req, res) => {
  console.log('ReqUrl:', req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  let result = req.url;
  res.end(result);

  if (req.url === '/hello') {
    res.end('Hello');
  }
  else if (req.url == '/hi') {
    res.end('hi');
  }
  else {
    res.end('Hello World');
  }
}).listen(7777);