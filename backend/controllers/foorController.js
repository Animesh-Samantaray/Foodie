import foodModel from "../models/foodModel"

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


