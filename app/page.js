import Image from 'next/image'
import Header from './components/header'
export default function page() {
  return (
    <section className='main_page'>
      <div className='container'>
        <div className='film_main'>
          <h1 className='film_name'>Локи</h1>
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
                Локи попадает в таинственную организацию «Управление временными изменениями» после того, как он украл Тессеракт, и путешествует во времени, меняя историю.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>      
  )
}
