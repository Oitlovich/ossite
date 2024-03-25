import Image from 'next/image'
import { getFilm } from '@/services/films';
import { getFilms } from '@/services/films';


export default async function page({params}) {
    const film = await getFilm(params.slug);
    const films = await getFilms();
    const name = () => ({__html: film.data[0].attributes.name})
    const desc = () => ({__html: film.data[0].attributes.description})
  return (
    <main className='container m-auto'>
        <section className='main_part_film'>
            
            <div className='left_part_film'>
                <div className='film_image_slug'>
                    <Image className='' width={220} height={350} src={film.data[0].attributes.cover.data.attributes.url}></Image>
                </div>
                <button className='film_favorite'>В избранное</button>
            </div>
        
            <div className='right_part_film'>
                <div className='text_block1'>
                    <h1 dangerouslySetInnerHTML={name()}></h1>
                </div>
                <div className='text_block2'>
                    <p dangerouslySetInnerHTML={desc()}></p>
                </div>
            </div>
        </section>
        
        <section className='film_look'>
                
                <div className='container'>
                    <video>{film.data[0].attributes.video}</video>
                </div>
        
        </section>
        
        <section className='similar'>
            
            <div className='container'>
                
                <div className='section_header'>
                    <h1><span>П</span>охожее</h1>
                </div>

                <div className='similar_films'>

                    {films.data.map(film => (
                        <a href={`/catalog/${film.attributes.slug}`}>
                            <div className='film'>
                                <Image className='film_img' width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
                                <p className='film_name'>{film.attributes.name}</p>
                            </div>
                        </a>
                    ))}
                    
                </div>
            </div>
        </section>
    </main>
  )
}
