export default function page() {
    return (
      <main>
        <section className="registration">
            <div className="authorisation_inputs">
                <h1 className="text-[40px]">Регистрация</h1>
                <div className="inputs">
                    <input className="bg-[#000]" placeholder="Введите логин"></input>
                    <input className="bg-[#000]" placeholder="Введите пароль" type="password"></input>
                    <input className="bg-[#000]" placeholder="Повторите пароль" type="password"></input>
                    <input placeholder="Введите ФИО"></input>
                    <input placeholder="Введите E-mail"></input>
                </div>
                <a href='#' className='authorisation_button'>Зарегистрироваться</a>
                <a href="/userpage/authorisation" className="inputs_link">Уже есть аккаунт?</a>
            </div>
            <div className="auth_video_block">
              <video autoPlay loop muted loading="lazy" className='auth_video' src="/video/SceneAuth.mp4"></video>
            </div>
        </section>
      </main>
    )
  }