import Image from "next/image";

export default function Beginnings(){
    return(
      <main>
        <section className='beginnings mobile_none'>
          
          <div className='left_part_beginnings '>
            <div className='section_header'>
              <h1><span>С</span> чего всё начиналось</h1>   
            </div>
            <p>Всё начиналось в августе 2020 года. Александр Копаев попробовал озвучить несколько моментов из сериала Marvel "Локи". Другие несколько людей, смотря ролик, оценивали его как хорошее начало.</p>
            <p>Далее уже озвучивались не отрывки, а целый сериал. Всё начилось с "Локи" - первого сезона. Во время работы над первым сезоном Локи, к Александру присоединился Никита Мальцев. Но мы решили, что первый сезон так и останется одноголосым. Первым совместным же проектом стал фильм "Бесконечность".</p>
          </div>
          
          <div className='right_part_beginnings '>
            <a className="beginnings_img_link" href='https://t.me/oitlovich_st'><Image className='telegram_image' src="/images/telegramm.png" width={333} height={436}></Image></a>
          </div>
        </section>

        <section className='beginnings mobile_block'>
          
          <div className='left_part_beginnings '>
            <div className='section_header'>
              <h1><span>С</span> чего всё начиналось</h1>   
            </div>
            
            <p>Всё начиналось в августе 2020 года. Александр Копаев попробовал озвучить несколько моментов из сериала Marvel "Локи". Другие несколько людей, смотря ролик, оценивали его как хорошее начало.</p>
            
            <div className='right_part_beginnings '>
              <a className="beginnings_img_link" href='https://t.me/oitlovich_st'><Image className='telegram_image' src="/images/telegramm.png" width={333} height={436}></Image></a>
            </div>
            
            <p>Далее уже озвучивались не отрывки, а целый сериал. Всё начилось с "Локи" - первого сезона. Во время работы над первым сезоном Локи, к Александру присоединился Никита Мальцев. Но мы решили, что первый сезон так и останется одноголосым. Первым совместным же проектом стал фильм "Бесконечность".</p>
          
          </div>
        
        </section>
      </main>   
)} 