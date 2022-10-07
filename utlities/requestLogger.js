const fs = require("fs");
const mongod=require("../assets/mongodb/mongodb")


function requestLogger(req, res, next) {
  const data =
    "Request Method :" +
    req.method +
    "\nTime: " +
    new Date().toLocaleDateString() +
    "\nPath: " +
    req.url +
    "\n";
  fs.appendFile("requestLogger.txt", data, (err) => {
    if (err) console.log("Unable to log");
    else console.log("Logged Request");
  });
  console.log(data);
  mongod.insertData("hello",{data});
  next();
}

module.exports = requestLogger;
