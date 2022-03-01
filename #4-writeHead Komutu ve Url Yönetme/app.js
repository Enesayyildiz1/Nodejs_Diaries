const http = require("http");
const url = require("url");

var examplepath= "http://localhost:8080/login?name=Enes&surname=Ayyildiz";

var q= url.parse(examplepath,true);

var hostname=q.host;
var pathname=q.pathname;
var query=q.query;

console.log(hostname);
console.log(pathname);
console.log(query);