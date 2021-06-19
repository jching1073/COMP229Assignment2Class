/*
File Name user.ts
By: Jerome Ching
Student# 300817930
Date: June 18, 2021
*/
import mongoose, { PassportLocalSchema } from "mongoose";
const Schema = mongoose.Schema; // poiner to mongoose.Schema
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new Schema
({
    username: String,
    emailAddress: String,
    displayName: String,
    created:
    {
        type: Date,
        default: Date.now()
    },
    updated:
    {
        type: Date,
        default: Date.now()
    }
},
{
      collection: "users"
});
UserSchema.plugin(passportLocalMongoose);
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

declare global
{
    export type UserDocument = mongoose.Document &
    {
        _id: String,
        username: String,
        emailAddress: String,
        displayName: String
    }
}
export default Model;

