import foodModel from "../models/foodModel.js"

import fs from 'fs';

export const addFood = async (req, res) => {
    const { name, description, price, category } = req.body;
    let image_filename = `${req.file.filename}`;

    try {
        const food = new foodModel({
            name, description, price, category, image: image_filename
        });
        await food.save();
        res.json({ success: true, message: 'Food added' })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const listFood = async(req,res)=>{
    try {
        const food = await foodModel.find({});
        return res.json({success:true , data:food});
    } catch (error) {
        return res.send({success:false , message:error.message});
    }
}


export const remove=async(req,res)=>{
    try {
        const {id} = req.body;
        const food = await foodModel.findById(id);
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(id);
        res.json({success:true ,message:'Food deleted'})
    } catch (error) {
        return res.json({success:false , message:error.message});
    }
}



