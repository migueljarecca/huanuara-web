import { Link, NavLink } from 'react-router-dom';
import { MapPin } from '../assets/icons/Icons';

export const Header = () => {

    return (
        <header className="header">
            <Link to={"/"} end className='home-link'>
                <img src="/images/municipalidad-distrital-huanuara.png" alt="" />
            </Link>

            <div className="nav-container">
                <nav className="header-nav">
                    <ul>
                        <li><NavLink to={"/"} className="nav-link">Inicio</NavLink></li>
                        <li><NavLink to={"/district"} className="nav-link">Distrito</NavLink></li>
                        <li><NavLink to={"/municipality"} className="nav-link">Municipio</NavLink></li>
                        <li><NavLink to={"/services"} className="nav-link">Servicios</NavLink></li>
                        <li><NavLink to={"/news"} className="nav-link">Noticias</NavLink></li>
                        <li><NavLink to={"/contact"} className="nav-link">Contáctanos</NavLink></li>
                    </ul>
                </nav>

                <div className="header-icons-wrapper-out">
                    <div className='header-icons-wrapper-in'>
                        <Link to={"/map"} className="header-icon-link">
                            <MapPin />
                        </Link>
                    </div>

                    
                </div>
            </div>

        </header>
    )
}