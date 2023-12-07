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
          <a className='link_filmpage' href='/films/lokipage'>
          <div className='film'>
            <Image className='film_mag' src='/images/magazine_loki.png' alt='' width={220} height={300}/>
            <h1>Локи</h1>
          </div>
          </a>
          <a className='link_filmpage' href='/films/mandopage'>
          <div className='film'>
            <Image className='film_mag' src='/images/35620-1000x830.jpg' alt='' width={220} height={300}/>
            <h1>Мандолорец</h1>
          </div>
          </a>
        </div>
    </section>
  )
}
