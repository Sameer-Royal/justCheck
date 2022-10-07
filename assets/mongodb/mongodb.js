const dotenv=require('dotenv');
dotenv.config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://root:"+process.env.MONGOD_PASSWORD+"@firstcluster.zndu0.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if (err) console.log(err)
    else console.log('database is connected successfully')
    dbo = client.db("Checking")
});


async function insertData(coll,obj){
    await dbo.collection(coll).insertOne(obj,(err,res)=>{
        if(err) console.log(err);
    })
}

module.exports={
    insertData
}