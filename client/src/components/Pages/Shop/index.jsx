import React, { useState, useEffect } from "react"
import "./Shop.css"
import { Sidebar } from "./components/Sidebar"
import { Showcase } from "./components/Showcase"
import { setFilterColor } from "../../../helpers/setFilterColor"

const FILTER_FORM = {
    input: "",
    category: "All",
    colors: [],
    priceMin: 0,
    priceMax: 250,
    sorting: "id", 
    pageNumber: 0
}

export const Shop = () => {
    const [filterForm, setFilterForm] = useState(FILTER_FORM)
    const [productsInfo, setProductsInfo] = useState({products:[], length: 0})
    const [favoriteInfo, setFavoriteInfo] = useState([])

    // console.log(filterForm) // не знаю почему, на сервер приходит один запрос и ответ, а консоль выводится два раз (без строгого режима)

    const changeFilterForm = (key, value) => {
        const newFilterForm = {...filterForm}

        switch (key) {
            case "colors":
                const colors = setFilterColor(newFilterForm.colors, value)

                newFilterForm[key] = colors
                break
            default:
                newFilterForm[key] = value
                break
        }

        setFilterForm(newFilterForm)
    }

    const requestObj = () => {
        return new URLSearchParams(filterForm);
    }

    const changeFavorite = (product) => {
        fetch(`http://localhost:8000/products/favorite/change`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                addproduct: product
            })
        })
            .then((res) => res.json())
            .then((data) => setFavoriteInfo(data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        const params = requestObj()
        fetch(`http://localhost:8000/products?${params.toString()}`)
            .then((res) => res.json())
            .then((data) => setProductsInfo(data))
            .catch((err) => console.log(err))
    }, [filterForm])

    useEffect(() => {
        fetch(`http://localhost:8000/products/favorite`)
            .then((res) => res.json())
            .then((data) => setFavoriteInfo(data.favoriteProduct))
            .catch((err) => console.log(err))
    }, [])

    return(
        <div className="shop">
            <Sidebar changeFilterForm={changeFilterForm} />
            <Showcase changeFilterForm={changeFilterForm} productsInfo={productsInfo} changeFavorite={changeFavorite} favoriteInfo={favoriteInfo}/>
        </div>
    )
}