/*
File Name index.ts
By: Jerome Ching
Student# 300817930
Date: June 4, 2021
*/
import express from 'express';
const router = express.Router();
export default router;

//create index controller instance
import {DisplayAboutPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage, DisplaySignInPage} from'../Controllers/index';

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

router.get('/signin', DisplaySignInPage);
