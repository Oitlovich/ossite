import Image from 'next/image'
// import HeaderCat from '../components/headercatalog'
import Header from '../components/header'
import Footer from '../components/footer'
export default function page() {
  return (
    <section className='filmpage'>
        <div className='film_header'></div>
        <div className='film_header_black'></div>
        <div className='film_nameblock'>
          <div className='film_name'>
            <h1>
              Локи
            </h1>
          </div>
        <div className='red_string'></div>
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
                <div className='red_string'></div>
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
              </div>
            </div>
            
          </div>
        </div>
        <div className=''></div>
    </section>
  )
}
