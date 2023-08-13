const express = require("express");
const AppRouter = express.Router();
const bodyParser = require('body-parser')
const multer  = require('multer')

AppRouter.use(bodyParser());

const storage = multer.diskStorage({
    destination:function(req,file,cd){
        return cd(null,'./uploads')
    },
    filename:function(req,file,cd){
        return cd(null, `${Date.now()}-${file.originalname}`)
    }
})
const upload = multer({storage:storage})

AppRouter.post('/',upload.single('profileImage'),(req,res)=>{
    console.log(req.body)
    console.log(req.file)

    return res.redirect('/')
})

module.exports= AppRouter;
