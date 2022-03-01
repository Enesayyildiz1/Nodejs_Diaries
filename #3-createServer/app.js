var http=require("http");

http.createServer((req,res)=>
{
    if(req.url=="/login") res.end("You are in login page");
    if(req.url=="/contact") res.end("You are in contact page");
    
}).listen(8080);