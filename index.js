const express =require('express');
const http= require('http');

const hostname='localhost';
const port=3000;

const app =express();

app.use((req,res,next)=>{    //next is used when we need to include additional middleware
console.log(req.headers);
res.statusCode = 200;
res.setHeader('Content-Type','tex/html');
res.end('<html><body><h1>THIS IS AN EXPRESS SERVER</h1></body></html>');


});
const server =http.createServer(app);

server.listen(port ,hostname,()=>{
  console.log(`Server runnning at http://${hostname}:${port}`)  

});

