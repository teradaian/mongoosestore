import Product from '../models/product'
import seedData from '../models/seedData'

export { seed }

const seed = async(req, res) => {
    await Product.deleteMany({})
    await Product.create(seedData)
    res.redirect('/products')
}

const index = async(req, res) => {
    try{ 
        await Product.find({})
        res.render('index', { title: 'Main' })
    } catch (err) {
        console.log(err)
        res.redirect('/products')
    }
}

