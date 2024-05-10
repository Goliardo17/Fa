const fs = require("fs")
const data = JSON.parse(fs.readFileSync("products.json").toString())
const PAGINATION = 12

const filterBySearch = (array, input) => {
    if (!input) {
      return array;
    }
  
    return array.filter((item) => {
      const lowInput = input.toLowerCase();
      const lowItem = item.name.toLowerCase();
  
      return lowItem.includes(lowInput);
    });
  };
  
  const filterByCategory = (array, category) => {
    if (category === "All") {
      return array;
    }
  
    return array.filter((product) => {
      const result = product.categories.filter((item) => item === category);
  
      return result.length > 0 ? product : null;
    });
  };
  
  const filterByColors = (array, colors) => {
    if (!colors.length) {
      return array;
    }
  
    return array.filter((item) => colors.indexOf(item.color) !== -1);
  };
  
  const filterByPrice = (array, borders) => {
    const { min, max } = borders;
    const productsAfter = array.filter(
      (item) => item.price > min && item.price < max,
    );
  
    return productsAfter;
  };
  
  const sortingName = (array) => {
    return array.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
  
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    });
  };
  
  const sortingPrice = (array) => {
    return array.sort((a, b) => a.price - b.price);
  };
  
  const sortingId = (array) => {
    return array.sort((a, b) => a.id - b.id);
  };

  const paginationNumbers = (page, maxLength) => {
    const result = Array(maxLength).fill(0).map((i, ix) => ix + 1)
    
    if (maxLength < 3) {
      return result
    }
  
    if (page === 0) {
      return result.slice(page, page + 3)
    }
  
    if (page + 1 < maxPage && page > 0) {
      return result.slice(page - 1, page + 1)
    }
    
    if (page + 1 === maxPage) {
      return result.slice(page - 3, page)
    }
  }

module.exports = {
    getElementOnPage: (filters, sorting, page) => {
    const category = filterByCategory(data.products, filters.category);
    const colors = filterByColors(category, filters.colors);
    const price = filterByPrice(colors, filters.priceBorder);
    const searching = filterBySearch(price, filters.input);
  
    switch (sorting) {
      case "name":
        sortingName(searching);
        break;
      case "price":
        sortingPrice(searching);
        break;
      default:
        sortingId(searching);
        break;
    }
    
    const firstProduct = page * PAGINATION
    const endProduct = firstProduct + PAGINATION
    const maxLength = Math.ceil(searching.length/PAGINATION)

    const newData = {
      products: searching.slice(firstProduct, endProduct),
      page: Number(page),
      pages: paginationNumbers(page, maxLength),
      length: searching.length
    }
    
    return newData
  }
}