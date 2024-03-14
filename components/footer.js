import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='footer_column'>
        <a href='#'><Image src="/icons/NewOSLogo.png" width={133} height={64}></Image></a>
          <a href='/'>Главная</a>
          <a href='/catalog'>Каталог</a>
        </div>
        <div className='footer_column'>
          <a href='/registration'>Регистрация</a>
          <a href='/autorisation'>Авторизация</a>
        </div>
        <div className='footer_column'>
          <a href='#'>Политика конфиденциальности</a>
          <a href='https://t.me/oitlovich'>Обратная связь</a>
          <a href='#'>© 2024 Все права защищены</a>
        </div>
      </div>
    </footer>
  )
}
