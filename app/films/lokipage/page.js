import Image from 'next/image'
// import HeaderCat from '../components/headercatalog'
export default function page() {
  return (
    <section className='lokipage'>
        <div className='header_filmpage'>
          <div></div>
        </div>
        <div className='mainpart_filmpage'>
        <div className='left_side_filmpage'>
          <div className='ls_fp_image'></div>
          <button>Добавить в избранное</button>
        </div>
        <div className='right_side_filmpage'>
          <div className='rs_text'>
            <h1>Loki</h1>
            <p>Какое то описание, описание, описание</p>
          </div>
          <div className='rs_middle'>
            <div className='rsm_up'>
              <p className='rsmu_text'></p>
              <div className='rsmu_stick'></div>
              <p className='rsmu_text'></p>
              <div className='rsmu_stick'></div>
              <p className='rsmu_text'></p>
            </div>
            <div className='filmpage_info'>
              <div className='rsm_info'></div>
              <div className='rsm_info'></div>
            </div>
          </div>
          <div className='filmpage_desc'>
            <h1>Описание</h1>
            <p>Какое то описание, описание, описание</p>
          </div>
          </div>
        </div>
        <div className='viewing'></div>
    </section>
  )
}
