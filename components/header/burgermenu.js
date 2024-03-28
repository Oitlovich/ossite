import BurgerBtn from "./burgerbtn"

export default async function BurgerMenu(){
    return(
        <div className="burger_menu absolute p-[20px] left-[0px] top-[-100vh] h-[85vh] w-screen bg-[#1a1a1a] rounded-[10px]">
            <div className="items-center justify-between flex flex-col h-[100%]">
                <a className='logo_link' href='/'><Image src="/icons/NewOSLogo.png" width={133} height={60}></Image></a>
                <BurgerBtn/>
            </div>   
        </div>
    )
} 