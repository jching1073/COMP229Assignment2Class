import express, { Request, Response, NextFunction} from 'express'; //only import parts of express

import Contact from '../Model/contact';

export function DisplayContactListPage(req: Request, res: Response, next: NextFunction) : void
{
    Contact.find(function(err, contactCollection)
    {
        if (err)
        {
            return console.error(err);
        }
        //render contact les partial page
        res.render('index', {title: 'Contact List', page: 'contact-list', contact: contactCollection});
    });
}