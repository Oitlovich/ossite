"use client"
import { useState } from "react";
import FiltersBtn from '@/components/catalog/filtersbtn';
import FiltersMenu from '@/components/catalog/filtersmenu';
import { useDispatch } from "react-redux";
import { changeAge, changeDate, changeGenre } from "@/store/films/films.slice";
export default function Filter(){
  const dispatch = useDispatch()
    
    return(
        <form className='catalog_filter'>
          
          <div className='filter_point'>
              <p>Жанр</p>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label data-f="fantastic" for='fantastic' className='custom_input'>
                    <input id='fantastic' onChange={(e) => dispatch(changeGenre({slug: 'fantastika', checked: e.target.checked}))} type="checkbox" className='option-input checkbox'/>
                  </label>Фантастика</label>                
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label data-f="extion" for='extion' className='custom_input'>
                    <input id='extion' onChange={(e) => dispatch(changeGenre({slug: 'action', checked: e.target.checked}))} type="checkbox" className='option-input checkbox'/>
                  </label>Боевик</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label data-f="dram" for='dram' className='custom_input'>
                    <input id='dram' onChange={(e) => dispatch(changeGenre({slug: 'dram', checked: e.target.checked}))} type="checkbox" className='option-input checkbox'/>
                  </label>Драма</label>  
              </div>
            </div>

            {/* Возраст */}
            <div className='filter_point'>
              <p>Возраст</p>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label data-f="old" for='old' className='custom_input'>
                    <input id='old' onChange={(e) => dispatch(changeAge({age: 18, checked: e.target.checked}))} type="checkbox" className='option-input checkbox'/>
                  </label>18+</label>  
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label data-f="teenager" for='teenager' className='custom_input'>
                    <input id='teenager' onChange={(e) => dispatch(changeAge({age: 12, checked: e.target.checked}))} type="checkbox" className='option-input checkbox'/>
                  </label>12+</label>  
              </div>
              <div className='markers'>
              <label className='input_label_custom'>
                  <label data-f="kid" for='kid' className='custom_input'>
                    <input id='kid' onChange={(e) => dispatch(changeAge({age: 6, checked: e.target.checked}))} type="checkbox" className='option-input checkbox'/>
                  </label>6+</label>  
              </div>
            </div>

            {/* Год релиза */}
            {/* <div className='filter_point'>
              <p>Год релиза</p>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label data-f="2000" for='2000' className='custom_input'>
                    <input id='2000' onChange={() => dispatch(changeDate('2000'))} type="checkbox" className='option-input checkbox'/>
                  </label>2000-2012</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label data-f="2012" for='2012' className='custom_input'>
                    <input id='2012' onChange={() => dispatch(changeDate('2012'))} type="checkbox" className='option-input checkbox'/>
                  </label>2012-2020</label>  
              </div>
              <div className='markers'>
                <label className='input_label_custom'>
                  <label data-f="2020" for='2020' className='custom_input'>
                    <input id='2020' onChange={() => dispatch(changeDate('2020'))} type="checkbox" className='option-input checkbox'/>
                  </label>2020-...</label>  
              </div>
            </div> */}
            
            <button className='button_clean' type='reset'>Сбросить</button>
          </form>
    )
}