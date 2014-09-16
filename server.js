var mime = require("mime"),http = require("http"),fs = require("fs");
http.createServer(function (req, resp) {
path  = unescape(__dirname+'/www' + req.url)
var code = 200
 if(fs.existsSync(path)) {
    if(fs.lstatSync(path).isDirectory()) {
        if(fs.existsSync(path+"index.html")) {
        path += "index.html"
        } else {
            code = 403
            resp.writeHead(code, {"Content-Type": "text/plain"});
            resp.end(code+" "+http.STATUS_CODES[code]+" "+req.url);
        }
    }
    resp.writeHead(code, {"Content-Type": mime.lookup(path)})
    fs.readFile(path, function (e, r) {
    resp.end(r);

})
} else {
    code = 404
    resp.writeHead(code, {"Content-Type":"text/plain"});
    resp.end(code+" "+http.STATUS_CODES[code]+" "+req.url);
}
console.log("GET "+code+" "+http.STATUS_CODES[code]+" "+req.url)
}).listen(8000,"localhost");
console.log("Listening at http://localhost:8000")