import { Link } from "react-router";
import Logo from "../assets/Logo.png"

const Header = () =>{
    return(
        <>
            <div className="shadow-lg flex items-center justify-between">
                <Link to="/" className="cursor-pointer flex items-center gap-0">
                    <img src={Logo} alt="Logo" className="w-32"/>
                    <div className="font-bold text-3xl">Spoogy</div>
                </Link>
                <div className="flex gap-6 font-semibold text-lg px-16">
                    <Link className="cursor-pointer" to="/">🏠Home</Link>
                    <Link className="cursor-pointer" to="/about">📜About us</Link>
                    <Link className="cursor-pointer" to="/contact">📞Contact us</Link>
                    <Link className="cursor-pointer" to="#">🛒Cart</Link>
                </div>
            </div>
        </>
    );
}

export default Header