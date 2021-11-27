
const express = require('express');
const morgan = require('morgan');

const mongoose = require('mongoose');

const storyRoutes = require('./Routes/storyRoutes');


const { result } = require('lodash');
const { render } = require('ejs');
// express app
const app = express();
// register view engine

// connect to MongoDB database

const db_URI = 'mongodb+srv://<user name>:<password>@stories.yagpb.mongodb.net/Stories?retryWrites=true&w=majority';


mongoose.connect(db_URI, { useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>app.listen(3000))
    .catch((err)=>console.log(err));
// , { useNewUrlParser: true, useUnifiedTopology: true} - to avoid deprication thing
app.set('view engine', 'ejs');

// app.set('views','myviews'); // if files are in myviews folder
// listen for requests

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

// routes 
app.get('/', (req, res)=>{

    res.redirect('/stories');
});
app.get('/about', (req, res)=>{
    res.render('about.ejs',{title: 'About'});
});
app.get('/about-me',(req,res)=>{
    res.redirect('/about');
});
// story routes

app.use('/stories',storyRoutes);

app.use((req,res)=>{
    res.status(404).render('404',{title: '404'});
      
});

