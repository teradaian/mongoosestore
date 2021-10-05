import express from 'express'
import mongoose from 'mongoose'
const app = express()

import * as productCtrl from './controllers/products'

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
app.use(express.static('public'))












app.listen(3000, () => {
    console.log('We are live')
})