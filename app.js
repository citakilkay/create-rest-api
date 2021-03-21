const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { route } = require('./routes/posts');
require('dotenv/config');
//.env push edilmez

// Connect DB
mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

//Middlewares --> her sayfaya giderken authentication kontrol edilir app.use ile bu bir middlewaredir.
//app.use(auth);

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute); // this is a middleware

//ROUTES
app.get('/', (req, res) => {
    res.send('This is Our Home');
});

app.listen(3000);
