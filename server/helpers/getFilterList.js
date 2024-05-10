const filterList = {
    categories: ["All"],
    colors: [],
    minPrice: 0,
    maxPrice: 0,
}
  
module.exports = {
    getFilterLists: (products) => {
    for (let product of products) {
        // возможно мне нужно forEach ?
        product.categories.map((category) => {
        const searchCategory = filterList.categories.includes(category)
        
        if (!searchCategory) {
            filterList.categories.push(category);
        }
        
        return
        })

        const searchColor = filterList.colors.includes(product.color)
        
        if (!searchColor) {
            filterList.colors.push(product.color);
        }

        if (filterList.minPrice === 0) {
        filterList.minPrice = Number(product.price)
        filterList.maxPrice = Number(product.price)
        } 
        
        if (product.price < filterList.minPrice) {
        filterList.minPrice = Number(product.price)
        } 
        
        if (product.price > filterList.maxPrice) {
        filterList.maxPrice = Number(product.price)
        }
    }

    return filterList;
}}