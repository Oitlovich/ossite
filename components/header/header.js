import Image from 'next/image'
import { Searcher } from './search'
import { getFilms } from '@/services/films'
import anime from 'animejs'
import BurgerBtn from './burgerbtn'
import BurgerMenu from './burgermenu'
import AuthButton from './authbutton'
import GetUserInfo from '@/app/features/getuserinfo'
import ReCaptcha from '@/app/features/recaptcha'


export default async function Header() {
  const films = await getFilms();
  return (
      <header className=''>
        <GetUserInfo/>
        <ReCaptcha/>
        <div className='container'>
          <div className='header_mainpart'>
            <a className='logo_link' href='/'><Image src="/icons/NewOSLogo.png" alt="Изображение логотипа" width={133} height={60}></Image></a>
            <nav>
              <div className='header_links'>
                <a href='/'><p>Главная</p></a>
                <a href='/catalog'><p>Каталог</p></a>
              </div>
              <Searcher dropped_catalog = {films}/>
            </nav>

            <AuthButton/>

            {/* <div className='burger_button'>
              <svg width="35" height="19" className='burger_button hidden' viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H31M1 8H24.75M1 15H31" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div> */}
            <BurgerMenu/>
            <div className='mobile_block'>
              <svg width="35" height="19" className='absolute right-[8%]' viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H31M1 8H24.75M1 15H31" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              <div className='opacity-0 absolute right-[8%]'>
                <BurgerBtn/>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}
