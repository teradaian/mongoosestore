import ('dotenv/config')
import express from 'express'
import logger from 'morgan'
import methodOverride from 'method-override'
import * as productCtrl from './controllers/products.js'


// server
import('./config/database.js')

// middleware
const app = express()
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(methodOverride('_method'))

// routes
app.get('/', (req, res) => res.redirect('/products'))
app.get('/products/seed', productCtrl.seed)
app.get('/products', productCtrl.index)










app.listen(3000, () => {
    console.log('We are live')
})