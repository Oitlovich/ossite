import Image from "next/image";

export default function Banner(){
    return(
      <main>
        <section className='main_page mobile_none'>
            
            <div className='left_part '>
              <Image className='main_logo' src="/icons/logo_main.png" alt="Изображение логотипа" width={523} height={222}></Image>
              <div className='main_text'>
                <p>"Oitlovich Studio" – это молодая и энергичная студия озвучки, которая только начинает своё дело, но уже
                  обладает ярким потенциалом и амбициозными планами. Основной фокус работы студии - качественное 
                  озвучивание аудиоматериалов различных жанров: аудиокниг, рекламных роликов, фильмов, 
                  мультфильмов, сериалов и так далее...</p>
              </div>
              <div className='left_part_buttons'>
                <a className='button1' href='/userpage/registration'>Регистрация</a>
                <a className='button2' href='/catalog'>Каталог</a>
              </div>
            </div>
          
            <div className='right_part '>
              <Image className='right_part_img right_part_img1' alt="Изображение фона" src="/images/main_back.png" width={729} height={803}></Image>
              <Image className='right_part_img right_part_img2' alt="Изображение фона" src="/images/main_microphone.png" width={661} height={661}></Image>
            </div>
          
        </section>
        <section className='main_page mobile_block'>
            
            <div className='left_part'>

              <div className='main_text'>
                <p>"Oitlovich Studio" – это молодая и энергичная студия озвучки, которая только начинает своё дело, но уже
                  обладает ярким потенциалом и амбициозными планами.</p>
              </div>
              
              <div className="logo_mobile">
                <div className="mr-[70px]"><span className="logo_span_text">O</span>itlovich</div>
                <div className="header_line h-[2px] bg-[#fff] w-[100%]"></div>
                <div className="logo_span_text ml-[110px]"><span className="logo_studio_text">Studio</span></div>
              </div>

              <div className='left_part_buttons'>
                <a className='button1' href='/userpage/registration'>Регистрация</a>
                <a className='button2' href='/catalog'>Каталог</a>
              </div>
            </div>
          
            <div className='right_part'>
              <Image className='right_part_img right_part_img1' src="/images/main_back.png" alt="Изображение фона" width={729} height={803}></Image>
            </div>
          
        </section>
    </main>
)}