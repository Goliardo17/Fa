const express = require("express")
const app = express()

const fs= require("fs")
const { getFilterLists } = require("./helpers/getFilterList")
const { getElementOnPage } = require("./helpers/getElementByFilters")

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
    console.log(params)
    const data = getElementOnPage(filters, sorting, page)
    res.send(JSON.stringify(data))
})

app.listen(8000, () => console.log("server running..."))