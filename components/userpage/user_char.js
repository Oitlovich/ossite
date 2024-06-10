'use client'
import Image from 'next/image'
import SwiperFavorite from './swiper_favorite'
import { useSelector } from 'react-redux'
import QuitButton from '@/services/user/quitbutton'

export default function UserChar({films}){
    const user = useSelector(state => state.user.userData)
    if(user){
        return(
            <div className="container m-auto">
              <div className="user_char my-[100px]">
                <div className="avatar_circle1">
                  <svg className="avatar_camera hidden" id="Layer_1" enable-background="new 0 0 512 512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m512 445.605c0 13.39-10.889 24.276-24.279 24.276h-463.448c-13.39 0-24.273-10.887-24.273-24.276v-307.498c0-13.389 10.883-24.277 24.273-24.277h117.683c3.657 0 6.935-2.256 8.243-5.671l25.28-66.041h161.044l25.274 66.042c1.307 3.416 4.585 5.67 8.242 5.67h117.683c13.389 0 24.279 10.886 24.279 24.277v307.498zm-256-309.262c-76.911 0-139.475 62.565-139.475 139.475 0 76.911 62.564 139.476 139.475 139.476s139.475-62.565 139.475-139.476c-.001-76.91-62.564-139.475-139.475-139.475zm0 243.64c57.43 0 104.163-46.73 104.163-104.166 0-57.434-46.733-104.165-104.163-104.165-57.436 0-104.169 46.73-104.169 104.165 0 57.436 46.733 104.166 104.169 104.166z" fill-rule="evenodd" fill="#fff"></path></svg>
                  {/* <Image alt="Аватар пользователя" src="/images/userpage_avatar.png" width={165} height={135}></Image> */}
                  <Image alt="Аватар пользователя" className='rounded-[50%]' src="/images/ava.png" width={175} height={175}></Image>
                </div>
                <div className="user_char_text"> 
                  <h1 className="text-[40px]">{user.username}</h1>
                  <label for="user_email" className="flex flex-row gap-[20px] items-center">
                    <p id="user_email" className="text-[20px] w-[100%] bg-[#000]">{user.email}</p>
                    {/* <svg fill="#808080" width="25px" height="25px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.281 9.25l-2.125 2.156c0.563 0.875 0.969 1.875 1.156 2.938h3.094v3.313h-3.094c-0.188 1.063-0.594 2.031-1.156 2.906l2.125 2.188-2.344 2.344-2.156-2.156c-0.875 0.563-1.844 1-2.906 1.188v3.063h-3.344v-3.063c-1.063-0.188-2.031-0.625-2.906-1.188l-2.188 2.156-2.313-2.344 2.125-2.188c-0.563-0.875-1-1.844-1.188-2.906h-3.063v-3.313h3.063c0.188-1.063 0.625-2.063 1.188-2.938l-2.125-2.156 2.313-2.344 2.188 2.156c0.875-0.563 1.844-1 2.906-1.188v-3.094h3.344v3.094c1.063 0.188 2.031 0.625 2.906 1.188l2.156-2.156zM11.188 20.625c2.563 0 4.656-2.063 4.656-4.625s-2.094-4.656-4.656-4.656-4.594 2.094-4.594 4.656 2.031 4.625 4.594 4.625z"></path>
                    </svg>               */}
                    <QuitButton/>
                    </label>
                </div>
              </div>
              <section className="userpage_favorite container m-auto">
              
                <div className="favorite_main_block">
                  
                  <div className='section_header'>
                    <h1><span>И</span>збранное</h1>   
                  </div>
              
                  <SwiperFavorite films={films}/>
                </div>
                      
              </section>
            </div>
        )
    }
}