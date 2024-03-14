'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import Image from 'next/image';

export default function SwiperActors({actors, DB_HOST}){
    // console.log(process.env.DB_HOST)

    return(
        <section className="command">
            <div className='section_header'>
                <h1><span>К</span>оманда озвучки</h1>   
            </div>
             
            <Swiper className='command_slider m-auto w-[100%]'
            spaceBetween={50} 
            slidesPerView={4}
            modules ={[Autoplay]}
            Autoplay>

                {actors.data.map(actor => (
                    <SwiperSlide key={actor.id}>
                        <div className='command_element'>
                            <Image className='command_image' src={DB_HOST+actor.attributes.Photo.data.attributes.url} width={300} height={300}></Image>
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
