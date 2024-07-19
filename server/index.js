const cors=require('cors');

const express =require('express');

const mongoose=require('mongoose');
const router = require('./routes/userRoutes');
require("dotenv").config();

const app=express();

app.use(express.json());
app.use(cors());

const userRoutes=require('./routes/userRoutes');
const courseRoutes=require('./routes/courseRoutes');

app.use('/auth', userRoutes);
app.use('/auth',courseRoutes)


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
      
