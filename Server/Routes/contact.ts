import express from 'express';
const router = express.Router();
export default router;

//create a clothing controller instance
import { DisplayContactListPage, DisplayEditPage} from '../Controllers/contact';

/*Get clothing-list page = with /clothing-list*/
router.get('/', DisplayContactListPage);

/*display edit/:id page = with /clothing-list/edit:id*/
router.get('/edit/:id', DisplayEditPage)

