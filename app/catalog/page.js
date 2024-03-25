import Image from 'next/image'
import { getFilms } from '@/services/films';
import { getSerials } from '@/services/serials';

export default async function page() {
  const films = await getFilms();
  const serials = await getSerials();
  return (
    <main className='container m-auto'>
      <section className='catalog'>
        <div className='catalog_left'>
          
          <form className='catalog_filter'>
          
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
            
            <button className='button_clean' type='reset'>Сбросить</button>
          </form>          
        
        </div>
   
        <div className='catalog_right'>

          {/* <div className='filter_names'>
            
            <div className='filter_applyes'>
              <div className='filter_apply'>ЖАНР</div>
              <div className='filter_apply'>ЖАНР</div>
              <div className='filter_apply'>ЖАНР</div>
              <div className='filter_apply'>ЖАНР</div>
            </div>

          </div> */}
          <div className='mobile_block'>
              <button className='filter_apply'>Фильтры</button>
          </div>

          <div className='catalog_objects'>

              {films.data.map(film => (
                
                <a href={`/catalog/${film.attributes.slug}`}>
                  <div className='film relative flex justify-center items-center'>
                    {film.attributes.develop?(
                      <div className='absolute top-[0px] left-[0px] bg-[#000000BB] flex justify-center items-center h-[87%] z-[1]'>
                        <p className='text-center'>Находится в разработке</p>   
                      </div>
                    ):("")}
                    <Image className='film_img' width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
                    <p className='film_name'>{film.attributes.title}</p>
                  </div>
                </a>
                
              ))}

          </div>

        </div>
      </section>
    </main>
  )
}
