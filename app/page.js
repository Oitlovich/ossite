import Image from 'next/image'
import Header from './components/header'
import Footer from './components/footer'
export default function page() {
  return (
    <section className='main_page'>
      <div className='left_part'>
        <div className='Logo_text'>
          <p><span>O</span>itlovich</p>
          <div></div>
          <p><span>Studio</span></p>
        </div>
        <div>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века</div>
        <div className='left_part_buttons'>
          <a href=''>Регистрация</a>
          <a href=''>Каталог</a>
        </div>
      </div>
      <div className='right_part'>
        <Image src="/images/micromainpage.png"></Image>
      </div>
    </section>
  )
}
