import express from "express";
import jwt from 'jsonwebtoken';
import validator from 'validator';
import bcrypt from 'bcrypt';
import userModel from "../models/userModel.js";

const createToken = (id)=>{
    return jwt.sign({id} , process.env.JWT_SECRET , {expiresIn:'5d'});
}

export const loginUser = async(req,res)=>{
    const {email , password}  =  req.body;
    const user = await userModel.findOne({email});

    if(!user){
        return res.json({success:false , message:'User does not exist' });
    }

    const matched = await bcrypt.compare(password, user.password);

    if(!matched){
        return res.json({success:false , message:'Wrong password'}) ;
    }

    const token = createToken(user._id);
    res.json({success:true , token ,message:'Logged In'})
    
}

export const registerUser = async(req,res)=>{
try {
    const {name , email , password} = req.body;
    
    const exists = await userModel.findOne({email});

    if(exists){
        return res.json({success:false , message:'User already registered'});
    }

    if(!validator.isEmail(email)){
        return res.json({success:false , message:'In-valid email'});
    }

    if(password.length <6){
        return res.json({success:false , message:'Password must be on length 6'});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    const newUser = new userModel({
        name:name , email:email , password:hashedPassword
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    return res.json({success:true ,token ,  message:'User registered Successfully'});
    } 
    catch (error)
    {
        return res.json({success:false , message:error.message});
    }
}