'use client'
import { getFilms } from "@/services/films"
import { getSerials } from "@/services/serials";
import { useState } from "react";
import Image from "next/image";

export function Searcher({dropped_catalog, DB_HOST}){
    const[values, setValue] = useState('');
    console.log(DB_HOST)
    
    return(
        <div className='header_search relative'>
            <input placeholder='Поиск'
            onChange={(event) => setValue(event.target.value)}
            value={values}/>
            <svg width="25" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 10.4259C0 16.0386 4.6683 20.5998 10.4013 20.5998C13.0426 20.5998 15.4586 19.6285 17.2963 18.0363L23.9251 24.5202C24.0479 24.6403 24.2066 24.7004 24.3704 24.7004C24.5342 24.7004 24.6929 24.6403 24.8157 24.5202C25.0614 24.2799 25.0614 23.8943 24.8157 23.654L18.1818 17.1701C19.8096 15.3727 20.8026 13.0144 20.8026 10.4259C20.8026 4.8132 16.1343 0.251953 10.4013 0.251953C4.6683 0.251953 0 4.8132 0 10.4259ZM19.5485 10.4259C19.5485 15.3576 15.4433 19.3731 10.4013 19.3731C5.35934 19.3731 1.2541 15.3576 1.2541 10.4259C1.2541 5.49413 5.35934 1.47863 10.4013 1.47863C15.4433 1.47863 19.5485 5.48912 19.5485 10.4259Z" fill="white"/>
            </svg>
            {values.length >= 2 ? (
                <div className="dropped_search bg-[#000] absolute top-[38px] border-solid border-[1px] border-[#00C7E6] w-[100%] flex flex-col p-[20px] ">
                    
                    {dropped_catalog.data.map(film => {
                        if(film.attributes.name.toLowerCase().includes(values.toLowerCase().trim())){
                            return(
                                <a href={`/catalog/${film.attributes.slug}`}>
                                    <hr className="dropped_hr my-[15px] bg-[#000] h-[2px]"/>
                                    <div className='dropped_film_card flex flex-row justify-between'>
                                        <div className="w-[50%] flex justify-center items-center">
                                            <Image className='dropped_film_img w-[70%]' width={220} height={350} src={DB_HOST+film.attributes.cover.data.attributes.url}></Image>
                                        </div>
                                        <div className="w-[50%] flex justify-center items-center">
                                            <p className='dropped_film_name text-[23px]'>{film.attributes.name}</p>
                                        </div>
                                    </div>
                                    <hr className="dropped_hr mt-[15px] bg-[#000] h-[2px]"/>
                                </a>
                            )
                        }
                    })}
                    
                </div>    
            ):("")}
        </div>
)}