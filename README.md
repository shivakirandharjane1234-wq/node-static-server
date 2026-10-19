# Node Static Server

A lightweight static file server built using only Node.js core modules
(`http`, `fs`, `path`), with no external dependencies.

## Features
- Serves HTML, CSS, JS, images and JSON files
- Correct MIME types for each file
- Custom 404 and 500 error responses
- Protection against path traversal attacks
- Handles query strings in URLs

## Getting Started
Requires Node.js 18 or higher.

    git clone https://github.com/<your-username>/node-static-server.git
    cd node-static-server
    npm start

Then open http://localhost:3000

## What I Learned
- How Node's HTTP server handles requests and responses
- Reading files with `fs` and handling errors
- Why path traversal is dangerous and how to prevent it

## License
MIT