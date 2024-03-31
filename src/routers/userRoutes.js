
import express from "express"
import { login, register} from "../services/userService.js"

//** */
const userRouter=express.Router()


// userRouter.get("/get", (req, res)=>{
//     res.send("islem tamam")
// })






// userRouter.get("/", findAll)
// userRouter.get("/:id", find),
userRouter.post("/login",login),
userRouter.post("/register", register)





export default userRouter
