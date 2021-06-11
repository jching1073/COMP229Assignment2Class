"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplaySignInPage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
function DisplayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home' });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render('index', { title: "About Us", page: 'about' });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render('index', { title: "Our Projects", page: 'projects' });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render('index', { title: "Our Services", page: 'services' });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render('contactus', { title: "Contact Us", page: 'contact' });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplaySignInPage(req, res, next) {
    res.render('index', { title: "Sign In", page: "signin" });
}
exports.DisplaySignInPage = DisplaySignInPage;
//# sourceMappingURL=index.js.map