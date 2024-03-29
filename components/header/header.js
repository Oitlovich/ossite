import Image from 'next/image'
import { Searcher } from './search'
import { getFilms } from '@/services/films'

export default async function Header() {
  const films = await getFilms();
  return (
      <header className=''>
        <div className='container'>
          <div className='header_mainpart'>
            <a className='logo_link' href='/'><Image src="/icons/NewOSLogo.png" width={133} height={60}></Image></a>
            <nav>
              <div className='header_links'>
                <a href='/'><p>Главная</p></a>
                <a href='/catalog'><p>Каталог</p></a>
              </div>
              <Searcher dropped_catalog = {films} DB_HOST = {process.env.DB_HOST}/>
            </nav>
            <a href='/userpage/authorisation' className='authorisation_button'>Войти</a>
            <div className='burger_button'>
              <svg width="35" height="19" className='burger_button hidden' viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H31M1 8H24.75M1 15H31" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>
      </header>
  )
}
