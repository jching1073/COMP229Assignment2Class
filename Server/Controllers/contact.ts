import express, { Request, Response, NextFunction} from 'express'; //only import parts of express

import Contact from '../Model/contact';

//import util functions
import {UserDisplayName} from '../Util';

export function DisplayContactListPage(req: Request, res: Response, next: NextFunction) : void
{
    Contact.find(function(err, contactCollection)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }
        //render contact les partial page
        res.render('index', {title: 'Contact List', page: 'contact-list', contact: contactCollection, displayName: UserDisplayName(req)});
    }).sort({FirstName: 1});
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
        res.render('index', {title: 'Edit', page: 'edit', item: contactToEdit, displayName: UserDisplayName(req)});
    });
}

export function DisplayAddPage (req: Request, res: Response, next: NextFunction) : void
{
    res.render('index', {title: 'Add', page: 'edit', item: '', displayName: UserDisplayName(req)}); 
}

export function ProcessEditPage (req: Request, res: Response, next: NextFunction) : void
{
    let id = req.params.id; // get id

    let updateContact = new Contact
    ({
        "_id": id,
        "FirstName": req.body.FirstName,
        "LastName": req.body.LastName,
        "Email": req.body.Email,
        "ContactNumber": req.body.ContactNumber
    });

    Contact.updateOne({_id: id}, updateContact, {}, (err) =>{
        if(err)
        {
          console.error(err);
          res.end(err);
        }
    
        res.redirect('/contact-list');
      });
}

export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
  // instantiate a new Contact
  let newContact = new Contact
  ({
    "FirstName": req.body.FirstName,
    "LastName": req.body.LastName,
    "Email": req.body.Email,
    "ContactNumber": req.body.ContactNumber
  });

  // db.clothing.insert({clothing data is here...})
  Contact.create(newContact, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;
  
  Contact.remove({_id: id}, (err) => {
    if(err)
    {
      console.error(err);
      res.end(err);
    }

    res.redirect('/contact-list');
  });
}