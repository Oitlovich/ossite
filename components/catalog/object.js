import Image from 'next/image';
export default function Product({film}){
    return(
        <a href={`/catalog/${film.attributes.slug}`}>
            <div className='film relative flex justify-center items-center'>
                {film.attributes.develop?(
                <div className='absolute top-[0px] left-[0px] bg-[#000000BB] flex justify-center items-center h-[87%] z-[1]'>
                    <p className='text-center'>Находится в разработке</p>   
                </div>
                ):("")}
                <Image className='film_img' alt="Изображение фильма" width={220} height={350} src={film.attributes.cover.data.attributes.url}></Image>
                <p className='film_name'>{film.attributes.title}</p>
            </div>
        </a>
)}