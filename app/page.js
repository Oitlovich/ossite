import Image from 'next/image'
import { getActors } from '@/services/actors';
import { getFilms } from '@/services/films';
import SwiperActors from '@/components/index-page/swiper_command';
import Banner from '@/components/index-page/banner';
import Popular from '@/components/index-page/popular';
import Beginnings from '@/components/index-page/beginnings';
// import SwiperPopular from '@/components/index-page/swiper_popular';

export default async function page() {
  const films = await getFilms();
  const actors = await getActors();

  return (
    <main className='container m-auto'>        
    
      <Banner/>
    
      <SwiperActors actors={actors} DB_HOST={process.env.DB_HOST}/>
      
      <Popular/>

      {/* <SwiperPopular films={films} DB_HOST={process.env.DB_HOST}/> */}

      <Beginnings/>
    
    </main>
  )
}
