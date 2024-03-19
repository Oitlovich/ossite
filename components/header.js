import Image from 'next/image'
import { Searcher } from './search'
import { getFilms } from '@/services/films'

export default async function Header() {
  const films = await getFilms();
  return (
      <header>
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
            <div className='mobile_block'>
              <svg xmlns="http://www.w3.org/2000/svg" stroke='#fff' viewBox="0 0 32 32"><g id="_115_menu-01" data-name="115 menu-01"><rect x="4" y="15" width="24" height="2"/><rect x="4" y="6" width="24" height="2"/><rect x="4" y="24" width="24" height="2"/></g></svg>
            </div>
          </div>
        </div>
      </header>
  )
}
