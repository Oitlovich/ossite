'use client'

import { useDispatch, useSelector } from "react-redux"
import { changeFavorites } from "@/store/favorite/favorite.slice"
import { useState } from "react"

export default function FavoriteFilm({id, productsItems}){
    const dispatch = useDispatch()

    const userJwt = useSelector(state => state.user.userJwt)
    const userData = useSelector(state => state.user.userData)
    const favorites = useSelector(state => state.favorites.items)
    const [buttonClick, setButtonClick] = useState(false)

    function AddFavoritesItem(e) {
        let productPush = null
        let productClone = {};
        let productId = e.target.getAttribute("data-id")
        productsItems.data.map(product => {
            if(product.id == productId) productPush = product 
        });
        
        setButtonClick(true)
        setTimeout(() => {
            setButtonClick(false)
        }, 2000);

        if(productPush != null) {
            for (const [key, value] of Object.entries(productPush.attributes)) {
                productClone[key] = value
            }
            productClone.id = productPush.id
    
            dispatch(changeFavorites({
                film: productClone,
                jwt: userJwt,
                userId: userData.id
            }))
        }
    }
    if (userJwt && userData && favorites){
        return(
            <button disabled={buttonClick} data-id={id} className='film_favorite' onClick={(e)=> AddFavoritesItem(e)}>
                {favorites.favorite.filter(film => film.id == id).length > 0? "Удалить из избранного" : "В избранное"}
            </button>
        ) 
    }
    else{
        return(
            <a href='/userpage/authorisation' className='film_favorite flex justify-center items-center'>Войти</a>
        )
    }
   
}