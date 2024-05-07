const Category = require('../models/productcategoryModel');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require('../utils/validateMongodbId');

// Create category
const createCategory = asyncHandler(async (req,res) =>{
    try{
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch(error){
        throw new Error(error);
    }
});

// Update Category
const updateCategory = asyncHandler(async (req,res) =>{
    const {id }= req.params;
    validateMongoDbId(id);
    try{
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body,{
            new: true,
        });
        res.json(updatedCategory);
    } catch(error){
        throw new Error(error);
    }
});

// delete Category
const deleteCategory = asyncHandler(async (req,res) =>{
    const {id }= req.params;
    validateMongoDbId(id);
    try{
        const deletedCategory = await Category.findByIdAndDelete(id);
        res.json(deletedCategory);
    } catch(error){
        throw new Error(error);
    }
});

// Fetch category
const getCategory = asyncHandler(async (req,res) =>{
    const {id }= req.params;
    validateMongoDbId(id);
    try{
        const getCategory = await Category.findById(id);
        res.json(getCategory);
    } catch(error){
        throw new Error(error);
    }
});

// Get All category
const getallCategory = asyncHandler(async (req,res) =>{
    try{
        const getallCategory = await Category.find();
        res.json(getallCategory);
    } catch(error){
        throw new Error(error);
    }
});



module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getallCategory,
}