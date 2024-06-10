import Image from 'next/image'
import { getFilm } from '@/services/films';
import { getFilms } from '@/services/films';
import FavoriteFilm from '@/components/catalog/favorite';
import FilmPlayer from '@/components/film/player';

export default async function page({params}) {
    const film = await getFilm(params.slug);
    const films = await getFilms();
    const name = () => ({__html: film.data[0].attributes.name})
    const desc = () => ({__html: film.data[0].attributes.description})
    if(film){
    return (
        <main className='container m-auto'>
            <section className='main_part_film'>
                
                <div className='left_part_film'>
                    <div className='film_image_slug'>
                        <Image className='' width={220} height={350} src={process.env.NEXT_PUBLIC_STRAPI_API_URL+film.data[0].attributes.cover.data.attributes.url}></Image>
                    </div>
                    <FavoriteFilm id={film.data[0].id} productsItems={films}/>
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
    
                    {film.data[0].attributes.film_view.data != null || !film.data[0].attributes.develop?(
                        <div className='container'>
                            {/* <video>{film.data[0].attributes.url}</video> */}
                            <FilmPlayer film_player={process.env.NEXT_PUBLIC_STRAPI_API_URL+film.data[0].attributes.film_view.data.attributes.url}/>
                        </div>
                    ):(
                        <p className='text-center text-[50px]'>Находится в разработке</p>
                    )}
                    
            
            </section>
            
            {/* <section className='similar'>
                
                <div className='container'>
                    
                    <div className='section_header'>
                        <h1><span>П</span>охожее</h1>
                    </div>
    
                    <div className='similar_films'>
    
                        {films.data.map(film => (
                            <a href={`/catalog/${film.attributes.slug}`}>
                                <div className='film relative'>
                                    {film.attributes.develop?(
                                        <div className='absolute top-[0px] left-[0px] bg-[#000000BB] flex justify-center items-center h-[87%] z-[1]'>
                                            <p className='text-center'>Находится в разработке</p>   
                                        </div>
                                    ):("")}
                                    <Image className='film_img' alt="Изображение фильма" width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
                                    <p className='film_name'>{film.attributes.title}</p>
                                </div>
                            </a>
                        ))}
                        
                    </div>
                </div>
            </section> */}
        </main>
      )
  }
}
