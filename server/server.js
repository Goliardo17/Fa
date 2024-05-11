const express = require("express")
const app = express()

const fs= require("fs")
const { getFilterLists } = require("./helpers/getFilterList")
const { getElementOnPage } = require("./helpers/getElementByFilters")
const { changeCart, changeOrder, changePromocode } = require("./helpers/changeCart")
const { writeUserFile } = require('./helpers/changeFavorite')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader('Access-Control-Allow-Headers', 'X-Request-Width,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)    
    console.log(req.url)
    console.log(req.method)
    next()
})

app.get("/filters", (req, res) => {
    const json = fs.readFileSync("products.json").toString()
    const products = JSON.parse(json).products
    const filterList = getFilterLists(products)

    res.send(JSON.stringify(filterList))
})

app.get("/products", (req, res) => {
    const params = req.query
    const filters = {
        input: params.input,
        category: params.category,
        colors: params.colors ? params.colors.split(",") : [],
        priceBorder: {
            min: params.priceMin,
            max: params.priceMax
        }
    }
    const sorting = params.sorting
    const page = params.pageNumber
    // console.log(params)
    const data = getElementOnPage(filters, sorting, page)
    res.send(JSON.stringify(data))
})

app.get("/products/favorite", (req, res) => {
    const file = fs.readFileSync("user.json").toString()

    res.send(file)
})

app.get("/cart", (req, res) => {
    const json = fs.readFileSync("user.json").toString()
    res.send(json)
})

app.use(express.json()) 
// почему сервер после пост запроса перезапускается ?
// убрать action из user.json
app.post("/cart/change", (req, res) => {
    const product = req.body
    const newUserCart = changeCart(product)
    const newJson = changeOrder(newUserCart)
    const json = JSON.stringify(newJson)

    fs.writeFileSync("user.json", json)
    res.setHeader('Content-Type', 'application/JSON')
    res.send(json)
})

app.post("/products/favorite/change", (req, res) => {
    const {addproduct} = req.body // {addproduct: product}
    const favoritesList = writeUserFile(addproduct)

    res.setHeader('Content-Type', 'application/JSON')
    res.send(JSON.stringify(favoritesList))
})

app.post("/cart/promocode", (req, res) => {
    const product = req.body
    const newJson = changePromocode(product.promocode)

    if (newJson) {
        const json = JSON.stringify(newJson)

        res.setHeader('Content-Type', 'application/JSON')
        res.send(json)
    }

    res.send()
})

app.listen(8000, () => console.log("server running..."))