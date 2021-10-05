import Product from '../models/product.js'
import seedData from '../models/seedData.js'

export { seed, index }

const seed = async(req, res) => {
    await Product.deleteMany({})
    await Product.create(seedData)
    res.redirect('/products')
}

const index = async(req, res) => {
        const products = await Product.find({})
        res.render('index', { products, title: 'Main' })
}

