import { Link, NavLink } from 'react-router-dom';
import { MapPin } from '../assets/icons/Icons';

export const Header = () => {

    return (
        <header className="header">
            <Link to={"/"} end className='home-link'>
                <img src="/images/municipalidad-distrital-huanuara.png" alt="" />
            </Link>

                <nav className="header-nav">
                    <ul className='menu-list'>
                        <li><NavLink to={"/"} className="menu-link">Inicio</NavLink></li>
                        <li><NavLink to={"/district"} className="menu-link">Distrito</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={"/district/history"} className="sub-menu-link">Historia</NavLink></li>
                                <li><NavLink to="/district/location" className="sub-menu-link">Ubicación</NavLink></li>
                                <li><NavLink to="/district/geography" className="sub-menu-link">Geografía y Demografía</NavLink></li>
                                <li><NavLink to="/district/tourism" className="sub-menu-link">Lugares Turísticos</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to={"/municipality"} className="menu-link">Municipio</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to="/municipality/mission-vision" className="sub-menu-link">Misión y Visión</NavLink></li>
                                <li><NavLink to="/municipality/authorities" className="sub-menu-link">Autoridades</NavLink></li>
                                <li><NavLink to="/municipality/council" className="sub-menu-link">Consejo Municipal</NavLink></li>
                                <li><NavLink to="/municipality/organization-chart" className="sub-menu-link">Organigrama</NavLink></li>
                                <li><NavLink to="/municipality/neighborhood-boards" className="sub-menu-link">Juntas Vecinales</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/programs" className="menu-link">Programas</NavLink>
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
                    <div className='header-icons-wrapper'>
                        <Link to={"/map"} className="header-icon-link">
                            <MapPin />
                        </Link>
                    </div>

                    
                </div>

        </header>
    )
}