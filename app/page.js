import Image from 'next/image'
import Header from './components/header'
export default function page() {
  return (
    <section className='main_page'>
      <div className='container'>
        <div className='film_main'>
          <h1 className='film_name'>
            Локи
          </h1>
          <div className='desc'>
          <p>
            2021-2023 | 12+
          </p>
          <a href='#'>Подробнее</a>
        </div>
        </div>
      </div>
    </section>      
  )
}
