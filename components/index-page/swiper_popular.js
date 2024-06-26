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
            <h1><span>Н</span>овинки</h1>
            <a className='popular_link' href='/catalog'>Показать больше</a>   
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
                        {film.attributes.new?(
                            <a href={`/catalog/${film.attributes.slug}`}>
                                <div className='film'>
                                    <Image className='film_img' alt="Изображение фильма" width={220} height={350} src={process.env.NEXT_PUBLIC_STRAPI_API_URL+film.attributes.cover.data.attributes.url}></Image>
                                    <p className='film_name'>{film.attributes.title}</p>
                                </div>
                            </a>
                        ):("")}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
    )
}
