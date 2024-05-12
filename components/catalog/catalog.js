"use client"
import FiltersMenu from './filtersmenu';
import FiltersBtn from './filtersbtn';
import { useSelector } from 'react-redux';
import Product from './object';

export default function Catalog({films}){
    const genresRedux = useSelector(state => state.films.genres);
    const ageRedux = useSelector(state => state.films.age);

    // Фильтрация
    let filtered = films.data.filter(film => {
        // Фильтрация по возрасту
        if (ageRedux.length) {
            const agePasses = ageRedux.some(element => film.attributes.age <= element);
            if (!agePasses) return false;
        }

        // Фильтрация по жанрам
        if (genresRedux.length) {
            const genrePasses = film.attributes.genres.data.some(genre => {
                return genresRedux.some(element =>
                    genre.attributes.slug.toLowerCase() === element.toLowerCase()
                );
            });
            if (!genrePasses) return false;
        }

        return true;
    });

    // Удаление дубликатов
    filtered = filtered.filter((film, index) => filtered.indexOf(film) === index);

    
    if(genresRedux.length || ageRedux.length) {
        return(
            <section>
                <FiltersMenu/>
                <div className='filter_apply top-[-50px] z-[2] w-[100%] h-[50px] mobile_block'>
                    Фильтры
                </div>
                <div className='absolute left-[8%] w-[40%]'>
                    <FiltersBtn/>
                </div>
                <div className='catalog_objects'>
                    
                    {filtered.map(film => (
                        <Product film = {film}/>
                    ))}
                </div>    
            </section> 
        )
    }
    else {
        return(
            <section>
                <FiltersMenu/>
                <div className='filter_apply mobile_block'>
                    Фильтры
                </div>
                <div className='absolute left-[8%] w-[40%]'>
                    <FiltersBtn/>
                </div>
                <div className='catalog_objects'>
                    
                    {films.data.map(film => (
                        <Product film = {film}/>
                    ))}
                </div>    
            </section> 
        )
    }
}