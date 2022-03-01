var http=require("http");
var url=require("url");
var fs=require("fs");

http.createServer((req,res)=>
{
    var query=url.parse(req.url,true);
    var filename="."+query.pathname+".html";
    fs.readFile(filename,(err,data)=>
    {
        if(err)
            return res.end("404");
        else
        {
            res.write(data);
            return res.end();
        }
    
    })
}).listen(8080);