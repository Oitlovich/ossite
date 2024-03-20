// 'use client'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import { getFilms } from '@/services/films';
// import { getSerials } from '@/services/serials';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import Image from 'next/image';

// export default async function SwiperPopular({films}){
//     const films = await getFilms();
//     const serials = await getSerials();
//     return(
//         <section className='popular mobile_block'>
            
//         <div className='popular_header'>
//             <h1><span>П</span>опулярное</h1>
//             <a href='/catalog'>Показать больше</a>   
//         </div>
        
//         <div className='popular_main'>
//             <Swiper 
//             spaceBetween={50} 
//             slidesPerView={4}
//             modules ={[Autoplay]}
//             Autoplay>

//                 {films.data.map(film => (
//                     <SwiperSlide>
//                         <a href={`/catalog/${film.attributes.slug}`}>
//                             <div className='film'>
//                                 <Image className='film_img' width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
//                                 <p className='film_name'>{film.attributes.name}</p>
//                             </div>
//                         </a>
//                     </SwiperSlide>
//                 ))}
//             {/* {serials.data.map(serial => (
//                 <a href={`/catalog/${serial.attributes.slug}`}>
//                     <div className='film'>
//                         <Image className='film_img' width={220} height={350} src={serial.attributes.cover.data.attributes.url}></Image>
//                         <p className='film_name'>{serial.attributes.name}</p>
//                     </div>
//                 </a>
//             ))} */}
//             </Swiper>
//         </div>
//     </section>
//     )
// }
