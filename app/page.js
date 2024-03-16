import Image from 'next/image'
import { getActors } from '@/services/actors';
import { getFilms } from '@/services/films';
import SwiperActors from '@/components/swiper_command';
import Banner from '@/components/banner';
import Popular from '@/components/popular';
import Beginnings from '@/components/beginnings';
// import SwiperPopular from '@/components/swiper_popular';

export default async function page() {
  const films = await getFilms();
  const actors = await getActors();

  return (
    <main className='container m-auto'>        
    
      <Banner/>
    
      <SwiperActors actors={actors} DB_HOST={process.env.DB_HOST}/>
      
      <Popular/>

      {/* <SwiperPopular films={films}/> */}

      <Beginnings/>
    
    </main>
  )
}
