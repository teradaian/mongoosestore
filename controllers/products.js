import Product from '../models/product.js'
import seedData from '../models/seedData.js'
const mongooseImg = '/assets/mongoose.jpg'

export { 
    seed, 
    index, 
    newMongoose as new,
    create,
    deleteMongoose as delete,
    show,
    edit,
    update
}

const seed = async(req, res) => {
    await Product.deleteMany({})
    await Product.create(seedData)
    res.redirect('/products')
}

const index = async(req, res) => {
    const products = await Product.find({})
    res.render('index', { products, title: 'Main' })
}

const newMongoose = async(req, res) => {
    res.render('new', { title: 'New'})
}

const create = async(req, res) => {
    req.body.price = parseInt(req.body.price)
    req.body.qty = parseInt(req.body.price)
    req.body.img = mongooseImg
    await Product.create(req.body)
    res.redirect('/products')
}

const deleteMongoose = async(req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.redirect('/products')
}

const show = async(req, res) => {
    const product = await Product.findById(req.params.id)
    res.render('show', { product, title: product.name })
}

const edit = async(req, res) => {
    const product = await Product.findById(req.params.id)
    res.render('edit', { product, title: `Edit ${product.name}`})
}

const update = async(req, res) => {
    req.body.price = parseInt(req.body.price)
    req.body.qty = parseInt(req.body.price)
    await Product.findOneAndUpdate(req.params.id, req.body, {new:true})
    res.redirect('/products')
}