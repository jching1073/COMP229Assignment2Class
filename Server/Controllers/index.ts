import express, { Request, Response, NextFunction} from 'express'; //only import parts of express
import passport from 'passport';
//create user model
import User from '../Model/user'
import { UserDisplayName } from '../Util'

export function DisplayHomePage(req: Request, res: Response, next: NextFunction) : void
{
    res.render('index', { title: 'Home', page: 'home', displayName: UserDisplayName(req) });
}

export function DisplayAboutPage(req: Request, res: Response, next: NextFunction) : void
{
    res.render('index', {title: "About Us", page: 'about', displayName: UserDisplayName(req)});
}

export function DisplayProjectsPage(req: Request, res: Response, next: NextFunction) : void
{
    res.render('index', {title: "Our Projects", page: 'projects', displayName: UserDisplayName(req)});
}

export function DisplayServicesPage(req: Request, res: Response, next: NextFunction) : void
{
    res.render('index', {title: "Our Services", page: 'services', displayName: UserDisplayName(req)});
}

export function DisplayContactPage(req: Request, res: Response, next: NextFunction) : void
{
    res.render('contactus', {title: "Contact Us", page: 'contact', displayName: UserDisplayName(req)});
}

export function DisplayLoginPage (req: Request, res: Response, next: NextFunction) : void
{
    if(!req.user)
    {
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req)});
    }
    
    return res.redirect('/contact-list');
}

export function ProcessLoginPage (req: Request, res: Response, next: NextFunction) : void
{
    passport.authenticate('local', (err, user, info) =>
    {
        //are there server error
        if(err)
        {
            console.error(err);
            return next(err);
        }
        //are there login errors
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => 
        {
            if(err)
            {
                console.error(err);
                return next(err);
            }
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}

export function DisplayRegisterPage (req: Request, res: Response, next: NextFunction) : void
{
    if(!req.user)
    {
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req)});
    }

    return res.redirect('/contact-list');
}

export function ProcessRegisterPage (req: Request, res: Response, next: NextFunction) : void
{
    //instantiate new user object
    let newUser = new User
    ({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName

    })

    User.register(newUser, req.body.password, (err) =>
    {
        if(err)
        {
            console.error('Error: Inserting New User');
            if(err.name == "UserExistsError")
            {
                console.error('Error: User already exists');
            }
            req.flash('registerMessage', 'Registration Error');

            return res.redirect('/register');
        }
        return passport.authenticate('local')(req, res, ()=>
        {
            return res.redirect('/contact-list');
        })
    })
}

export function ProcessLogOutPage(req: Request, res: Response, next: NextFunction)
{
    req.logout();

    res.redirect('/login')
}