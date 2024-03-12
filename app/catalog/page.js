import Image from 'next/image'
// import HeaderCat from '../components/headercatalog'
import Footer from '../components/footer'
import anime from 'animejs/lib/anime.es.js';
import { getFilms } from '@/services/films';
import { getSerials } from '@/services/serials';

export default async function page() {
  const films = await getFilms();
  const serials = await getSerials();
  return (
    <main className='container m-auto'>
      <section className='catalog'>
        <div className='catalog_left'>
          
          <div className='catalog_filter'>
          
            <div className='filter_point'>
              <p>Жанр</p>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>Фантастика</label>                
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>Боевик</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>Драма</label>  
              </div>
            </div>
            <div className='filter_point'>
              <p>Возраст</p>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>18+</label>  
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>12+</label>  
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>6+</label>  
              </div>
            </div>
            <div className='filter_point'>
              <p>Год релиза</p>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>2000-2012</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>2012-2020</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>2020-...</label>  
              </div>
            </div>
            
            <button className='button_clean'>Сбросить</button>
          </div>          
        
        </div>
   
        <div className='catalog_right'>

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
                <a href={`/catalog/${film.attributes.slug}`}>
                  <div className='film'>
                    <Image className='film_img' width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
                    <p className='film_name'>{film.attributes.name}</p>
                  </div>
                </a>
                
              ))}
            

               {serials.data.map(serial => (
                <a href='/filmpage'>
                  <div className='film'>
                    <Image className='film_img' width={220} height={350} src={serial.attributes.cover.data.attributes.url}></Image>
                    <p className='film_name'>{serial.attributes.name}</p>
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
