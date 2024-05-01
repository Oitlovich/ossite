'use client'

import { useEffect } from "react";

export default function CheckAuthUser() {
    useEffect(() => {
        if (!localStorage.getItem('userJWT')) {
            window.location.href = "/userpage/authorisation";
        }
    })
    
    return ''
}
