const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    fs.readFile(INDEX, (err, data) => {
      if (err) {
        res.writeHead(500, {"Content-Type":"text/plain; charset=utf-8"});
        return res.end("Unable to load Startup Wholesale.");
      }
      res.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
      res.end(data);
    });
    return;
  }

  res.writeHead(404, {"Content-Type":"text/plain; charset=utf-8"});
  res.end("Not found");
});

server.listen(PORT, () => {
  console.log(`Startup Wholesale running on http://localhost:${PORT}`);
});