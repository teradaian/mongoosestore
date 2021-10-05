import Product from '../models/product'
import seedData from '../models/seedData'

export { seed }

const seed = async() => {
    await Product.deleteMany({})
    await Product.create(seedData)
}