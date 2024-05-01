import Image from "next/image"
import { getFilms } from "@/services/films"
import SwiperFavorite from "@/components/userpage/swiper_favorite";
import GetUserInfo from "../features/getUserInfo";
import CheckAuthUser from "../features/userInfo";
import UserChar from "@/components/userpage/user_char";

export default async function page() {
  const films = await getFilms();

    return (
      <main className="userpage">
       
        <CheckAuthUser />
       
        <GetUserInfo />

        <section className="userpage_img">
          <div className="logo_mobile pt-[160px] items-center justify-center flex flex-col">
            <div className="mr-[70px] text-[84px]"><span className="logo_span_text text-[124px]">O</span>itlovich</div>
            <div className="header_line h-[2px] bg-[#fff] w-[50%]"></div>
            <div className="logo_span_text ml-[230px]"><span className="logo_studio_text text-[74px]">Studio</span></div>
          </div>
        </section>
        
        <UserChar films={films}/>

      </main>
    )
  }