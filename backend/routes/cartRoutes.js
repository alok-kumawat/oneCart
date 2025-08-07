import express from 'express'
import { addtoCart, getUserCart, UpdateCart } from '../controller/cartController.js'
import isAuth from '../middleware/isAuth.js'

const cartRoutes = express.Router()

cartRoutes.post('/get',isAuth,getUserCart)
cartRoutes.post('/add',isAuth,addtoCart)
cartRoutes.post('/update',isAuth,UpdateCart)


export default cartRoutes