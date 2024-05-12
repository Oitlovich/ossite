'use client'

import { quitUser } from "@/store/user/user.slice"
import { useDispatch } from "react-redux"

export default function QuitButton() {
    const dispatch = useDispatch()

    function quit() {
        localStorage.removeItem('userData')
        localStorage.removeItem('userJWT')

        dispatch(quitUser())

        window.location.href = "/"
    }

    return (
        <div className="text-right mb-[67px]">
            <button className="auth_button" onClick={() => quit()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="#a0a0a0" d="M11.992 8.994V6.996H7.995v-2h3.997V2.999l3.998 2.998-3.998 2.998zm-1.998 2.998H5.996V2.998L2 1h7.995v2.998h1V1c0-.55-.45-.999-1-.999H.999A1.001 1.001 0 0 0 0 1v11.372c0 .39.22.73.55.91L5.996 16v-3.008h3.998c.55 0 1-.45 1-1V7.996h-1v3.998z"/></svg>
            </button>
        </div>
    )
}