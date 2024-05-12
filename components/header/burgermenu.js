import BurgerBtn from "./burgerbtn"
import Image from "next/image"
import AuthButton from "./authbutton"

export default function BurgerMenu(){
    return(
        <div className="burger_menu fixed p-[40px] left-[0px] top-[-100vh] h-[100vh] w-screen bg-[#000] z-[10] rounded-[10px]">
            <div className="flex flex-row justify-between h-[10%]">
                <a className='logo_link' href='/'><Image src="/icons/NewOSLogo.png" alt="Изображение логотипа" width={133} height={60}></Image></a>
                <BurgerBtn/>
            </div>
            <div className="flex flex-col h-[60%] gap-[40px] justify-center items-center">
                <a className="text-[30px]" href="/">Главная</a>
                <a className="text-[30px]" href="/catalog">Каталог</a>
                <a className="hidden text-center text-[30px]" href="/">Личный кабинет</a>
                <AuthButton/>
            </div>
        </div>
    )
} 