'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { useSelector } from 'react-redux';

export default function SwiperFavorite({films}){
    const favorites = useSelector(state => state.favorites.items)
    if(favorites){
        return(
            <main>
                {favorites.favorite.length <= 0 ? (
                    <section className='flex justify-center items-center text-[30px]'>
                        <p>Пока вы ничего не добавляли в избранное</p>
                    </section>
                ) : (
                    <div>
                        <section className='favorite_films pb-[0] h-[unset] mobile_none'>
                            <div className='popular_main w-[100%] py-[30px] h-[100%] gap-[0]'>
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
                                Autoplay
                                className='w-[100%]'>
                                    {favorites.favorite.map(film => {
                                        return(
                                            films.data.map(filmse => {
                                                if(filmse.id === film.id){
                                                    return(
                                                    <SwiperSlide>
                                                        <a href={`/catalog/${film.slug}`}>
                                                            <div className='film'>
                                                                <Image className='film_img' alt="Изображение фильма" width={220} height={350} src={process.env.NEXT_PUBLIC_STRAPI_API_URL+filmse.attributes.cover.data.attributes.url}></Image>
                                                                <p className='film_name'>{film.title}</p>
                                                            </div>
                                                        </a>
                                                    </SwiperSlide>
                                                )}
                                            })
                                        )
                                    })}
                                </Swiper>
                            </div>
                        </section>
                        <section className='favorite_films mobile_block'>
                        
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
                                                    <Image className='film_img' alt="Изображение фильма" width={220} height={350} src={process.env.NEXT_PUBLIC_STRAPI_API_URL+film.attributes.cover.data.attributes.url}></Image>
                                                    <p className='film_name'>{film.attributes.title}</p>
                                                </div>
                                            </a>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </section>
                    </div>
                )}
            </main>
        )
    }   
}
