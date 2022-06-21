const morgan = require('morgan');
const cors = require('cors');
const express = require('express');
const compression = require('compression');

module.exports=app=>{
    //.........build in middleware.........

app.use(express.json());
app.use(cors());
app.use(compression());
if(process.env.NODE_ENV==="development"){
    app.use(morgan('dev'))
}
}