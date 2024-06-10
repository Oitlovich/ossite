import Image from 'next/image'

export default function Footer() {
  return (
    <footer className=''>
    
      <div className='mobile_none container m-auto'>
    
        <div className='footer_column'>
          <a href='/'><Image src="/icons/NewOSLogo.png" alt="Изображение логотипа" width={133} height={64}></Image></a>
          <a href='/'>Главная</a>
          <a href='/catalog'>Каталог</a>
        </div>
    
        <div className='footer_column'>
          <a href='/userpage/registration'>Регистрация</a>
          <a href='/userpage/autorisation'>Авторизация</a>
        </div>
    
        <div className='footer_column'>
          <a href='https://xn--80aapampemcchfmo7a3c9ehj.xn--p1ai/assets/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf'>Политика конфиденциальности</a>
          <a href='https://t.me/oitlovich'>Обратная связь</a>
          <p>© 2024 Все права защищены</p>
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
            <a className='text-[20px] p-[0]' href='/'>Главная</a>
            <a className='text-[20px]' href='/catalog'>Каталог</a>
            <a className='text-[20px]' href='/userpage/registration'>Регистрация</a>
            <a className='text-[20px]' href='/userpage/autorisation'>Авторизация</a>
          </div>

          <div className='footer_row_column flex gap-[15px] flex-col text-right'>
            <a className='text-[20px]' href='https://xn--80aapampemcchfmo7a3c9ehj.xn--p1ai/assets/%D0%9F%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0%20%D0%BA%D0%BE%D0%BD%D1%84%D0%B8%D0%B4%D0%B5%D0%BD%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8.pdf'>Политика конфиденциальности</a>
            <a className='text-[20px]' href='https://t.me/oitlovich'>Обратная связь</a>
          </div>
        </div>
    
        <div className='footer_row flex justify-center'>
          <p>© 2024 Все права защищены</p>
        </div>
    
      </div>
    
    </footer>
  )
}
