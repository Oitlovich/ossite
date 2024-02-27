import Image from 'next/image'
// import HeaderCat from '../components/headercatalog'
import Footer from '../components/footer'
import anime from 'animejs/lib/anime.es.js';
import { getFilms } from '@/services/films';
import { getSerials } from '@/services/serials';

export default async function page() {
  const films = await getFilms();
  console.log(films);
  const serial = await getSerials();
  return (
    <main>
      <section className='catalog'>
        <div className='catalog_left'>
          
          <div className='catalog_filter'>
          
            <div className='filter_point'>
              <p>Жанр</p>
              <div className='markers'>
                <input name='genor' className='checkbox_custom' type='checkbox'></input>
                <label for='genor'></label>
                <p>Фантастика</p>
              </div>
              <div className='markers'>
                <input type='checkbox'></input>
                <label></label>
                <p>Боевик</p>
              </div>
              <div className='markers'>
                <input type='checkbox'></input>
                <label></label>
                <p>Драма</p>
              </div>
            </div>
            <div className='filter_point'>
              <p>Возраст</p>
              <div className='markers'>
                <input type='checkbox'></input>
                <p>12+</p>
              </div>
              <div className='markers'>
                <input type='checkbox'></input>
                <p>16+</p>
              </div>
              <div className='markers'>
                <input type='checkbox'></input>
                <p>18+</p>
              </div>
            </div>
            <div className='filter_point'>
              <p>Год релиза</p>
              <div className='markers'>
                <input type='checkbox'></input>
                <p>2000-2010</p>
              </div>
              <div className='markers'>
                <input type='checkbox'></input>
                <p>2010-2015</p>
              </div>
              <div className='markers'>
                <input type='checkbox'></input>
                <p>2015-2024</p>
              </div>
            </div>
            
            <button className='button_clean'>Сбросить</button>
          </div>          
        
        </div>
   
        <div className='catalog_right container'>

          <div className='filter_names'>
            
            <div className='filter_applyes'>
              <div className='filter_apply'>ЖАНР</div>
              <div className='filter_apply'>ЖАНР</div>
              <div className='filter_apply'>ЖАНР</div>
              <div className='filter_apply'>ЖАНР</div>
            </div>

          </div>

          <div className='catalog_objects'>

              {films.data.map(film => (
                <a href='/filmpage'>
                  <div className='film'>
                    <Image className='film_img' width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
                    <p>{film.attributes.name}</p>
                  </div>
                </a>
              ))}

            {/* <a href='/filmpage'>
              <div className='film'>
                <Image className='film_img' width={220} height={350} src="/images/loki.png"></Image>
                <p>Локи</p>
              </div>
            </a>

            <a href='/filmpage'>
              <div className='film'>
                <Image className='film_img' width={220} height={350} src="/images/loki.png"></Image>
                <p>Локи</p>
              </div>
            </a>
            <a href='/filmpage'>  
              <div className='film'>
                <Image className='film_img' width={220} height={350} src="/images/loki.png"></Image>
                <p>Бесконечность</p>
              </div>
            </a>
            <a href='/filmpage'>
              <div className='film'>
                <Image className='film_img' width={220} height={350} src="/images/Oderzhimost.png"></Image>
                <p>Одержимость</p>
              </div>
            </a>
            <a href='/filmpage'>
              <div className='film'>
                <Image className='film_img' width={220} height={350} src="/images/Joker.png"></Image>
                <p>Джокер</p>
              </div>
            </a>
            <a href='/filmpage'>
              <div className='film'>
                <Image className='film_img' width={220} height={350} src="/images/mandalorec.png"></Image>
                <p>Мандалорец</p>
              </div>
            </a>
            <a href='/filmpage'>
              <div className='film'>
                <Image className='film_img' width={220} height={350} src="/images/Uchitelnazamenu.png"></Image>
                <p>Учитель на замену</p>
              </div>
            </a> */}

          </div>

        </div>
      </section>
    </main>
  )
}
