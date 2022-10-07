const fs=require('fs');
const mongod=require('../assets/mongodb/mongodb');



function errorLogger(err,req,res,next){
  console.log('coming to error logger ')
    fs.appendFile("errorLogger.txt", err.message, (err) => {
        if (err) console.log("hello world");
        else console.log("error logged");
      });
      res.status(err.status).json({
        message: err.message,
      });
      mongod.insertData("errors",err);
}

module.exports=errorLogger;