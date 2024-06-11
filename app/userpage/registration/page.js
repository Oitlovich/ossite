'use client'
import { useState } from "react"
import { regUser } from "@/services/user/reg"

export default function page() {
  const [policy, setPolicy] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  
  async function onSubmit(e){
    e.preventDefault()

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    // Проверка политики
    if(policy) {
      if(email.match(emailRegex) && name.length >= 2 && password.length >= 6 && password == password2) {
        const data = await regUser(email, name, password)

        if(data != null && 'jwt' in data) {
            localStorage.setItem('userJWT', data.jwt)
            window.location.href = "/userpage";
        }
        else {
            alert('Пользотель с таких email уже существует')
        }
      }
      else {
        if (password.length < 6) {
            alert('Пароль должен быть больше 6 символов')
        }
        else if(password != password2){
            alert('Пароли не совпадают')
        }
        else {
            alert('Ошибка данных')
        }
      }
    }
    else{
      alert("Для того, чтобы продолжить, вы должны согласиться с пользовательским соглашением")
    }
  }
    return (
      <main>
        <section className="registration">
            <form onSubmit={e => onSubmit(e)} className="authorisation_inputs">
                <h1 className="text-[40px]">Регистрация</h1>
                <div className="inputs">
                  <input placeholder="Введите имя" value={name} onChange={e => setName(e.target.value)}></input>
                    <input className="bg-[#000]" value={email} onChange={e => setEmail(e.target.value)} placeholder="Введите Email"></input>
                    <input className="bg-[#000]" value={password} onChange={e => setPassword(e.target.value)} placeholder="Введите пароль" type="password"></input>
                    <input className="bg-[#000]" value={password2} onChange={e => setPassword2(e.target.value)} placeholder="Повторите пароль" type="password"></input>
                </div>
                <button className='authorisation_button' type="submit">Зарегистрироваться</button>
                <div className=''>
                      <label for='accept'>
  
                          <p className='w-[70%] ml-[100px] text-[16px] text-[#969696]'>Я принимаю условия <a href='/user_accept.pdf' download className='text-[16px] underline'>пользовательского соглашения</a> и <a href='/policy.pdf' download className='text-[16px] underline'>политики конфеденциальности</a>, а также даю согласие на обработку персональных данных</p>
                          <label for='accept' className='absolute w-[35px] h-[35px]'>
                              <input id='accept' type="checkbox"  className='option-input2 flex justify-center items-center w-[35px] h-[35px] checkbox absolute translate-y-[-20px] translate-x-[80px]'/>
                          </label>
                      </label>
                </div>
                <a href="/userpage/authorisation" className="inputs_link">Уже есть аккаунт?</a>
            </form>
            <div className="auth_video_block">
              <video autoPlay loop muted loading="lazy" className='auth_video' src="/video/SceneAuth.mp4"></video>
            </div>
        </section>
      </main>
    )
  }