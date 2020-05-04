const express =require('express');
const http= require('http');
const morgan =require('morgan');
const bodyParser= require('body-parser');


const dishRouter = require('./routes/dishRouter');//1
 const promoRouter = require('./routes/promoRouter');//2
//npm install -g nodemon

const hostname='localhost';
const port=3000;

/* when we use the body parser what happens is that for the incoming request the body of the incoming 
                            request will be parsed and then added into the req object as req.body so the req.body  will give you
                            access to  whatever is inside the body of the message*/

const app =express();
app.use(morgan('dev'));
app.use(bodyParser.json());


 app.use('/dishes',dishRouter);
app.use('/promotions', promoRouter);




app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{    //next is used when we need to include additional middleware

res.statusCode = 200;
res.setHeader('Content-Type','tex/html');
res.end('<html><body><h1>THIS IS AN EXPRESS SERVER</h1></body></html>');


});
const server =http.createServer(app);

server.listen(port ,hostname,()=>{
  console.log(`Server runnning at http://${hostname}:${port}`)  

});

