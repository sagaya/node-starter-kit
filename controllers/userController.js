import db from './../models/index'

const userController = {}

userController.createUser = (req,res)=>{
    //This is where the users controller logic goes
    const {email}  = req.body
    const newUser = new db.User({
        email
    })
    newUser.save().then((user)=>{
        res.json({status: true, message: "User Created", data: user})
    }).catch((err)=>{
        res.json({status: false, message: err.message})
    })
}

export default userController;