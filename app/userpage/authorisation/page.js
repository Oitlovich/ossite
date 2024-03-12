export default function page() {
    return (
      <main className="">
        <section className="authorisation">
            <div className="authorisation_inputs">
              <h1>Авторизация</h1>
              <div className="inputs">
                  <input placeholder="Введите логин"></input>
                  <input placeholder="Введите пароль"></input>
              </div>
              <a href='/userpage/authorisation' className='authorisation_button'>Войти</a>
              <a href="/userpage/registration" className="inputs_link">Нет аккаунта?</a>
            </div>
            <div className="auth_video_block">
              <video autoPlay loop muted loading="lazy" className='auth_video' src="/video/SceneAuth.mp4"></video>
            </div>
        </section>
      </main>
    )
  }