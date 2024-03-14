import Image from 'next/image'
// import HeaderCat from '../components/headercatalog'
import Footer from '../../components/footer'
import { getFilms } from '@/services/films';
import { getSerials } from '@/services/serials';

export default async function page() {
  const films = await getFilms();
  console.log(films);
  const serials = await getSerials();

  return (
    <main className='container m-auto'>
      <section className='main_part_film'>
        
            <div className='left_part_film'>
                {films.data.map(film => (
                    <div className='film_image'>
                        <Image className='film_img' width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
                    </div>
                 ))}
                 {serials.data.map(serial => (
                    <div className='film_image'>
                        <Image className='film_img' width={220} height={350} src={serial.attributes.cover.data.attributes.url}></Image>
                    </div>
                 ))}
                {/* <div className='film_image'>
                    <img src="/images/Oderzhimost.png"></img>
                </div> */}
                <button className='film_favorite'>В избранное</button>
            </div>
           
            <div className='right_part_film'>
                {films.data.map(film => (
                    <div className='text_block1'>
                        <h1>{film.attributes.name}</h1>
                    </div>
                 ))}
                
                {films.data.map(film => (
                    <div className='text_block2'>
                        <p>{film.attributes.description}</p>
                    </div>
                 ))}
                 {serials.data.map(serial => (
                    <div className='text_block1'>
                        <h1>{serial.attributes.name}</h1>
                    </div>
                 ))}
                
                {serials.data.map(serial => (
                    <div className='text_block2'>
                        <p>{serial.attributes.description}</p>
                    </div>
                 ))}
                {/* <div className='text_block1'>
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
                </div> */}
            </div>
      </section>
      <section className='film_look'>
            <div className=''>

            </div>
      </section>
      <section className='similar'>
        <div className='container'>
            
            <div className='section_header'>
                <h1><span>П</span>охожее</h1>
                <a href='/catalog'></a>
            </div>

            <div className='similar_films'>
                {films.data.map(film => (
                    <a href='/filmpage'>
                        <div className='popular_element'>
                            <Image className='film_img' width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
                            <div className='popular_element_text'>
                                <p>{film.attributes.name}</p>
                            </div>
                        </div>
                    </a>
                ))}
                {/* <a href='/filmpage'> 
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
                </a> */}
            </div>
        </div>
      </section>
    </main>
  )
}
