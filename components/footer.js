import Image from 'next/image'

export default function Footer() {
  return (
    <footer className=''>
    
      <div className='mobile_none container m-auto'>
    
        <div className='footer_column'>
          <a href='/'><Image src="/icons/NewOSLogo.png" width={133} height={64}></Image></a>
          <a href='/'>Главная</a>
          <a href='/catalog'>Каталог</a>
        </div>
    
        <div className='footer_column'>
          <a href='/registration'>Регистрация</a>
          <a href='/autorisation'>Авторизация</a>
        </div>
    
        <div className='footer_column'>
          <a href='#'>Политика конфиденциальности</a>
          <a href='https://t.me/oitlovich'>Обратная связь</a>
          <a href='#'>© 2024 Все права защищены</a>
        </div>
    
      </div>

      <div className='mobile_block flex flex-col gap-[50px] container m-auto'>
    
        <div className='footer_row flex flex-row justify-center'>
          <a href='/'>
            <div className='footer_logo'>
              <div><span className='logo_span_text text-[50px]'>O</span>itlovich</div>
              <div className='flex flex-row items-center gap-[5px]'>
                <div className='h-[2px] bg-[#fff] w-[100%]'></div>
                <span className='logo_span_text text-[27px]'>Studio</span>
              </div>
            </div>
            {/* <Image src="/icons/NewOSLogo.png" width={183} height={64}></Image> */}
          </a>
        </div>
    
        <div className='footer_row flex flex-row justify-between'>

          <div className='footer_row_column gap-[5px] flex flex-col'>
            <a className='p-[0]' href='/'>Главная</a>
            <a href='/catalog'>Каталог</a>
            <a href='/registration'>Регистрация</a>
            <a href='/autorisation'>Авторизация</a>
          </div>

          <div className='footer_row_column flex gap-[15px] flex-col text-right'>
            <a href='#'>Политика конфиденциальности</a>
            <a href='https://t.me/oitlovich'>Обратная связь</a>
          </div>
        </div>
    
        <div className='footer_row flex justify-center'>
          <a href='#'>© 2024 Все права защищены</a>
        </div>
    
      </div>
    
    </footer>
  )
}
