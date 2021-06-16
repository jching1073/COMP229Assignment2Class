"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessDeletePage = exports.ProcessAddPage = exports.ProcessEditPage = exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayContactListPage = void 0;
const contact_1 = __importDefault(require("../Model/contact"));
function DisplayContactListPage(req, res, next) {
    contact_1.default.find(function (err, contactCollection) {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Contact List', page: 'contact-list', contact: contactCollection });
    });
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    contact_1.default.findById(id, {}, {}, (err, contactToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', item: contactToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', item: '' });
}
exports.DisplayAddPage = DisplayAddPage;
function ProcessEditPage(req, res, next) {
    let id = req.params.id;
    let updateContact = new contact_1.default({
        "_id": id,
        "FirstName": req.body.FirstName,
        "LastName": req.body.LastName,
        "Email": req.body.Email,
        "ContactNumber": req.body.ContactNumber
    });
    contact_1.default.updateOne({ _id: id }, updateContact, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessEditPage = ProcessEditPage;
function ProcessAddPage(req, res, next) {
    let newContact = new contact_1.default({
        "FirstName": req.body.FirstName,
        "LastName": req.body.LastName,
        "Email": req.body.Email,
        "ContactNumber": req.body.ContactNumber
    });
    contact_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessAddPage = ProcessAddPage;
function ProcessDeletePage(req, res, next) {
    let id = req.params.id;
    contact_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect('/contact-list');
    });
}
exports.ProcessDeletePage = ProcessDeletePage;
//# sourceMappingURL=contact.js.map