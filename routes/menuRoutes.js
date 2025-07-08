const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

//POST Method to add a Menu Item
router.post('/',async(req,res)=>{
  try {
    const data= req.body;
    const newMenu = new MenuItem(data);
    const response= await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);
    
  } 
  catch (err) {
   console.log(err);
   res.status(500).json({error: 'Internal Server Error'});
    
  }
})

//GET method to get the Menu items
router.get('/',async(req,res)=>{
  try {
    const data = await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);
    
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
})


router.get('/:tasteType',async(req,res)=>{
  try {
    const tasteType = req.params.tasteType; //Extract the taste type from the URL parameter
    if(tasteType=='sweet' || tasteType=='sour' || tasteType=='spicy'){
     const response = await MenuItem.find({taste:tasteType});
     console.log('response fetched');
     res.status(200).json(response);
     
    }
    else{
      
    res.status(404).json({error:'Invalid taste type'});
  
    }
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({error:'Internal Server Error'});
  }
})


//Comment added for testing purposes

module.exports=router;