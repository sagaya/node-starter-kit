import express from 'express';
import userController from '../controllers/userController'

const routes = express()

routes.get('/', (req,res)=>{
    res.json({status: true})
})
routes.post('/users/signup', userController.createUser)

export default routes;