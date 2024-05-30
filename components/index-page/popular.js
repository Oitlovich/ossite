import Image from "next/image";
import { getFilms } from "@/services/films";
import { getSerials } from "@/services/serials";

export default async function Popular(){
  const films = await getFilms();
  const serials = await getSerials();
        return(
        <section className='popular mobile_none'>
            
            <div className='popular_header'>
                <h1><span>Н</span>овинки</h1>
                <a href='/catalog'>Показать больше</a>   
            </div>
            
            <div className='popular_main '>
            
                {films.data.map(film => {
                if(film.attributes.new)
                    {
                        return(
                            <a href={`/catalog/${film.attributes.slug}`}>
                                <div className='film'>
                                    <Image className='film_img' alt="Изображение фильма" width={220} height={350} src={process.env.NEXT_PUBLIC_STRAPI_API_URL+film.attributes.cover.data.attributes.url}></Image>
                                    <p className='film_name'>{film.attributes.title}</p>
                                </div>
                            </a>
                        )
                    }
                })}
            
            </div>
        </section>
)}