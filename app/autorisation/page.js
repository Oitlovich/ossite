export default function page() {
    return (
      <main>
        <section className="autorisation">
            <div className="autorisation_inputs">
                <h1>Авторизация</h1>
                <div className="inputs">
                    <input placeholder="Введите логин"></input>
                    <input placeholder="Введите пароль"></input>
                </div>
                <a href='/autorisation' className='autorisation_button'>Войти</a>
                <a href="/registration" className="inputs_link">Нет аккаунта?</a>
            </div>
            {/* <div>
                <video src="/public/video/Scene.mp4"></video>
            </div> */}
        </section>
      </main>
    )
  }