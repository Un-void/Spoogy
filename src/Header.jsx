import Logo from "./assets/Logo.png"

const Header = () =>{
    return(
        <>
            <div className="shadow-lg flex items-center justify-between">
                <a src="#" className="cursor-pointer flex items-center gap-0">
                    <img src={Logo} alt="Logo" className="w-32"/>
                    <div className="font-bold text-3xl">Spoogy</div>
                </a>
                <div className="flex gap-6 font-semibold text-lg px-16">
                    <a className="cursor-pointer" href="#">🏠Home</a>
                    <a className="cursor-pointer" href="#">📜About us</a>
                    <a className="cursor-pointer" href="#">📞Contact us</a>
                    <a className="cursor-pointer" href="#">🛒Cart</a>
                </div>
            </div>
        </>
    );
}

export default Header