import { Link, NavLink } from "react-router-dom"
import { Bars3, ChevronDown, ChevronUp, MapPin, XMark } from "../assets/icons/Icons"
import { useEffect, useState } from "react";

export const HeaderTwo = () => {

    const [isActiveDropdown, setIsActiveDropdown] = useState(null);
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    // Detect screen size change
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobileView(window.innerWidth < 768);
        };
            
        checkScreenSize();
    
        window.addEventListener('resize', checkScreenSize);
    
        return() => {
            window.removeEventListener('resize', checkScreenSize);
        };
    },[]);

    // Handler for dropdown with click
    const handlerDropdown = (menu) => {
        if (isMobileView) {
            setIsActiveDropdown(menu);
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
                <ul className="menu">
                        
                    <li>
                        <NavLink 
                            to={"/"} 
                        >
                            Inicio
                        </NavLink>
                    </li>

                    <li
                        onMouseEnter={() => !isMobileView && setIsActiveDropdown('district')}
                        onMouseLeave={() => !isMobileView && setIsActiveDropdown(null)}                    
                    >
                        <div 
                            className="menu-dropdown" 
                            onClick={() => handlerDropdown(isActiveDropdown === 'district' ? null : 'district')}
                        >
                            <span className="menu-name">Distrito</span>
                            <div className="menu-caret">
                                {isActiveDropdown === 'district' ? <ChevronUp /> : <ChevronDown />}
                            </div>
                        </div>
                        
                            <ul 
                                className={`sub-menu ${isActiveDropdown === 'district' ? 'active' : ''}`}
                            >
                                <li>
                                    <NavLink 
                                        to={"/district/history"} 
                                        className="sub-menu-link"
                                        onClick={() => {
                                            setIsActiveDropdown(null)
                                            isMobileView && setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        Historia
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/district/location" 
                                        className="sub-menu-link"
                                        onClick={() => {
                                            setIsActiveDropdown(null)
                                            isMobileView && setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        Ubicación
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/district/geography" 
                                        className="sub-menu-link"
                                        onClick={() => {
                                            setIsActiveDropdown(null)
                                            isMobileView && setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        Geografía y Demografía
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/district/tourism" 
                                        className="sub-menu-link"
                                        onClick={() => {
                                            setIsActiveDropdown(null)
                                            isMobileView && setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        Lugares Turísticos
                                    </NavLink>
                                </li>
                            </ul>     
                    </li>

                    <li
                        onMouseEnter={() => !isMobileView && setIsActiveDropdown('municipality')}
                        onMouseLeave={() => !isMobileView && setIsActiveDropdown(null)}                    
                    >
                        <div 
                            className="menu-dropdown" 
                            onClick={() => handlerDropdown(isActiveDropdown === 'municipality' ? null : 'municipality')}
                        >
                            <span className="menu-name">Municipio</span>
                            <div className="menu-caret">
                                {isActiveDropdown === 'municipality' ? <ChevronUp /> : <ChevronDown />}
                            </div>
                        </div>
                        
                            <ul 
                                className={`sub-menu ${isActiveDropdown === 'municipality' ? 'active' : ''}`}
                            >
                                <li>
                                    <NavLink 
                                        to={"/municipality/mission-vision"} 
                                        className="sub-menu-link"
                                        onClick={() => {
                                            setIsActiveDropdown(null)
                                            isMobileView && setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        Misión y Visión
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/municipality/authorities" 
                                        className="sub-menu-link"
                                        onClick={() => {
                                            setIsActiveDropdown(null)
                                            isMobileView && setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        Autoridades
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/municipality/council" 
                                        className="sub-menu-link"
                                        onClick={() => {
                                            setIsActiveDropdown(null)
                                            isMobileView && setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        Consejo Municipal
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/municipality/organization-chart" 
                                        className="sub-menu-link"
                                        onClick={() => {
                                            setIsActiveDropdown(null)
                                            isMobileView && setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        Organigrama
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink 
                                        to="/municipality/neighborhood-boards" 
                                        className="sub-menu-link"
                                        onClick={() => {
                                            setIsActiveDropdown(null)
                                            isMobileView && setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        Juntas Vecinales
                                    </NavLink>
                                </li>                                
                            </ul>     
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