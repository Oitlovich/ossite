'use client'
import Image from 'next/image'
import { Searcher } from './search'
import { getFilms } from '@/services/films'
import anime from "animejs"

export default async function Header() {
  const films = await getFilms();
  function BurgerClick() {
    if(document.querySelector('.burger_menu').classList.contains('active')) {
        document.querySelector('.burger_menu').classList.remove('active')

        anime({
            targets: '.burger_menu',
            top: '-100vh',
            duration: 500,
            easing: 'spring(1, 100, 20, 10)'
        })
    }
    else {
        document.querySelector('.burger_menu').classList.add('active')
        
        anime({
            targets: '.burger_menu.active',
            top: '0vh',
            duration: 700,
            easing: 'spring(1, 100, 15, 5)'
        })
    }
  }
  return (
      <header className='mobile_header hidden'>
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
            
            <button className='burger_button hidden' onClick={() => BurgerClick()}>
              <svg width="35" height="20" className='burger_button hidden' viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1H31M1 8H24.75M1 15H31" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          
          
          </div>
        </div>
      </header>
  )
}
