'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';

export default async function SwiperPopular({films}){
    return(
        <section className='popular mobile_block'>
            
        <div className='popular_header'>
            <h1><span>П</span>опулярное</h1>
            <a href='/catalog'>Показать больше</a>   
        </div>
        
        <div className='popular_main'>
            <Swiper 
            breakpoints={{
                576: {
                  slidesPerView: 2,
                },
                769: {
                  slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                  },
              }}
            spaceBetween={50} 
            slidesPerView={1}
            modules ={[Autoplay]}
            Autoplay>

                {films.data.map(film => (
                    <SwiperSlide>
                        <a href={`/catalog/${film.attributes.slug}`}>
                            <div className='film'>
                                <Image className='film_img' width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
                                <p className='film_name'>{film.attributes.title}</p>
                            </div>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
    )
}
