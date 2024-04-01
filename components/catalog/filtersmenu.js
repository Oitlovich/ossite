import FiltersBtn from "./filtersbtn"
import Image from "next/image"

export default function FiltersMenu(){
    return(
        <div className="filter_menu fixed p-[40px] left-[0px] top-[-100vh] h-[100vh] w-screen bg-[#000] z-[99999] rounded-[10px]">
            <div className="flex flex-row justify-between h-[10%]">
                <a className='logo_link' href='/'><Image src="/icons/NewOSLogo.png" alt="Изображение логотипа" width={133} height={60}></Image></a>
                <FiltersBtn/>
            </div>
            <form className='catalog_filter_mobile'>
          
            <div className='filter_point'>
              <p>Жанр</p>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>Фантастика</label>                
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>Боевик</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>Драма</label>  
              </div>
            </div>
            <div className='filter_point'>
              <p>Возраст</p>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>18+</label>  
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>12+</label>  
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>6+</label>  
              </div>
            </div>
            <div className='filter_point'>
              <p>Год релиза</p>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>2000-2012</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>2012-2020</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label for='genor' className='custom_input'>
                    <input id='genor' type="checkbox" className='option-input checkbox'/>
                  </label>2020-...</label>  
              </div>
            </div>
            
            <button className='button_clean' type='reset'>Сбросить</button>
          </form> 
        </div>
    )
} 