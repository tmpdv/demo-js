const http = require("http");

const processors = {
    "/bool": (req, res) => {
        res.write((Math.random() > 0.5) + "");
    },
    "/rand": (req, res) => {
        res.write(Math.random() + "");
    }
}

http.createServer((req, res) => {
    const proc = processors[req.url];
    if (!proc) {
        res.statusCode = 400;
    } else {
        proc(req, res);
    }
    res.end();
}).listen(3000);