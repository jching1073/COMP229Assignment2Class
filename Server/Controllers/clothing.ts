import express, { Request, Response, NextFunction} from 'express'; //only import parts of express

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