const {Router}=require('express')


const courseRouter=Router();



    courseRouter.post("/buyCourse",(req,res)=>{
          res.json({
            message:"course checkpoint"
          })
    })
    
    courseRouter.get("/preview",(req,res)=>{
        res.json({
            message:"bought courses"
          })
    })

    module.exports={
        courseRouter:courseRouter
    }
