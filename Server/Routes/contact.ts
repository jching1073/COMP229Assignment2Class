import express from 'express';
const router = express.Router();
export default router;
import {AuthGuard} from '../Util/index';


//create a clothing controller instance
import { DisplayAddPage, DisplayContactListPage, DisplayEditPage, ProcessAddPage, ProcessDeletePage, ProcessEditPage} from '../Controllers/contact';

/*Get Contact-list page = with /contact-list*/
router.get('/', DisplayContactListPage);

//Get -display /contact-list/add
router.get('/add', AuthGuard,DisplayAddPage); //DisplayAddePage

/*display edit/:id page = with /contact-list/edit:id*/
router.get('/edit/:id', AuthGuard, DisplayEditPage)

// Post - process /contact-list/add page
router.post('/add', AuthGuard, ProcessAddPage); //ProcessAddPage

// Post - process /contact-list/edit/:id page
router.post('/edit/:id', AuthGuard, ProcessEditPage); //ProcessEditPage

// Get - process /contact-list/delete/:id page
router.get('/delete/:id', AuthGuard, ProcessDeletePage); //ProcessDeletePage








