export default function page() {
    return (
      <main>
        <section className="registration">
            <div className="authorisation_inputs">
                <h1>Регистрация</h1>
                <div className="inputs">
                    <input placeholder="Введите логин"></input>
                    <input placeholder="Введите пароль"></input>
                    <input placeholder="Повторите пароль"></input>
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