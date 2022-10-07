const express=require('express');
const app=express();
const mongodb=require('./assets/mongodb/mongodb')
const errorLogger=require("./utlities/errorLogger")
const requestLoggger=require('./utlities/requestLogger');
const checkRoute=require('./routes/check');

app.listen(8000,(req,res)=>{   
    console.log('server is running on port 8000');
})


app.use(requestLoggger);
app.use('/check',checkRoute);

app.get("/",(req,res)=>{
    res.send('coming on root');
})

app.use(errorLogger);

app.all("*",(req,res)=>{
    req.send('invalid path of route');
})
