const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
    res.send('here are all the movies you can get')
})

router.get("/:movieID", (req, res, next) => {
    try {
      const movieID = req.params.movieID;
      const pattern = /^[0-9]{4}$/;
      if (!pattern.test(movieID)) {
        const err = new Error("Invalid Movie ID");
        err.status = 404;
        throw err;
      }
      res.send("Okay from Movie");
    } catch (error) {
      next(error);
    }
  });

  router.all('*',(req,res)=>{
    res.send('invalid path')
  })

module.exports=router;