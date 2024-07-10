const cors=require('cors');

const express =require('express');

const mongoose=require('mongoose');
const router = require('./routes/userRoutes');
require("dotenv").config();

const app=express();

app.use(express.json());
app.use(cors());



app.use('/auth', router);


mongoose.connect(process.env.MONGOURL)
    .then(() => {
        console.log(`Database is connected`);
    })
    .catch((err) => {
        console.log(err.message);
    });

    app.listen(process.env.PORT, () => {
        console.log(`server is running on port ${process.env.PORT}`);
      });
      
