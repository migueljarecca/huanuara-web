import { ArrowSmallRight, BookOpen, ChevronRight, Folder } from "../../assets/icons/Icons"
import { Link, NavLink } from "react-router-dom"

import homeServicesCard1 from "../../assets/images/home/ServicesCard/home-services-card-1.png"
import homeServicesCard2 from "../../assets/images/home/ServicesCard/home-services-card-2.webp"
import homeServicesCard3 from "../../assets/images/home/ServicesCard/home-services-card-3.jpg"

export const Home = () => {
    return (
        <main className="home-main">
            <section className="home-section-hero">
                <div className="home-container-image">
                    <img src="/images/page-hero-drink.webp" alt="" />
                    <div className="home-container-text"> 
                        <h1>Welcome to the Home Page</h1>
                        <p>This is the main landing page of our application.</p>
                    </div>
                </div>
            </section>

            <section className="home-info">
                <div className="home-info__container">
                    <div className="home-info__wrapper-card">
                        <div className="home-info__card">
                            <NavLink to="/login" className="home-info__card-link">
                                <div className="home-info__card-content">
                                    <h2 className="home-info__card-tittle">Make a Payment</h2>
                                    <p class="home-info__card-text">
                                        Pay your City Services Bill (water, sewer, trash) or other bill, fine, or fee.
                                    </p>

                                    <div className="home-info__card-icon-wrapper">
                                        <BookOpen />
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>                    <div className="home-info__wrapper-card">
                        <div className="home-info__card">
                            <NavLink to="/login" className="home-info__card-link">
                                <div className="home-info__card-content">
                                    <h2 className="home-info__card-tittle">Make a Payment</h2>
                                    <p class="home-info__card-text">
                                        Pay your City Services Bill (water, sewer, trash) or other bill, fine, or fee.
                                    </p>

                                    <div className="home-info__card-icon-wrapper">
                                        <BookOpen />
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>                    <div className="home-info__wrapper-card">
                        <div className="home-info__card">
                            <NavLink to="/login" className="home-info__card-link">
                                <div className="home-info__card-content">
                                    <h2 className="home-info__card-tittle">Make a Payment</h2>
                                    <p class="home-info__card-text">
                                        Pay your City Services Bill (water, sewer, trash) or other bill, fine, or fee.
                                    </p>

                                    <div className="home-info__card-icon-wrapper">
                                        <BookOpen />
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                    <div className="home-info__wrapper-card">
                        <div className="home-info__card">
                            <NavLink to="/login" className="home-info__card-link">
                                <div className="home-info__card-content">
                                    <h2 className="home-info__card-tittle">Make a Payment</h2>
                                    <p class="home-info__card-text">
                                        Pay your City Services Bill (water, sewer, trash) or other bill, fine, or fee.
                                    </p>

                                    <div className="home-info__card-icon-wrapper">
                                        <BookOpen />
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </section>

            <section className="home-services">
                <div className="home-services__container">
                    <div className="home-services__header">
                        <h2 className="title">Servicios</h2>
                        <p className="subtitle">Accede rápidamente a los servicios más solicitados</p>
                    </div>

                    <div className="home-services__grid">

                        <div className="home-services__card">
                            <NavLink to={'/login'} className="card-link"></NavLink> 
                            <div className="card-wrapper-img">
                                <img src={homeServicesCard1} alt="Service Icon 1" />
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">SISFOH</h3>
                                <p className="card-subtitle">Focalización de hogares para programas sociales</p>
                            </div>

                            <div className="card-action">
                                <span>Visitar página</span>
                                <div className="wrapper-icon">
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>

                        <div className="home-services__card">
                            <NavLink to={'/login'} className="card-link"></NavLink> 
                            <div className="card-wrapper-img">
                                <img src={homeServicesCard2} alt="Service Icon 1" />
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">SISFOH</h3>
                                <p className="card-subtitle">Focalización de hogares para programas sociales</p>
                            </div>

                            <div className="card-action">
                                <span>Visitar página</span>
                                <div className="wrapper-icon">
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>

                        <div className="home-services__card">
                            <NavLink to={'/login'} className="card-link"></NavLink> 
                            <div className="card-wrapper-img">
                                <img src={homeServicesCard3} alt="Service Icon 1" />
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">SISFOH</h3>
                                <p className="card-subtitle">Focalización de hogares para programas sociales</p>
                            </div>

                            <div className="card-action">
                                <span>Visitar página</span>
                                <div className="wrapper-icon">
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>                        
                     
                        <div className="home-services__card">
                            <NavLink to={'/login'} className="card-link"></NavLink> 
                            <div className="card-wrapper-img">
                                <img src={homeServicesCard2} alt="Service Icon 1" />
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">SISFOH</h3>
                                <p className="card-subtitle">Focalización de hogares para programas sociales</p>
                            </div>

                            <div className="card-action">
                                <span>Visitar página</span>
                                <div className="wrapper-icon">
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>

                        <div className="home-services__card">
                            <NavLink to={'/login'} className="card-link"></NavLink> 
                            <div className="card-wrapper-img">
                                <img src={homeServicesCard3} alt="Service Icon 1" />
                            </div>

                            <div className="card-body">
                                <h3 className="card-title">SISFOH</h3>
                                <p className="card-subtitle">Focalización de hogares para programas sociales</p>
                            </div>

                            <div className="card-action">
                                <span>Visitar página</span>
                                <div className="wrapper-icon">
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="home-services__see-more">
                        <Link to={'/login'} className="home-services__see-more-link">
                            Ver todos los servicios
                        </Link>
                    </div>

                </div>        
            </section>

            <section className="home-transparency">

                <div className="home-transparency__container">
                    <div className="home-transparency__header">
                        <h2 className="home-transparency__header-title">Documentos de Transparencia</h2>
                        <p className="home-transparency__header-subtitle">
                            "En esta sección encontrarás información pública sobre la gestión municipal. 
                            Nuestro objetivo es garantizar la transparencia y el acceso libre a los documentos que 
                            fortalecen la confianza entre la municipalidad y la comunidad."</p>
                    </div>
                    
                    <div className="home-transparency__grid">

                        <div className="home-transparency__card">
                            <div className="home-transparency__card-icon-wrapper">
                                <Folder />
                            </div>

                            <div className="home-transparency__card-body">
                                <h3 className="home-transparency__card-title">Presupuesto Municipal</h3>
                                <p className="home-transparency__card-subtitle">Consulta los presupuestos anuales asignados a la municipalidad y cómo se distribuyen en cada área.</p>
                            </div>


                            <div className="home-transparency__card-action">
                                <Link to={'/login'} className="home-transparency__card-link">
                                    <span>Ver más detalles</span>
                                    <div className="home-transparency__card-link-icon-wrapper">
                                        <ArrowSmallRight />
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="home-transparency__card">
                            <div className="home-transparency__card-icon-wrapper">
                                <Folder />
                            </div>

                            <div className="home-transparency__card-body">
                                <h3 className="home-transparency__card-title">Obras y Proyectos</h3>
                                <p className="home-transparency__card-subtitle">Información sobre las obras en ejecución y proyectos planificados para la comunidad.</p>
                            </div>


                            <div className="home-transparency__card-action">
                                <Link to={'/login'} className="home-transparency__card-link">
                                    <span>Ver más detalles</span>
                                    <div className="home-transparency__card-link-icon-wrapper">
                                        <ArrowSmallRight />
                                    </div>
                                </Link>
                            </div>
                        </div> 

                        <div className="home-transparency__card">
                            <div className="home-transparency__card-icon-wrapper">
                                <Folder />
                            </div>

                            <div className="home-transparency__card-body">
                                <h3 className="home-transparency__card-title">Rendición de Cuentas</h3>
                                <p className="home-transparency__card-subtitle">Revisa los informes de gastos e ingresos, garantizando la transparencia en la gestión.</p>
                            </div>


                            <div className="home-transparency__card-action">
                                <Link to={'/login'} className="home-transparency__card-link">
                                    <span>Ver más detalles</span>
                                    <div className="home-transparency__card-link-icon-wrapper">
                                        <ArrowSmallRight />
                                    </div>
                                </Link>
                            </div>
                        </div> 

                    </div>

                </div>

            </section>
        </main>
    )
}