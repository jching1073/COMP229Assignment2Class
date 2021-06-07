/*
File Name index.ts
By: Jerome Ching
Student# 300817930
Date: June 4, 2021
*/
import express from 'express';
const router = express.Router();
export default router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home'});
});
/*Get Home Page*/
router.get('/home', function (req, res, next)
{
  res.render('index', {title: "Home", page: 'home'});
});
/*Get About Page*/
router.get('/about', function (req, res, next)
{
  res.render('index', {title: "About Us", page: 'about'});
});
/*Get Project Page*/
router.get('/projects', function (req, res, next)
{
  res.render('index', {title: "Our Projects", page: 'projects'});
});
/*Get Services Page*/
router.get('/services', function (req, res, next)
{
  res.render('index', {title: "Our Services", page: 'services'});
});
/*Get Contact Page*/
router.get('/contact', function (req, res, next)
{
  res.render('contactus', {title: "Contact Us", page: 'contact'});
});