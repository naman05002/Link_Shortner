const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const path=require('path');
//@route GET /:code
//@desc Redirect to long url

router.get('/', (req,res)=>{
    // var options ={
    //     root: path.join(__dirname)
    // };
    // res.send('got response')
    var fileName='/index.html';
    res.sendFile(path.join(__dirname+fileName));
});
router.get('/:code',async (req,res) => {
    try{
        const url = await Url.findOne({
            urlCode: req.params.code
        });
        if(url){
            return res.redirect(url.longUrl);
        } else{
            return res.status(404).json('No url Found');
        }

    } catch (err){
        console.error(err);
        res.status(500).json('Server error');
    }
});

module.exports = router;