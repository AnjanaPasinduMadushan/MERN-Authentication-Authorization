const User = require('../model/user');


//importing bcrypt
const bcrypt = require("bcryptjs");

const signUp = async(req, res, next) =>{

    const {name,  mobile, email,  address, password} = req.body;

     //chaecking whether user already sign up or not based on the mobile No
     let existingUser;

     try{
         existingUser = await User.findOne({mobile: mobile});
     }catch(err){
         console.log(err);
     }
     
     if(existingUser){
         return res.status(400).json({message:"User already exist...login instead "})
     }

    //hashsync is a function that can hasing the password
    const hashedpassword = bcrypt.hashSync(password);

    const user = new User({
        name,
        mobile,
        email,
        address,
        password:hashedpassword
    });

    try{
        await user.save();//saving document into DB
    }catch(err){
        console.log(err);
    }

    return res.status(201).json({message:user})
}



exports.signUp = signUp;