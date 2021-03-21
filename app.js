const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/rest_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

//Middlewares --> her sayfaya giderken authentication kontrol edilir app.use ile bu bir middlewaredir.
//app.use(auth);

//ROUTES

app.get('/', (req, res) => {
    res.send('This is Our Home');
});

app.listen(3000);
