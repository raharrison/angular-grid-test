const http = require('http');
const fs = require("fs")
const port = process.env.PORT || 8000;

const data = fs.readFileSync("./data.json",{ encoding: 'utf8' });

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(data);
    res.end();
}).listen(port, () => {
    console.log(`App is running on port ${port}`);
});