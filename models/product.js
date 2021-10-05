import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productSchema = newSchema({
    name: { type: String, required: true },
    description: String,
    img: String,
    price: { type: Number, required: true },
    qty: Number
})

const Product = mongoose.model('Product', productSchema)

export default Product