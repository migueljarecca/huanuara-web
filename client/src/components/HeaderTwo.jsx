import { Link, NavLink } from "react-router-dom"
import { Bars3, MapPin, XMark } from "../assets/icons/Icons"

export const HeaderTwo = () => {

    return(
        <header className="header">

            <Link to={"/"} end className='home-link'>
                <img src="/images/municipalidad-distrital-huanuara.png" alt="" />
            </Link>

            <nav className='header-nav'>
                <ul>
                        
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
                    // onClick={toggleMobileMenu}                    
                >
                    {/* {isMobileMenuOpen ? <XMark /> : <Bars3 />} */}
                    <Bars3 />
                </div>
            </div>
                             
        </header>
    )
}