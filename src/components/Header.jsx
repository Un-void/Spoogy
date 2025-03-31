import { Link } from "react-router";
import Logo from "../assets/Logo.png";
import useOnline from "../utils/useOnline";

const Header = () => {
  const isOnline = useOnline()
  return (
    <>
    <div className="shadow-lg flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 py-4 max-w-screen-2xl mx-auto">
      <Link to="/" className="cursor-pointer flex items-center gap-2">
        <img src={Logo} alt="Logo" className="w-20 sm:w-24 md:w-28 lg:w-32" />
        <div className="font-bold text-xl sm:text-2xl md:text-3xl">Spoogy</div>
        <span>{isOnline? "🟢" : "🔴"}</span>
      </Link>
      <nav className="flex flex-wrap gap-2 sm:gap-4 md:gap-6 font-semibold text-sm sm:text-base md:text-lg w-full md:w-auto justify-center md:justify-end mt-4 md:mt-0">
        <Link className="cursor-pointer hover:text-gray-600 transition" to="/">🏠 Home</Link>
        <Link className="cursor-pointer hover:text-gray-600 transition" to="/about">📜 About us</Link>
        <Link className="cursor-pointer hover:text-gray-600 transition" to="/contact">📞 Contact us</Link>
        <Link className="cursor-pointer hover:text-gray-600 transition" to="#">🛒 Cart</Link>
      </nav>
    </div>
    {isOnline ? " " : <div className="ps-12 rounded-md bg-gray-700 font-semibold text-xl text-white">You're Offline !!</div>}
  </>
  );
};

export default Header;

