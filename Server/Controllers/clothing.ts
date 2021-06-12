import express, { Request, Response, NextFunction, response} from 'express'; //only import parts of express

import Clothing from '../Model/clothing';

export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction) : void
{
    Clothing.find(function(err, clothingCollection)
    {
        if (err)
        {
            return console.error(err);
        }
        //render cloting les partial page
        res.render('index', {title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection});
    });
}

// export function DisplayEditPage (req: Request, res: Response, next: NextFunction) : void
// {
//     let id = req.params.id; // get id
//     console.log(id);

//     //pass the id to the db

//     //db.clothing.find({"_id": id})

//     Clothing.findById(id, {}, {}, (err, clothingItemToEdit) =>
//     {
//         if(err)
//         {
//             console.error(err);
//             res.end(err);
//         }
//         //show the edit view
//         res.render('index', {title: 'Edit', page: 'edit', item: clothingItemToEdit})
//     });
// }