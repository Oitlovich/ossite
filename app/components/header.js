import Image from 'next/image'

export default function Header() {
  return (
      <header>
        <div className='container'>
        <nav className='nav'>
          <a className='img_link' href='#'>
          <Image src='/icons/LogoOS.png' alt='' width={220} height={90}/>
          </a>
          <div className='div_links'>
            <a className='def_link' href='/main'>Главная</a>
            <a className='def_link' href='/catalog'>Каталог</a>
          </div>
          <div className='header_input'>
            <input placeholder='Поиск'/>
            <Image className='input_img' src='/icons/Vector.svg' alt='' width={15} height={15}/>
          </div>
          <a className='def_link' href='#'>
            <div className='auth_button'>
              <p className='text_link'>
                Вход
              </p>
            </div>
          </a>
          </nav>
        </div>
      </header>
  )
}
