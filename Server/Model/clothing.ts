import mongoose from 'mongoose';
const Schema = mongoose.Schema; // pointer 

const ClothingSchema = new Schema // make new object
({
    name: String,
    brand: String,
    category: String,
    color: String,
    size: String,
    price: Number
},
{
    collection: "clothing"
});

const Model = mongoose.model("Clothing", ClothingSchema);
export default Model;