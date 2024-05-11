const fs = require("fs")
const USER = fs.readFileSync("user.json").toString()
const PRODUCTS = fs.readFileSync("products.json").toString()

module.exports = {
    writeUserFile: (product) => {
        const user = JSON.parse(USER)
        const favorite = user.favoriteProduct

        if (favorite) {
            const newFavorite = favorite.filter((productFavorite) => productFavorite.id !== product.id)

            if (newFavorite.length < favorite.length) {
                user.favoriteProduct = newFavorite
            } else {
                user.favoriteProduct.push(product)
            } 
        } else {
            user.favoriteProduct.push(product)
        }

        fs.writeFileSync("user.json", JSON.stringify(user))
        return user.favoriteProduct
    }
}