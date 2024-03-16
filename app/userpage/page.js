import Image from "next/image"
import { getFilms } from "@/services/films"
import { getSerials } from "@/services/serials"

export default async function page() {
  const film = await getFilms();

    return (
      <main className="userpage">
        <section className="userpage_img">
          <Image className="aspect-video w-[100%] h-[100vh] object-cover" src="/images/guitar_back.png" width={1872} height={700}></Image>
          <div className="change_back z-5 z-5 absolute ">
            <p>Изменить фон</p>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10.4259C0 16.0386 4.6683 20.5998 10.4013 20.5998C13.0426 20.5998 15.4586 19.6285 17.2963 18.0363L23.9251 24.5202C24.0479 24.6403 24.2066 24.7004 24.3704 24.7004C24.5342 24.7004 24.6929 24.6403 24.8157 24.5202C25.0614 24.2799 25.0614 23.8943 24.8157 23.654L18.1818 17.1701C19.8096 15.3727 20.8026 13.0144 20.8026 10.4259C20.8026 4.8132 16.1343 0.251953 10.4013 0.251953C4.6683 0.251953 0 4.8132 0 10.4259ZM19.5485 10.4259C19.5485 15.3576 15.4433 19.3731 10.4013 19.3731C5.35934 19.3731 1.2541 15.3576 1.2541 10.4259C1.2541 5.49413 5.35934 1.47863 10.4013 1.47863C15.4433 1.47863 19.5485 5.48912 19.5485 10.4259Z" fill="white"/>
            </svg>
          </div>
        </section>
        <div className="user_char">
          <Image className="avatar_circle" alt="Аватар пользователя" src="/images/userpage_avatar.png" width={255} height={255}></Image>
          <div className="user_char_text"> 
            <h1>Имя пользователя</h1>
            <p>Почта_пользователя@mail.ru</p>
          </div>
        </div>
        <section className="userpage_favorite container m-auto">
         
          <div className="favorite_main_block">
            
            <div className='section_header'>
              <h1><span>И</span>збранное</h1>   
            </div>
         
            <div className="favorite_films">
                
            </div>
          </div>
                
        </section>

      </main>
    )
  }