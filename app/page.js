import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'
export default function page() {
  return (
    <main>
      <section className='main_page'>
        <div className='left_part container'>
          <div className='Logo_text'>
            <p><span>O</span>itlovich</p>
            <div></div>
            <p><span>Studio</span></p>
          </div>
          <div><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века</p></div>
          <div className='left_part_buttons'>
            <a href=''>Регистрация</a>
            <a href=''>Каталог</a>
          </div>
        </div>
        <div className='right_part container'>
          <Image src="/images/micromainpage.png"></Image>
        </div>
      </section>
      <section className='command'>
        <div className='section_header container'>
          <h1><span>К</span>оманда озвучки</h1>   
        </div>
        <div className='command_slider container'>
          <div className='command_element'>
            <Image></Image>
            <p>Александр Копаев</p>
          </div>
          <div className='command_element'>
            <Image></Image>
            <p>Никита Мальцев</p>
          </div>
          <div className='command_element'>
            <Image></Image>
            <p>Сергей Малеев</p>
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
              <Image src="" width={200} height={342}></Image>
              <p></p>
              <p></p>
            </div>
          </a>
          <a href='#'>
            <div className='popular_element container'>
              <Image src="" width={200} height={342}></Image>
              <p></p>
              <p></p>
            </div>
          </a>
          <a href='#'>
            <div className='popular_element container'>
              <Image src="" width={200} height={342}></Image>
              <p></p>
              <p></p>
            </div>
          </a>
          <a href='#'>
            <div className='popular_element container'>
              <Image src="" width={200} height={342}></Image>
              <p></p>
              <p></p>
            </div>
          </a>
          <a href='#'>
            <div className='popular_element container'>
              <Image src="" width={200} height={342}></Image>
              <p></p>
              <p></p>
            </div>
          </a>
        </div>
      </section>
      <section className='beginnings'>
        <div className='left_part_beginnings container'>
          <div className='section_header container'>
            <h1><span>С</span>чего всё начиналось</h1>   
          </div>
          <p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века</p>
        </div>
        <div className='right_part_beginnings container'>
          <Image src="" width={333} height={436}></Image>
        </div>
      </section>
    </main>
  )
}
