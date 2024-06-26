const fs = require("fs")

const readFileUser = () => {
    const file = fs.readFileSync("user.json").toString()
    const user = JSON.parse(file)

    return user
}

const writeFileUser = (obj) => {
    const user = JSON.stringify(obj)
    fs.writeFileSync("user.json", user)
}

const FILE = readFileUser()

const ORDER_INFO = {
    orderPrice: 0,
    promocode: false,
    deliveryPrice: 15,
    totalPriceOrder: 0
}

const mathFunction = (productInCart, addProduct) => {
    if (addProduct.action === "add") {
        productInCart.quantity++
        return
    }

    productInCart.quantity--
    productInCart.quantity <= 1 ? productInCart.quantity = 1 : null
    console.log(productInCart.quantity)
    return
}

module.exports = {
    changeCart: (addProduct) => {
        const userCart = FILE.productsInCart
        console.log(addProduct.action)

        if (!userCart.length) {
            userCart.push(addProduct)
            FILE.productsInCart = userCart
            writeFileUser(FILE)

            return userCart
        }

        const cheked = userCart.filter((productInCart) => productInCart.product.id === addProduct.product.id)

        if (!cheked.length) {
            userCart.push(addProduct)
            FILE.productsInCart = userCart
            writeFileUser(FILE)

            return userCart
        }

        // clear
        if (addProduct.action === "clear") {
            const newUserCart = userCart.filter((productInCart) => productInCart.product.id !== addProduct.product.id)
            FILE.productsInCart = newUserCart
            writeFileUser(FILE)

            return newUserCart
        }

        // change
        if (addProduct.action === "change") {
            if (addProduct.quantity < 1) return userCart

            const newUserCart = userCart.map((productInCart) => {
                if (productInCart.product.id === addProduct.product.id) {
                    productInCart.quantity = addProduct.quantity
                }

                return productInCart
            })

            FILE.productsInCart = newUserCart
            writeFileUser(FILE)
    
            return newUserCart
        }

        // default
        const newUserCart = userCart.map((productInCart) => {
            if (productInCart.product.id === addProduct.product.id) {
                mathFunction(productInCart, addProduct)
            }
            
            return productInCart
        })

        FILE.productsInCart = newUserCart
        writeFileUser(FILE)

        return newUserCart
    },
    changeOrder: (newUserCart) => {

        if (!FILE.orderInfo) {
            FILE.orderInfo = ORDER_INFO
        }

        FILE.orderInfo.orderPrice = 0
    
        newUserCart.map((productInCart) => {
            const price = productInCart.product.price
            const quantity = productInCart.quantity
            productInCart.amountProduct = Number(price) * Number(quantity)
            FILE.orderInfo.orderPrice += productInCart.amountProduct
            
            return productInCart
        })
    
        writeFileUser(FILE)
        return FILE
    },
    changePromocode: (string) => {
        if (!FILE.orderInfo) {
            return
        }

        if (string === "ilovereact") {
            FILE.orderInfo.promocode = true
            writeFileUser(FILE)

            return FILE
        }
        
        FILE.orderInfo.promocode = false
        writeFileUser(FILE)
        return FILE
    }
}