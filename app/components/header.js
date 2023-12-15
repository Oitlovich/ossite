import Image from 'next/image'

export default function Header() {
  return (
      <header>
        <div className='container'>
        <nav className='nav'>
          <a className='img_link' href='#'>
          <Image className='logo' src='/icons/LogoOS.png' alt='' width={220} height={90}/>
          </a>
          <div className='div_links'>
            <a className='def_link' href='/main'>Главная</a>
            <a className='def_link' href='/catalog'>Каталог</a>
          </div>
          <div className='header_input'>
            <input placeholder='Поиск'/>
            <Image className='input_img' src='/icons/Vector.svg' alt='' width={24} height={24}/>
          </div>
          <a className='def_link' href='#'>
            <div className='auth_button'>
              <div className='auth_button_bg'>Вход</div>
            </div>
          </a>
          </nav>
        </div>
      </header>
  )
}
