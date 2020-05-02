const express =require('express');
const http= require('http');
const morgan =require('morgan');
const bodyParser= require('body-parser');


const dishRouter = require('./routes/dishRouter');
//npm install -g nodemon

const hostname='localhost';
const port=3000;



const app =express();
app.use(morgan('dev'));
app.use(bodyParser.json());


 app.use('/dishes',dishRouter);

/*app.all('/dishes',  (req,res,next) =>{
  res.statusCode=200;
  res.setHeader('Content-type','text/plain');
  next();
});

// localhost:3000/dishes/?id=12&password=23

// app.get('/dishes', function(req, res, next){

// });

// app.get('/dishes', controller.)

app.get('/dishes', (req,res,next)=>{
  
  res.end('will send all the dishes yo you!');
});

app.post('/dishes',(req,res,next)=>{ // post will add info in rquest body in the form of a json string which contain a name and description
  console.log(req.body);
  res.end('will add the dish :' + req.body.name +
  'with details:'+ req.body.description);
});


app.put('/dishes',(req,res,next)=>{ 
  res.statusCode=403; // 403 means operation is not supported
  res.end('Put operation not supported on /dishes');
});

app.delete('/dishes',(req,res,next)=>{
  res.end('Deleting all the dishes to you !');
  });


 /* app.get('/dishes/:dishId',(req,res,next)=>{
    res.end('will send details of the dish'
    +req.params.dishId +'to you');
    });
    
    app.post('/dishes/:dishId',(req,res,next)=>{ // post will add info in rquest body in the form of a json string which contain a name and description
      res.statusCode=403; // 403 means operation is not supported
      res.end('POST operation not supported on /dishes/'
      +req.params.dishId);
    });
    
    
    app.put('/dishes/:dishId',(req,res,next)=>{ 
      res.write('updating the dish:'+req.params.dishId +'\n');
      req.end('will update the dish :'+req.body.name+
      'with details:' +req.body.description);
    });
    
    app.delete('/dishes/:dishId',(req,res,next)=>{
      res.end('Deleting dish :'+req.params.dishId);
      });*/


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

