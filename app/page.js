import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'
export default function page() {
  return (
    <main>
      <section className='main_page'>
        <div className='left_part container'>
          {/* <div className='Logo_text'>
            <p><span>O</span>itlovich</p>
            <div></div>
            <p><span>Studio</span></p>
          </div> */}
          <Image className='main_logo' src="/icons/logo_main.png" width={523} height={222}></Image>
          <div className='main_text'><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века</p></div>
          <div className='left_part_buttons'>
            <a className='button1' href='#'>Регистрация</a>
            <a className='button2' href='#'>Каталог</a>
          </div>
        </div>
        <div className='right_part container'>
          <Image src="/images/micromainpage.png" width={910} height={760}></Image>
        </div>
      </section>
      <section className='command'>
        <div className='section_header container'>
          <h1><span>К</span>оманда озвучки</h1>   
        </div>
        <div className='command_slider container'>
          <div className='command_border'>
            <div className='command_element'>
              <Image className='command_image' src="/images/Photo1.jpg" width={340} height={340}></Image>
              <div>
                <p>Александр Копаев</p>
              </div>
            </div>
          </div>
          <div className='command_element'>
            <Image className='command_image' src="/images/Photo2.jpg" width={340} height={340}></Image>
            <div>
              <p>Никита Мальцев</p>
            </div>
          </div>
          <div className='command_element'>
            <Image className='command_image' src="/images/Photo3.jpg" width={340} height={340}></Image>
            <div>
              <p>Сергей Малеев</p>
            </div>
          </div>
        </div>
      </section>
      <section className='popular'>
        <div className='popular_header container'>
          <h1><span>П</span>опулярное</h1>
          <a href='#'>Показать больше</a>   
        </div>
        <div className='popular_main container'>
          <a href='#'>
            <div className='popular_element container'>
              <Image src="/images/Oderzhimost.png" width={200} height={342}></Image>
              <div className='popular_element_text'>
                <p className='name'>Одержимость</p>
                <p className='year'>2013</p>
              </div>
            </div>
          </a>
          <a href='#'>
            <div className='popular_element container'>
              <Image src="/images/loki.png" width={200} height={342}></Image>
              <div className='popular_element_text'>
                <p className='name'>Локи</p>
                <p className='year'>2021</p>
              </div>
            </div>
          </a>
          <a href='#'>
            <div className='popular_element container'>
              <Image src="/images/Uchitelnazamenu.png" width={200} height={342}></Image>
              <div className='popular_element_text'>
                <p className='name'>Учитель на замену</p>
                <p className='year'>2011</p>
              </div>
            </div>
          </a>
          <a href='#'>
            <div className='popular_element container'>
              <Image src="/images/Joker.png" width={200} height={342}></Image>
              <div className='popular_element_text'>
                <p className='name'>Джокер</p>
                <p className='year'>2021</p>
              </div>
            </div>
          </a>
          <a href='#'>
            <div className='popular_element container'>
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
        <div className='left_part_beginnings container'>
          <div className='section_header'>
            <h1><span>С</span> чего всё начиналось</h1>   
          </div>
          <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века</p>
        </div>
        <div className='right_part_beginnings container'>
          <a href='https://t.me/oitlovich_st'><Image className='telegram_image' src="/images/telegramm.png" width={333} height={436}></Image></a>
        </div>
      </section>
    </main>
  )
}
