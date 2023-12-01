import Image from 'next/image'
// import HeaderCat from '../components/headercatalog'
import Header from '../components/header'
import Footer from '../components/footer'
export default function page() {
  return (
    <section className='filmpage'>
      <div className='film_black_header'>
        <div className='film_header'>
          <Image className='film_header_image' src='/images/image 1 (1).png' alt='' width={1900} height={730}/>
        </div>
        <div className='film_header_black'></div>
      </div>
        <div className='film_nameblock'>
          <div className='film_name'>
            <h1>
              Локи
            </h1>
          </div>
        </div>
        <div className='film_desc'>
          <div className='film_left_side'>
            <div className='film_image'></div>
            <div className='film_image_buttons'></div>
          </div>
          <div className='film_right_side'>
            <div className='rs_name'>
              <div>
                <h2>Локи</h2>
                <p>Американский сериал, созданный Майклом Уолдроном для стримингового сервиса Disney+ и основанный на одноимённом персонаже из Marvel Comics</p>
              </div>
            </div>
            <div className='rs_rating'>
              <div>
                <Image></Image>
                <Image></Image>
                <Image></Image>
                <Image></Image>
                <Image></Image>
                <div>
                  <p>4.7</p>
                </div>
                <div><p>PG-13</p></div>
                <div><p>8 сезонов</p></div>
                <div><p>2021</p></div>
                <p>Галерея</p>
              </div>
            </div>
            <div className='rs_details'>
              <h1>Детали</h1>
              <p><b>Жанр:</b>Экшн, Фентези, Драма</p>
              <p><b>Страна:</b>США</p>
              <p><b>Режиссёр:</b>Алан Тейлор</p>
              <p><b>Сценарист:</b>Джордж Мартин</p>
            </div>
            <div className='rs_acters'>
              <h1>Актёры</h1>
              <p>Том Хиддлстон</p>
              <p>Оуэн Уилсон</p>
              <p>София ди Мартино</p>
            </div>
            <div>
            <video></video>
            <Image></Image><Image></Image>
            </div>
          </div>
          <div>
          <div>
            <h1>
              Описание
            </h1>
          </div>
          <div>
            <p>
              Бог коварства попадает в УВА и находит там новых друзей, а что будет дальше мы прямо сейчас м узнаем.
            </p>
          </div>
          </div>
        </div>
        <div className=''></div>
    </section>
  )
}
