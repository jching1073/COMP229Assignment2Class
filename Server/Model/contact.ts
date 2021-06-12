import mongoose from "mongoose";
const Schema = mongoose.Schema; // poiner to mongoose.Schema

const ContactSchema = new Schema
({
    FirstName: String,
    LastName: String,
    Email: String,
    ContactNumber: String
},
{
      collection: "contacts"
});

const Model = mongoose.model("Contacts", ContactSchema);
export default Model;

