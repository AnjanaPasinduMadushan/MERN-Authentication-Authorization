const express = require('express');
const mongoose =require('mongoose');


const router = require('./routes/user-routes');

const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
const PORT = process.env.PORT || 8070;

app.use(express.json())
app.use('/User', router);//router will handle all the routing operation after the User

mongoose.connect("mongodb+srv://AuthDB:UpMZDbrLduVduudS@cluster0.wp7cig5.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is up and running on Port: ${PORT}`)
});
}).catch((err)=>console.log(err));
