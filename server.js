const http = require("http");
const fs = require("fs");
const path = require("path");

const port = 3000;
const publicDir = path.join(__dirname, "public");

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
};

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, "http://localhost");
  const urlPath = pathname === "/" ? "/index.html" : pathname;
  const filepath = path.join(publicDir, urlPath);

  // Block path traversal
  if (!filepath.startsWith(publicDir)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    return res.end("403: Forbidden");
  }

  const extName = path.extname(filepath).toLowerCase();
  const contentType = mimeTypes[extName] || "application/octet-stream";

  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: File not found");
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500: Server error");
      }
      return;
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});