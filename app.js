
//import createErrors from 'http-errors';
import express from 'express';
import { engine } from 'express-handlebars';
import { config } from 'dotenv';
import mongo from 'mongodb';
import cookieParser  from 'cookie-parser';
import pluralize from 'pluralize';
import logger from 'morgan';
import passport from 'passport';
//import database from './db.js';
//import routes from './index.js';
import session from 'express-session';
import {ObjectId} from 'mongodb';
//import { default as connectMongoDBSession}    from 'connect-mongodb-session';

const app= express();
//const data= database();
//const route= routes();
app.locals.pluralize;

// view engine setup
app.set('views', 'views');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
config();

//session variables
//const MongoDBStore = connectMongoDBSession(session);

/*const store = new MongoDBStore({
uri: process.env.lOCAL_URI,
  collection: 'sessions'
});*/

app.use(session({
resave: true,
secret: process.env.SECRET,
saveUninitialized: false,
cookie: {secure:true},

}));

app.use(passport.authenticate('session'));


app.get("/",function(req,res){

    res.render("index");
});


app.get("/home",function(req,res){

    res.render("home");
});

app.get("/login",function(req,res){

    res.render("login");
});

app.get("/signup",function(req,res){

    res.render("signup");
});


app.listen(3000, ()=>{
    console.log("Running on port 3000");
    });