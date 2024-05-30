import Image from 'next/image'
import { getFilms } from '@/services/films';
import { getSerials } from '@/services/serials';
import FiltersBtn from '@/components/catalog/filtersbtn';
import FiltersMenu from '@/components/catalog/filtersmenu';
import Filter from '@/components/catalog/filter';
import Catalog from '@/components/catalog/catalog';

export default async function page() {
  const films = await getFilms();
  const serials = await getSerials();

  return (
    <main className='container m-auto'>
      <section className='catalog'>
        
        <div className='catalog_left'>
          
          <Filter/>      
        
        </div>
   
        <div className='catalog_right'>

          <Catalog films = {films}/>

        </div>
      </section>
    </main>
  )
}
