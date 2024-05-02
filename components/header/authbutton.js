'use client'

import { useSelector } from "react-redux"

export default function AuthButton(){
    const user = useSelector(state => state.user.userData)
    if (user){
        return(
            <a href='/userpage' className='authorisation_button'>{user.username}</a>
        ) 
    }
    else{
        return(
            <a href='/userpage/authorisation' className='authorisation_button flex items-center justify-center'>Войти</a>
        )
    }
   
}