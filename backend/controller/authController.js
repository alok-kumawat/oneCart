import User from "../model/userModel.js";
import validator from 'validator'
import bcrypt from "bcryptjs"
import { genToken, genToken1 } from "../config/token.js";


export const registration = async (req, res) => {
    try {
        const{name, email, password} = req.body;
        const existUser = await User.findOne({email})
        if(existUser){
            return res.status(400).json({message:"User Already Exist"})
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({message:"Enter Valid Email"})
        }
        if(password.length < 8){
            return res.status(400).json({message:"Enter Strong Password"})
        }
        let hashPasword = await bcrypt.hash(password, 10)
        const user = await User({name, email, password:hashPasword})
        await user.save()
        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(user)
    } catch (error) {
        console.log("Registration Error")
        return res.status(500).json({message:`Registration Error ${error}`})
    }

}

export const login = async (req, res) => {
    try {
        let {email, password} = req.body;
        let user = await User.findOne({email})
        if(!user){
            return res.status(404).json({message:"User is not found"})
        }
        let isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message:"Incorrect password"})
        }
        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(201).json(user)
    } catch (error) {
        console.log("Login Error")
        return res.status(500).json({message:`Login Error ${error}`})
    }
}

export const logOut = async (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"Logout successfully"})
    } catch (error) {
        console.log("Logout Error")
        return res.status(500).json({message:`Logout Error ${error}`})
    }
}

export const googleLogin = async (req, res) => {
    try {
        let {name, email} = req.body;
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name, email
            })
        }
        let token = await genToken(user._id)
        res.cookie("token", token, {
            httpOnly:true,
            secure:true,
            sameSite:"none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
        return res.status(200).json(user)
    } catch (error) {
        console.log("googleLogin Error")
        return res.status(500).json({message:`googleLogin Error ${error}`})

        
    }
    
}


export const adminLogin = async (req, res) => {
    try {
        let { email, password} = req.body
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            let token = await genToken1(email)
            res.cookie("token", token, {
                httpOnly:true,
                secure:true,
                sameSite:"none",
                maxAge: 1 * 24 * 60 * 60 * 1000
            })
            return res.status(200).json(token)
        }
        return res.status(400).json({message:"Invaild Credentails"})
    } catch (error) {
        console.log("AdminLogin Error")
        return res.status(500).json({message:`AdminLogin Error ${error}`})

        
    }
    
}
