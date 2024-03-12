import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { getFilms } from '@/services/films';
// const swiper = new Swiper(...);
// window.pageYOffset > 100 ? nav.classList.remove("nav_bar_section_nodisplay") : nav.classList.add("nav_bar_section_nodisplay")
export default async function page() {
  const films = await getFilms();

  return (
    <main>
      <div className='container m-auto'>
        
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
            {films.data.map(film => (
                <a href={`/catalog/${film.attributes.slug}`}>
                  <div className='film'>
                    {console.log(film.attributes)}
                    <Image className='film_img' width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
                    <p className='film_name'>{film.attributes.name}</p>
                  </div>
                </a>
                
              ))}
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
