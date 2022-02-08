const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;

const mongoose = require('mongoose');

const mpesaRoutes = require('./routes/mpesa');

mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    })
    .then(() => {
        console.log('Connected successfully to the database');
    })
    .catch((err) => console.log(err));

app.use('/api', mpesaRoutes);

app.listen(port, () => {
    console.log('The application is running on port' + ' ' + port);
});

// Mongoose.connect(
//     MONGODB_URL,
//     async(err)=>{
//         if(err) throw err;
//         console.log("conncted to db")
//     }
// )