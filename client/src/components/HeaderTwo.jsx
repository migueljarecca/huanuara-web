import { Link, NavLink } from "react-router-dom"
import { Bars3, ChevronDown, ChevronUp, MapPin, XMark } from "../assets/icons/Icons"
import { useState } from "react";

export const HeaderTwo = () => {

    const [isActiveDropdown, setIsActiveDropdown] = useState(false);
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

    // Handler for dropdown
    const handlerDropdown = () => {
        if (isMobileView) {
            setIsActiveDropdown(!isActiveDropdown);
        }
    };

    // Handler for hamburger menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return(
        <header className="header">

            <Link to={"/"} end className='home-link'>
                <img src="/images/municipalidad-distrital-huanuara.png" alt="" />
            </Link>

            <nav className={`header-nav ${isMobileMenuOpen ? 'active' : ''}`}>
                <ul>
                        
                    <li>
                        <NavLink 
                            to={"/"} 
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <div 
                            className="menu-dropdown" 
                            onClick={handlerDropdown}
                            // onMouseEnter={() => !isMobileView && setIsActiveDropdown(true)}
                            // onMouseLeave={() => !isMobileView && setIsActiveDropdown(false)}
                        >
                            <span className="menu-name">Distrito</span>
                            <div className="menu-caret">
                                {isActiveDropdown ? <ChevronUp /> : <ChevronDown />}
                            </div>
                        </div>                        
                    </li>
                    <li>
                        <NavLink 
                            to={"/"} 
                        >
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={"/"} 
                        >
                            Inicio
                        </NavLink>
                    </li>


                </ul>
            </nav>

            <div className="header-icons">
                <div 
                    className='header-icon-wrapper'
                >
                    <Link to={"/map"} className="header-icon-link">
                        <MapPin />
                    </Link>
                </div>

                <div 
                    className='header-icon-wrapper'
                    id='mobile-menu-icon'
                    onClick={toggleMobileMenu}                    
                >
                    {isMobileMenuOpen ? <XMark /> : <Bars3 />}
                </div>
            </div>
                             
        </header>
    )
}