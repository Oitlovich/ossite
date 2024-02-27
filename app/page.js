import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// const swiper = new Swiper(...);
// window.pageYOffset > 100 ? nav.classList.remove("nav_bar_section_nodisplay") : nav.classList.add("nav_bar_section_nodisplay")
export default function page() {
  return (
    <main>
      <div className='container m-auto'>
        
        <nav class="fixed-nav-bar nav_bar_section_nodisplay">
          <div className='header_mainpart'>
              <a href='/'><Image src="/icons/NewOSLogo.png" width={133} height={60}></Image></a>
              <nav>
                <div className='header_links'>
                  <a href='/'><p>Главная</p></a>
                  <a href='/catalog'><p>Каталог</p></a>
                </div>
                <div className='header_search'>
                  <input placeholder='Поиск'></input>
                  <svg width="25" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10.4259C0 16.0386 4.6683 20.5998 10.4013 20.5998C13.0426 20.5998 15.4586 19.6285 17.2963 18.0363L23.9251 24.5202C24.0479 24.6403 24.2066 24.7004 24.3704 24.7004C24.5342 24.7004 24.6929 24.6403 24.8157 24.5202C25.0614 24.2799 25.0614 23.8943 24.8157 23.654L18.1818 17.1701C19.8096 15.3727 20.8026 13.0144 20.8026 10.4259C20.8026 4.8132 16.1343 0.251953 10.4013 0.251953C4.6683 0.251953 0 4.8132 0 10.4259ZM19.5485 10.4259C19.5485 15.3576 15.4433 19.3731 10.4013 19.3731C5.35934 19.3731 1.2541 15.3576 1.2541 10.4259C1.2541 5.49413 5.35934 1.47863 10.4013 1.47863C15.4433 1.47863 19.5485 5.48912 19.5485 10.4259Z" fill="white"/>
                  </svg>
                </div>
              </nav>
              <a href='/autorisation' className='autorisation_button'>Войти</a>
            </div>
        </nav>
        
        <section className='main_page'>
        
          <div className='left_part '>
            <Image className='main_logo' src="/icons/logo_main.png" width={523} height={222}></Image>
            <div className='main_text'><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века</p></div>
            <div className='left_part_buttons'>
              <a className='button1' href='#'>Регистрация</a>
              <a className='button2' href='/catalog'>Каталог</a>
            </div>
          </div>
        
          <div className='right_part '>
            <Image className='right_part_img right_part_img1' src="/images/main_back.png" width={729} height={803}></Image>
            <Image className='right_part_img right_part_img2' src="/images/main_microphone.png" width={661} height={661}></Image>
          </div>
        
        </section>
        <section className='command'>
          
          <div className='section_header'>
            <h1><span>К</span>оманда озвучки</h1>   
          </div>
          
          <div className='command_slider slider '>
          
            <div className='command_border slider-wrapper'>
          
              <div className='command_element swiper-slide'>
                <Image className='command_image' src="/images/Photo1.jpg" width={340} height={340}></Image>
                <div>
                  <p>Александр Копаев</p>
                </div>
              </div>
          
              <div className='command_element swiper-slide'>
                <Image className='command_image' src="/images/Photo2.jpg" width={340} height={340}></Image>
                <div>
                  <p>Никита Мальцев</p>
                </div>
              </div>
          
              <div className='command_element swiper-slide'>
                <Image className='command_image' src="/images/Photo3.jpg" width={340} height={340}></Image>
                <div>
                  <p>Сергей Малеев</p>
                </div>
              </div>

            </div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          
          </div>
        </section>
        <section className='popular'>
          <div className='popular_header '>
            <h1><span>П</span>опулярное</h1>
            <a href='/catalog'>Показать больше</a>   
          </div>
          <div className='popular_main '>
            <a href='#'>
              <div className='popular_element '>
                <Image src="/images/Oderzhimost.png" width={200} height={342}></Image>
                <div className='popular_element_text'>
                  <p className='name'>Одержимость</p>
                  <p className='year'>2013</p>
                </div>
              </div>
            </a>
            <a href='#'>
              <div className='popular_element '>
                <Image src="/images/loki.png" width={200} height={342}></Image>
                <div className='popular_element_text'>
                  <p className='name'>Локи</p>
                  <p className='year'>2021</p>
                </div>
              </div>
            </a>
            <a href='#'>
              <div className='popular_element '>
                <Image src="/images/Uchitelnazamenu.png" width={200} height={342}></Image>
                <div className='popular_element_text'>
                  <p className='name'>Учитель на замену</p>
                  <p className='year'>2011</p>
                </div>
              </div>
            </a>
            <a href='#'>
              <div className='popular_element '>
                <Image src="/images/Joker.png" width={200} height={342}></Image>
                <div className='popular_element_text'>
                  <p className='name'>Джокер</p>
                  <p className='year'>2021</p>
                </div>
              </div>
            </a>
            <a href='#'>
              <div className='popular_element '>
                <Image src="/images/mandalorec.png" width={200} height={342}></Image>
                <div className='popular_element_text'>
                  <p className='name'>Мандалорец</p>
                  <p className='year'>2021</p>
                </div>
              </div>
            </a>
          </div>
        </section>
        <section className='beginnings'>
          <div className='left_part_beginnings '>
            <div className='section_header'>
              <h1><span>С</span> чего всё начиналось</h1>   
            </div>
            <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века</p>
          </div>
          <div className='right_part_beginnings '>
            <a href='https://t.me/oitlovich_st'><Image className='telegram_image' src="/images/telegramm.png" width={333} height={436}></Image></a>
          </div>
        </section>
      </div>
    </main>
  )
}
