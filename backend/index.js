const express = require('express')
require('./db/config')
const cors = require('cors')
const Product = require('./db/Product')
const app = express()
app.use(express.json())
app.use(cors())

app.get("/show-products", async (req, res) => {
    let product = await Product.find()
    res.send(product)
})

app.listen(5000)
