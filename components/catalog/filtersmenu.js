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
                  <label data-f="fantastic" for='fantastic' className='custom_input'>
                    <input id='fantastic' type="checkbox" className='option-input checkbox'/>
                  </label>Фантастика</label>                
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label data-f="extion" for='extion' className='custom_input'>
                    <input id='extion' type="checkbox" className='option-input checkbox'/>
                  </label>Боевик</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label data-f="dram" for='dram' className='custom_input'>
                    <input id='dram' type="checkbox" className='option-input checkbox'/>
                  </label>Драма</label>  
              </div>
            </div>
            <div className='filter_point'>
              <p>Возраст</p>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label data-f="old" for='old' className='custom_input'>
                    <input id='old' type="checkbox" className='option-input checkbox'/>
                  </label>18+</label>  
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label data-f="teenager" for='teenager' className='custom_input'>
                    <input id='teenager' type="checkbox" className='option-input checkbox'/>
                  </label>12+</label>  
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label data-f="kid" for='kid' className='custom_input'>
                    <input id='kid' type="checkbox" className='option-input checkbox'/>
                  </label>6+</label>  
              </div>
            </div>
            <div className='filter_point'>
              <p>Год релиза</p>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label data-f="2000" for='2000' className='custom_input'>
                    <input id='2000' type="checkbox" className='option-input checkbox'/>
                  </label>2000-2012</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label data-f="2012" for='2012' className='custom_input'>
                    <input id='2012' type="checkbox" className='option-input checkbox'/>
                  </label>2012-2020</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label data-f="2020" for='2020' className='custom_input'>
                    <input id='2020' type="checkbox" className='option-input checkbox'/>
                  </label>2020-...</label>  
              </div>
            </div>
            
            <button data-f="all" className='button_clean' type='reset'>Сбросить</button>
          </form> 
        </div>
    )
} 