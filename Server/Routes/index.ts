/*
File Name index.ts
By: Jerome Ching
Student# 300817930
Date: June 18, 2021
*/
import express from 'express';
const router = express.Router();
export default router;

//create index controller instance
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayLoginPage, DisplayProjectsPage, DisplayRegisterPage, DisplayServicesPage, ProcessLoginPage, ProcessLogOutPage, ProcessRegisterPage} from'../Controllers/index';

/* GET home page. */
router.get('/', DisplayHomePage);

/*Get Home Page*/
router.get('/home', DisplayHomePage);

/*Get About Page*/
router.get('/about', DisplayAboutPage);

/*Get Project Page*/
router.get('/projects', DisplayProjectsPage);

/*Get Services Page*/
router.get('/services', DisplayServicesPage);

/*Get Contact Page*/
router.get('/contact', DisplayContactPage);

/*Get Login page - with /login*/
router.get('/login', DisplayLoginPage);

/*Post - process login page -with /login when user clicks login btn*/
router.post('/login', ProcessLoginPage);

/*Get register page - with /login*/
router.get('/register', DisplayRegisterPage);

/*Post - process register page -with /register when user clicks register btn*/
router.post('/register', ProcessRegisterPage);

/*Get logout page - with /logout*/
router.get('/logout', ProcessLogOutPage);



//TODO
// add Login Dispaly And Process
// add Register Display
// Logout Page