'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/autoplay';
import Image from 'next/image';

export default function SwiperActors({actors}){

    return(
        <section className="command">
            <div className='section_header'>
                <h1><span>К</span>оманда озвучки</h1>   
            </div>
             
            <Swiper className='command_slider m-auto w-[100%]'
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
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}>

                {actors.data.map(actor => (
                    <SwiperSlide key={actor.id}>
                        <div className='command_element'>
                            <Image className='command_image' alt="Изображение команды" src={process.env.NEXT_PUBLIC_STRAPI_API_URL+actor.attributes.Photo.data.attributes.url} width={300} height={300}></Image>
                            <div>
                                <p>{actor.attributes.ActorName}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            
            </Swiper>            
            
        </section>
    )
}
