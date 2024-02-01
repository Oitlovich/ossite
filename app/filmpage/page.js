import Image from 'next/image'
// import HeaderCat from '../components/headercatalog'
import Footer from '../components/footer'
export default function page() {
  return (
    <main>
      <section className='main_part_film'>
        <div className='container'>
            <div className='left_part_film'>
                <div className='film_image'>
                    <img src="/images/Oderzhimost.png"></img>
                </div>
                <button className='film_favorite'>В избранное</button>
            </div>
            <div className='right_part_film'>
                <div className='text_block1'>
                    <h1><span>О</span>держимость (2013)</h1>
                    <p>Юный барабанщик на тернистом пути к величию. Остросюжетная драма Дэмьена Шазелла, отмеченная тремя «Оскарами»</p>
                </div>
                <div className='text_block2'>
                    <h2><span>О</span>звучено по версии Oitlovich Studio</h2>
                    <p>Роли озвучивали:<br/>Никита Мальцев (<a>@nikitamalcev3</a>),<br/>Александр Копаев (<a>@Oitlovich</a>).</p>
                </div>
                <div className='text_block2'>
                    <h2><span>О</span> фильме:</h2>
                    <p>Год производства: 2013 <br/>Страна: США <br/>Жанр: Драма, музыка</p>
                </div>
            </div>
        </div>
      </section>
      <section className='film_look'>
            <div className='container'>
                <video src='https://disk.yandex.ru/i/xO65MwQzZ9KBAA'></video>
            </div>
      </section>
      <section className='similar'>
        <div className='container'>
            
            <div className='section_header'>
                <h1><span>П</span>охожее</h1>
                <a href='/catalog'></a>
            </div>

            <div className='similar_films'>
                <a href='/filmpage'> 
                    <div className='popular_element container'>
                        <Image src="/images/Oderzhimost.png" width={200} height={342}></Image>
                        <div className='popular_element_text'>
                            <p className='name'>Одержимость</p>
                            <p className='year'>2013</p>
                        </div>
                    </div>
                </a>
                
                <a href='/filmpage'>
                    <div className='popular_element container'>
                        <Image src="/images/Uchitelnazamenu.png" width={200} height={342}></Image>
                        <div className='popular_element_text'>
                            <p className='name'>Учитель на замену</p>
                            <p className='year'>2011</p>
                        </div>
                    </div>
                </a>

                <a href='/filmpage'>
                    <div className='popular_element container'>
                        <Image src="/images/Joker.png" width={200} height={342}></Image>
                        <div className='popular_element_text'>
                            <p className='name'>Джокер</p>
                            <p className='year'>2021</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
      </section>
    </main>
  )
}
