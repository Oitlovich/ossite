import Image from "next/image";
import { getFilms } from "@/services/films";
import { getSerials } from "@/services/serials";

export default async function Popular(){
  const films = await getFilms();
  const serials = await getSerials();
    
    return(
        <section className='popular mobile_none'>
            
            <div className='popular_header'>
                <h1><span>П</span>опулярное</h1>
                <a href='/catalog'>Показать больше</a>   
            </div>
            
            <div className='popular_main '>
            
                {films.data.map(film => (
                    
                    <a href={`/catalog/${film.attributes.slug}`}>
                        <div className='film'>
                            <Image className='film_img' width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
                            <p className='film_name'>{film.attributes.name}</p>
                        </div>
                    </a>
                    
                ))}
                {serials.data.map(serial => (
                    <a href={`/catalog/${serial.attributes.slug}`}>
                        <div className='film'>
                            <Image className='film_img' width={220} height={350} src={serial.attributes.cover.data.attributes.url}></Image>
                            <p className='film_name'>{serial.attributes.name}</p>
                        </div>
                    </a>
                ))}
            
            </div>
        </section>
)}