import express, { Request, Response, NextFunction} from 'express'; //only import parts of express

export function DisplayHomePage(req: Request, res: Response, next: NextFunction) : void
{
    res.render('index', { title: 'Home', page: 'home'});
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction) : void
{
    res.render('index', {title: "About Us", page: 'about'});
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction) : void
{
    res.render('index', {title: "Our Projects", page: 'projects'});
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction) : void
{
    res.render('index', {title: "Our Services", page: 'services'});
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction) : void
{
    res.render('contactus', {title: "Contact Us", page: 'contact'});
}

export function DisplaySignInPage(req: Request, res: Response, next: NextFunction) : void
{
    res.render('index', {title: "Sign In", page: "signin"});
}

/*export function DisplayAboutPage(req: Request, res: Response, next: NextFunction)
{
    res.render('index', {title: "About Us", page: 'about'});
}*/