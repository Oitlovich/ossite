'use client'

import { useSelector } from "react-redux"

export default function FavoriteFilm(){
    const user = useSelector(state => state.user.userData)
    if (user){
        return(
            <button className='film_favorite'>В избранное</button>
        ) 
    }
    else{
        return(
            <a href='/userpage/authorisation' className='film_favorite'>Войти</a>
        )
    }
   
}