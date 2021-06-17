/*
File Name app.ts
By: Jerome Ching
Student# 300817930
Date: June 4, 2021
*/
import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

//modules for authentication
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local'

//modules from cors
import cors from 'cors';

//authentication objects
let localStrategy = passportLocal.Strategy;
import User from '../Model/user';

//module for authetication messageing
import flash from 'connect-flash';


import indexRouter from '../Routes/index';
import contactRouter from '../Routes/contact';

//App Config
const app = express();
export default app; //app will be the default

//DB Config
import * as DBConfig from "./db";
mongoose.connect(DBConfig.LocalURI, {useNewUrlParser: true, useUnifiedTopology: true});


const db = mongoose.connection; //hey mongoose connect
db.on('error', console.error.bind(console, 'connection error')); //error
db.once('open', function()
{
  console.log(`connected to mongoDB at: ${DBConfig.HostName}`);
})

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, "../../node_modules")));

//add support for cors
app.use(cors());

//express session setup

app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized : false,
  resave: false
}));

//Initialize flash
app.use(flash());

//initialize passport 
app.use(passport.initialize());
app.use(passport.session());

//implement an authetication strategy 

passport.use(User.createStrategy());

//serialize and deserializing user data
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//Routing happens now
app.use('/', indexRouter);
app.use('/contact-list', contactRouter ); // defines contact list page for our site

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next: express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

