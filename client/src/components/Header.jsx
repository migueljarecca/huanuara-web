import { Link, NavLink } from 'react-router-dom';
import { Bars3, ChevronDown, ChevronUp, MapPin, XMark } from '../assets/icons/Icons';
import { useEffect, useRef, useState } from 'react';

export const Header = () => {

    const [isActiveDropdown, setIsActiveDropdown] = useState(false);
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    const menuRef = useRef(null);
    const dropdownRef = useRef(null);

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


    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsActiveDropdown(false);
            }
            if (menuRef.current && menuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



    return (
        <header className="header">
            <Link to={"/"} end className='home-link'>
                <img src="/images/municipalidad-distrital-huanuara.png" alt="" />
            </Link>

                <nav className={`header-nav ${isMobileMenuOpen ? 'active' : ''}`} ref={menuRef}>

                    <ul className='menu-list'>
                        
                        <li className='menu-item'>
                            <NavLink 
                                to={"/"} 
                                className="menu-link"
                                onClick={() => isMobileView && setIsMobileMenuOpen(false)}
                            >
                                Inicio
                            </NavLink>
                        </li>

                        <li className={"menu-item"} ref={dropdownRef}>
                            <div 
                                className="select" 
                                onClick={handlerDropdown}
                                onMouseEnter={() => !isMobileView && setIsActiveDropdown(true)}
                                onMouseLeave={() => !isMobileView && setIsActiveDropdown(false)}
                            >
                                <span className="select-span">Distrito</span>
                                <div className="select-icon">
                                    {isActiveDropdown ? <ChevronUp /> : <ChevronDown />}
                                </div>
                            </div>
                            <ul 
                                className={`sub-menu ${isActiveDropdown ? 'active' : ''}`}
                                onMouseEnter={() => !isMobileView && setIsActiveDropdown(true)}
                                onMouseLeave={() => !isMobileView && setIsActiveDropdown(false)}
                            >
                                <li>
                                    <NavLink 
                                        to={"/district/history"} 
                                        className="sub-menu-link"
                                        onClick={() => {
                                            setIsActiveDropdown(false)
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
                                            setIsActiveDropdown(false)
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
                                            setIsActiveDropdown(false)
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
                                            setIsActiveDropdown(false)
                                            isMobileView && setIsMobileMenuOpen(false);
                                        }}
                                    >
                                        Lugares Turísticos
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
















                        <li className='menu-item'>
                            <div className="menu-selected">
                                <NavLink to={"/district"} className="menu-link">Distrito</NavLink>
                                <ChevronDown />
                            </div>
                            <ul className="sub-menu">
                                <li><NavLink to={"/district/history"} className="sub-menu-link">Historia</NavLink></li>
                                <li><NavLink to="/district/location" className="sub-menu-link">Ubicación</NavLink></li>
                                <li><NavLink to="/district/geography" className="sub-menu-link">Geografía y Demografía</NavLink></li>
                                <li><NavLink to="/district/tourism" className="sub-menu-link">Lugares Turísticos</NavLink></li>
                            </ul>
                        </li>

                        <li className='menu-item'>
                            <div className="menu-selected">
                                <NavLink to={"/municipality"} className="menu-link">Municipio</NavLink>
                                <ChevronDown />    
                            </div>
                            <ul className="sub-menu">
                                <li><NavLink to="/municipality/mission-vision" className="sub-menu-link">Misión y Visión</NavLink></li>
                                <li><NavLink to="/municipality/authorities" className="sub-menu-link">Autoridades</NavLink></li>
                                <li><NavLink to="/municipality/council" className="sub-menu-link">Consejo Municipal</NavLink></li>
                                <li><NavLink to="/municipality/organization-chart" className="sub-menu-link">Organigrama</NavLink></li>
                                <li><NavLink to="/municipality/neighborhood-boards" className="sub-menu-link">Juntas Vecinales</NavLink></li>
                            </ul>
                        </li>

                        <li className='menu-item'>
                            <div className="menu-selected">
                                <NavLink to={"/programs"} className="menu-link">Programas</NavLink>
                                <ChevronDown />
                            </div>                                
                            <ul className="sub-menu">
                                <li><NavLink to="/programs/omaped" className="sub-menu-link">OMAPED</NavLink></li>
                                <li><NavLink to="/programs/vaso-de-leche" className="sub-menu-link">Vaso de Leche</NavLink></li>
                                <li><NavLink to="/programs/demuna" className="sub-menu-link">DEMUNA</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to={"/services"} className="menu-link">Servicios</NavLink></li>
                        <li><NavLink to={"/news"} className="menu-link">Noticias</NavLink></li>
                        <li><NavLink to={"/contact"} className="menu-link">Contáctanos</NavLink></li>
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