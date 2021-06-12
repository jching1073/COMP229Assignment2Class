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
export function DisplayEditPage (req: Request, res: Response, next: NextFunction) : void
{
    let id = req.params.id; // get id
    console.log(id);

    //pass the id to the db

    //db.clothing.find({"_id": id})

    Contact.findById(id, {}, {}, (err, contactToEdit) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        //show the edit view
        res.render('index', {title: 'Edit', page: 'edit', item: contactToEdit});
    });
}