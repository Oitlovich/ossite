import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer_column'>
          <a href='#'><Image></Image></a>
          <a href='#'>Главная</a>
          <a href='#'>Каталог</a>
        </div>
        <div className='footer_column'>
          <a href='#'>Регистрация</a>
          <a href='#'>Авторизация</a>
        </div>
        <div className='footer_column'>
          <a href=''>Политика конфиденциальности</a>
          <a href=''>Обратная связь</a>
          <a>© 2024 Все права защищены</a>
        </div>
      </div>
    </footer>
  )
}
