import Product from '../models/product.js'
import seedData from '../models/seedData.js'
const mongooseImg = '/assets/mongoose.jpg'

export { 
    seed, 
    index, 
    newMongoose as new,
    deleteMongoose as delete,
    edit,
    create,
    update,
    show,
    buy
}

const seed = async(req, res) => {
    try {
        await Product.deleteMany({})
        await Product.create(seedData)
        res.redirect('/products')
    } catch(err) {
        console.log(err)
        res.redirect('/products')
    }
}

const index = async(req, res) => {
    try {
        const products = await Product.find({})
        res.render('index', { products, title: 'Main' })
    } catch(err) {
        console.log(err)
        res.redirect('/products')
    }
}

const newMongoose = async(req, res) => {
    try {
        res.render('new', { title: 'New'})
    } catch(err) {
        console.log(err)
        res.redirect('/products')
    }
}

const create = async(req, res) => {
    try {
        req.body.price = parseInt(req.body.price)
        req.body.qty = parseInt(req.body.price)
        req.body.img = mongooseImg
        await Product.create(req.body)
        res.redirect('/products')
    } catch(err) {
        console.log(err)
        res.redirect('/products')
    }
}

const deleteMongoose = async(req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.redirect('/products')
    } catch(err){
        console.log(err)
        res.redirect('/products')
    }
}

const show = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.render('show', { product, title: product.name })
    } catch(err) {
        console.log(err)
        res.redirect('/products')
    }
}

const edit = async(req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.render('edit', { product, title: `Edit ${product.name}`})
    } catch(err) {
        console.log(err)
        res.redirect('/products')
    }

}

const update = async(req, res) => {
    try {
        req.body.price = parseInt(req.body.price)
        req.body.qty = parseInt(req.body.qty)
        await Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        res.redirect(`/products/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.redirect('/products')
    }
}

const buy = async(req, res) => {
    try {
        await Product.findOneAndUpdate({_id: req.params.id}, {qty: parseInt(req.body.qty-1)}, { new: true })
        res.redirect(`/products/${req.params.id}`)
    } catch(err) {
        console.log(err)
        res.redirect('/products')
    }
}