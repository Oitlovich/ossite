import Image from 'next/image'
// import HeaderCat from '../components/headercatalog'
import Footer from '../components/footer'
export default function page() {
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
            
            <div className='catalog_view'>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12.4" height="12.4" rx="2" fill="url(#paint0_linear_315_202)"/>
            <rect x="18.5996" width="12.4" height="12.4" rx="2" fill="url(#paint1_linear_315_202)"/>
            <rect x="18.5996" y="18.5996" width="12.4" height="12.4" rx="2" fill="url(#paint2_linear_315_202)"/>
            <rect y="18.5996" width="12.4" height="12.4" rx="2" fill="url(#paint3_linear_315_202)"/>
            <defs>
            <linearGradient id="paint0_linear_315_202" x1="6.2" y1="0" x2="6.2" y2="12.4" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8C0184"/>
            <stop offset="0.0104491" stop-color="#8C0184"/>
            <stop offset="0.0227476" stop-color="#8B0284"/>
            <stop offset="0.0383219" stop-color="#8A0385"/>
            <stop offset="0.0585987" stop-color="#890586"/>
            <stop offset="0.0850045" stop-color="#860988"/>
            <stop offset="0.118966" stop-color="#830E8A"/>
            <stop offset="0.161909" stop-color="#7E158E"/>
            <stop offset="0.215261" stop-color="#781E92"/>
            <stop offset="0.280449" stop-color="#702997"/>
            <stop offset="0.358898" stop-color="#66369E"/>
            <stop offset="0.452035" stop-color="#5B46A6"/>
            <stop offset="0.561288" stop-color="#4D5AAF"/>
            <stop offset="0.688082" stop-color="#3D70BA"/>
            <stop offset="0.833844" stop-color="#2A8AC7"/>
            <stop offset="1" stop-color="#15A8D5"/>
            </linearGradient>
            <linearGradient id="paint1_linear_315_202" x1="24.7996" y1="0" x2="24.7996" y2="12.4" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8C0184"/>
            <stop offset="0.0104491" stop-color="#8C0184"/>
            <stop offset="0.0227476" stop-color="#8B0284"/>
            <stop offset="0.0383219" stop-color="#8A0385"/>
            <stop offset="0.0585987" stop-color="#890586"/>
            <stop offset="0.0850045" stop-color="#860988"/>
            <stop offset="0.118966" stop-color="#830E8A"/>
            <stop offset="0.161909" stop-color="#7E158E"/>
            <stop offset="0.215261" stop-color="#781E92"/>
            <stop offset="0.280449" stop-color="#702997"/>
            <stop offset="0.358898" stop-color="#66369E"/>
            <stop offset="0.452035" stop-color="#5B46A6"/>
            <stop offset="0.561288" stop-color="#4D5AAF"/>
            <stop offset="0.688082" stop-color="#3D70BA"/>
            <stop offset="0.833844" stop-color="#2A8AC7"/>
            <stop offset="1" stop-color="#15A8D5"/>
            </linearGradient>
            <linearGradient id="paint2_linear_315_202" x1="24.7996" y1="18.5996" x2="24.7996" y2="30.9996" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8C0184"/>
            <stop offset="0.0104491" stop-color="#8C0184"/>
            <stop offset="0.0227476" stop-color="#8B0284"/>
            <stop offset="0.0383219" stop-color="#8A0385"/>
            <stop offset="0.0585987" stop-color="#890586"/>
            <stop offset="0.0850045" stop-color="#860988"/>
            <stop offset="0.118966" stop-color="#830E8A"/>
            <stop offset="0.161909" stop-color="#7E158E"/>
            <stop offset="0.215261" stop-color="#781E92"/>
            <stop offset="0.280449" stop-color="#702997"/>
            <stop offset="0.358898" stop-color="#66369E"/>
            <stop offset="0.452035" stop-color="#5B46A6"/>
            <stop offset="0.561288" stop-color="#4D5AAF"/>
            <stop offset="0.688082" stop-color="#3D70BA"/>
            <stop offset="0.833844" stop-color="#2A8AC7"/>
            <stop offset="1" stop-color="#15A8D5"/>
            </linearGradient>
            <linearGradient id="paint3_linear_315_202" x1="6.2" y1="18.5996" x2="6.2" y2="30.9996" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8C0184"/>
            <stop offset="0.0104491" stop-color="#8C0184"/>
            <stop offset="0.0227476" stop-color="#8B0284"/>
            <stop offset="0.0383219" stop-color="#8A0385"/>
            <stop offset="0.0585987" stop-color="#890586"/>
            <stop offset="0.0850045" stop-color="#860988"/>
            <stop offset="0.118966" stop-color="#830E8A"/>
            <stop offset="0.161909" stop-color="#7E158E"/>
            <stop offset="0.215261" stop-color="#781E92"/>
            <stop offset="0.280449" stop-color="#702997"/>
            <stop offset="0.358898" stop-color="#66369E"/>
            <stop offset="0.452035" stop-color="#5B46A6"/>
            <stop offset="0.561288" stop-color="#4D5AAF"/>
            <stop offset="0.688082" stop-color="#3D70BA"/>
            <stop offset="0.833844" stop-color="#2A8AC7"/>
            <stop offset="1" stop-color="#15A8D5"/>
            </linearGradient>
            </defs>
            </svg>

            <svg width="42" height="31" viewBox="0 0 42 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="12" width="30" height="7" rx="3.5" fill="white"/>
            <rect width="7" height="7" rx="3.5" fill="white"/>
            <rect y="12" width="7" height="7" rx="3.5" fill="white"/>
            <rect y="24" width="7" height="7" rx="3.5" fill="white"/>
            <rect x="12" y="12" width="30" height="7" rx="3.5" fill="white"/>
            <rect x="12" y="24" width="30" height="7" rx="3.5" fill="white"/>
            </svg>

            </div>

          </div>

          <div className='catalog_objects'>

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
            </a>

          </div>

        </div>
      </section>
    </main>
  )
}
