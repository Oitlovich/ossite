import Image from 'next/image'
export default function page() {
  return (
    <section className='main_page'>
      <div className='container'>
        <div className='film_main'>
          <p className='film_name'>MANDOLORIAN</p>
          <div className='desc'>
            <p>2021-2023 | 12+</p>
            <a href='#'>Подробнее</a>
          </div>
          {/* <div className='info'>
            <input id='infobody1' className='info_switch' type='checkbox'/>
            <label className='info_headline'>
              "Описание"
            </label>
            <div className='info_body'>
              <p>
                Локи попадает в таинственную организацию «Управление временными аномалиями" после того, как он украл Тессеракт, и путешествует во времени, меняя историю.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      {/* <section className='popular_sec'>
          <div className='popular_block'>
            <div className='film_block'>
              <Image className='film_image' src='/images/Loki_pic.png' alt='' width={180} height={300}/>
              <h1>Локи</h1>
              <p>2021-2023 | 12+</p>
            </div>
            <div className='film_block'>
              <Image className='film_image' src='/images/Loki_pic.png' alt='' width={180} height={300}/>
              <h1>Локи</h1>
              <p>2021-2023 | 12+</p>
            </div>
            <div className='film_block'>
              <Image className='film_image' src='/images/Loki_pic.png' alt='' width={180} height={300}/>
              <h1>Локи</h1>
              <p>2021-2023 | 12+</p>
            </div>
            <div className='film_block'>
              <Image className='film_image' src='/images/Loki_pic.png' alt='' width={180} height={300}/>
              <h1>Локи</h1>
              <p>2021-2023 | 12+</p>
            </div>
          </div>
        </section> */}
    </section>
  )
}
