var http=require("http");

http.createServer((req,res)=>
{
    res.end("8080 portu devrede");
}).listen(8080);