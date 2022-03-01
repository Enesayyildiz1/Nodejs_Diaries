var http=require("http");
var mymodul=require("./mymodul");


http.createServer((req,res)=>
{
    res.end(mymodul.welcome("enes"));
}).listen(8080);