import Image from 'next/image'
// import HeaderCat from '../components/headercatalog'
import Footer from '../components/footer'
export default function page() {
  return (
    <section className='catalog_page'>
        <div className='filter'>
            <div className='filters'>
              <div className='filt'> 
                <h1>Жанры</h1>
                <label>
                  <ul className='filt_ul'><input type='checkbox'></input><p>Комедия</p></ul>
                  <ul className='filt_ul'><input type='checkbox'></input><p>Драма</p></ul>
                  <ul className='filt_ul'><input type='checkbox'></input><p>Фантастика</p></ul>
                </label>
              </div>
              <div className='filt'>
                <h1>Возраст от</h1>
                <label>
                  <ul className='filt_ul'><input type='checkbox'></input><p>12+</p></ul>
                  <ul className='filt_ul'><input type='checkbox'></input><p>16+</p></ul>
                  <ul className='filt_ul'><input type='checkbox'></input><p>18+</p></ul>
                </label>
              </div>
            </div>
        </div>
        <div className='main_catalog'>
          <a href='/filmpage'>
          <div className='film'>
            <Image src='/images/image 6.png' alt='' width={220} height={300}/>
            <h1>Локи</h1>
            <div className='undfilm'>
              <p className='year'>2021</p>
              <Image src='/icons/Star.svg' alt='' width={10} height={10}/>
              <p className='rating'>12+</p>
            </div>
          </div>
          </a>
          <a href='/filmpage'>
          <div className='film'>
            <Image src='/images/image 6.png' alt='' width={220} height={300}/>
            <h1>Локи</h1>
            <div className='undfilm'>
              <p className='year'>2021</p>
              <Image src='/icons/Star.svg' alt='' width={10} height={10}/>
              <p className='rating'>12+</p>
            </div>
          </div>
          </a>
          <a href='/filmpage'>

          <div className='film'>
            <Image src='/images/image 6.png' alt='' width={220} height={300}/>
            <h1>Локи</h1>
            <div className='undfilm'>
              <p className='year'>2021</p>
              <Image src='/icons/Star.svg' alt='' width={10} height={10}/>
              <p className='rating'>12+</p>
            </div>
          </div>
          </a>
          <a href='/filmpage'>
          <div className='film'>
            <Image src='/images/image 6.png' alt='' width={220} height={300}/>
            <h1>Локи</h1>
            <div className='undfilm'>
              <p className='year'>2021</p>
              <Image src='/icons/Star.svg' alt='' width={10} height={10}/>
              <p className='rating'>12+</p>
            </div>
          </div>
          </a>
          <a href='/filmpage'>

          <div className='film'>
            <Image src='/images/image 6.png' alt='' width={220} height={300}/>
            <h1>Локи</h1>
            <div className='undfilm'>
              <p className='year'>2021</p>
              <Image src='/icons/Star.svg' alt='' width={10} height={10}/>
              <p className='rating'>12+</p>
            </div>
          </div>
          </a>
          <a href='/filmpage'>
          <div className='film'>
            <Image src='/images/image 6.png' alt='' width={220} height={300}/>
            <h1>Локи</h1>
            <div className='undfilm'>
              <p className='year'>2021</p>
              <Image src='/icons/Star.svg' alt='' width={10} height={10}/>
              <p className='rating'>12+</p>
            </div>
          </div>
          </a>
          <a href='/filmpage'>
          <div className='film'>
            <Image src='/images/image 6.png' alt='' width={220} height={300}/>
            <h1>Локи</h1>
            <div className='undfilm'>
              <p className='year'>2021</p>
              <Image src='/icons/Star.svg' alt='' width={10} height={10}/>
              <p className='rating'>12+</p>
            </div>
          </div>
          </a>
          <a href='/filmpage'>
          <div className='film'>
            <Image src='/images/image 6.png' alt='' width={220} height={300}/>
            <h1>Локи</h1>
            <div className='undfilm'>
              <p className='year'>2021</p>
              <Image src='/icons/Star.svg' alt='' width={10} height={10}/>
              <p className='rating'>12+</p>
            </div>
          </div>
          </a>
        </div>
    </section>
  )
}
