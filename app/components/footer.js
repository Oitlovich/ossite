import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
          <Image src='/icons/LogoOS.png' alt='' width={220} height={90}/>
          <div className='footer_column1'>
              <a className='footer_link' href='#'>Политика конфиденциальности</a>
              <a className='footer_link' href='#'>©  2024 Все права защищены</a>
          </div>
          <div className='footer_column2'>
              <a className='footer_link' href='#'>Главная</a>
              <a className='footer_link' href='#'>Каталог</a>
              <a className='footer_link' href='#'>Регистрация</a>
              <a className='footer_link' href='#'>Авторизация</a>
          </div>
        </div>
    </footer>
  )
}
