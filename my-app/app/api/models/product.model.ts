import { link } from "fs"
import mongoose from "mongoose"


const productSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
}, {
    timestamps: true,
    versionKey: false, 
})

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);


export default Product;