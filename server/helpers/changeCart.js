const fs = require("fs")

const mathFunction = (productInCart, addProduct) => {
    if (addProduct.action === "add") {
        productInCart.quantity++
        return
    }

    productInCart.quantity--
    productInCart.quantity <= 0 ? productInCart.quantity = 0 : null
    return
}

module.exports = {
    changeCart: (addProduct) => {
        const user = fs.readFileSync("user.json").toString()
        const userCart = JSON.parse(user).productsInCart
        console.log(addProduct.action)

        if (!userCart.length) {
            userCart.push(addProduct)

            return userCart
        }

        const cheked = userCart.filter((productInCart) => productInCart.product.id === addProduct.product.id)

        if (!cheked.length) {
            userCart.push(addProduct)

            return userCart
        }

        // clear
        if (addProduct.action === "clear") {
            const newUserCart = userCart.filter((productInCart) => productInCart.product.id !== addProduct.product.id)

            return newUserCart
        }

        // change
        if (addProduct.action === "change") {
            if (addProduct.quantity < 0) return

            const newUserCart = userCart.map((productInCart) => {
                if (productInCart.product.id === addProduct.product.id) {
                    productInCart.quantity = addProduct.quantity
                }

                return productInCart
            })
    
            return newUserCart
        }

        // default
        const newUserCart = userCart.map((productInCart) => {
            if (productInCart.product.id === addProduct.product.id) {
                mathFunction(productInCart, addProduct)
            }
            
            return productInCart
        })

        return newUserCart
    }
}