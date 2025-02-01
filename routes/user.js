const {Router} = require('express')


const userRouter=Router()
    userRouter.post("/signup",(req,res)=>{
      res.json({
        message:"signup"
      })
      })
      
      userRouter.post("/login",(req,res)=>{
        res.json({
          message:"login"
        })
      })
      
      userRouter.get("/purchase",(req,res)=>{
        res.json({
          message:"purchase"
        })
      })
    module.exports={
      userRouter:userRouter
    }
