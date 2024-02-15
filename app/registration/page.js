export default function page() {
    return (
      <main>
        <section className="registration">
            <div className="autorisation_inputs">
                <h1>Регистрация</h1>
                <div className="inputs">
                    <input placeholder="Введите логин"></input>
                    <input placeholder="Введите пароль"></input>
                    <input placeholder="Повторите пароль"></input>
                    <input placeholder="Введите ФИО"></input>
                    <input placeholder="Введите E-mail"></input>
                </div>
                <a href='/autorisation' className='autorisation_button'>Зарегистрироваться</a>
                <a href="/registration" className="inputs_link">Уже есть аккаунт?</a>
            </div>
            {/* <div>
                <video src="/public/video/Scene.mp4"></video>
            </div> */}
        </section>
      </main>
    )
  }