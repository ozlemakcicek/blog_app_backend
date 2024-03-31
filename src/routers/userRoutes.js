
import express from "express"
import Users from "../models/userModel.js"

const userRouter=express.Router()


userRouter.get("/get", (req, res)=>{
    res.send("islem tamam")
})



userRouter.post("/post", async(req,res)=>{
    const user=req.body

    try {
const userData=await Users.create(user)
res.status(200).json(userData)
        
    } catch (error) {
       return res.status(404).json({message:"User couldn't find"})

        
    }
}
)





export default userRouter
