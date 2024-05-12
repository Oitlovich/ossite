'use client'
import { useState } from "react"
import { AuthUser } from "@/services/user/auth"
import { userInfo } from "@/services/user/userinfo"

export default function Auth() {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    async function onSubmit(event) {
        event.preventDefault()

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if(email.match(emailRegex) && pass.length >= 6) {
            const data = await AuthUser(email, pass)
            console.log(data)
            if(data != null) {
                const dataUser = await userInfo(data.jwt)

                localStorage.setItem('userJWT', data.jwt)
                localStorage.setItem('userData', dataUser.data)
                window.location.href = "/userpage";
            }
            else {
                alert('Пользователь не найден')
            }
        }  
        else {
            alert('Ошикбка ввода данных')
        }
    }

    return (
      <main className="">
        <section className="authorisation">
            <form onSubmit={onSubmit} className="authorisation_inputs">
              <h1 className="text-[40px]">Авторизация</h1>
              <div className="inputs">
                  <input className="bg-[#000]" placeholder="Введите логин" value={email} onChange={e => setEmail(e.target.value)}></input>
                  <input className="bg-[#000]" placeholder="Введите пароль" type="password" value={pass} onChange={e => setPass(e.target.value)}></input>
              </div>
              <button type="submit" className='authorisation_button'>Войти</button>
              <a href="/userpage/registration" className="inputs_link">Нет аккаунта?</a>
            </form>
            <div className="auth_video_block">
              <video autoPlay loop muted loading="lazy" className='auth_video' src="/video/SceneAuth.mp4"></video>
            </div>
        </section>
      </main>
    )
  }