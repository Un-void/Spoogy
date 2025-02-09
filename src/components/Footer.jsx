
import React from "react";
import Logo from "../assets/Logo.png"

function Footer(){
    return (
        <>
            <div className="md:flex shadow py-10 mt-10">
                <div className="flex items-center px-10">
                    <img src={Logo} alt="logo" className="w-28"/>
                    <span className="font-bold md:text-3xl text-2xl">Spoogy</span>
                </div>
                <div className="md:flex gap-20 align-middle text-gray-700 leading-8 sm:px-2 flex flex-wrap">
                    <div>
                        <ul>
                            <li className="font-semibold text-black">Company</li>
                            <li>About us</li>
                            <li>Spoogy Corporate</li>
                            <li>Careers</li>
                            <li>Team</li>
                            <li>Spoogy Instagramart</li>
                            <li>Spoogy Dineout</li>
                            <li>Spoogy Genie</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="font-semibold text-black">Contact Us</li>
                            <li>Help & Support</li>
                            <li>Partner with us</li>
                            <li>Ride with us</li>
                            <li>
                                <ul className="font-semibold text-black pt-20">Legal</ul>
                                    <li>Terms & Conditions</li>
                                    <li>Cookie Policy</li>
                                    <li>Privacy Policy</li>
                                    <li>Investor relations</li>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="font-semibold text-black">Available in:</li>
                            <li>Mumbai</li>
                            <li>Delhi</li>
                            <li>Chennai</li>
                            <li>Kolkata</li>
                            <li>Pune</li>
                            <li>Hyderabad</li>
                            <li>Gurgaon</li>
                            <li>+600 cities</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Footer;