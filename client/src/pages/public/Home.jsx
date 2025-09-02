import { BookOpen, ChevronRight } from "../../assets/icons/Icons"
import { NavLink } from "react-router-dom"

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

                        {/* <div className="home-services__wrapper-card"> */}
                            <div className="home-services__card">
                                <NavLink to={'/login'} className="card-link"></NavLink> 
                                <div className="card-wrapper-img">
                                    <img src={homeServicesCard1} alt="Service Icon 1" />
                                </div>

                                <div className="card-body">
                                    <h3>SISFOH</h3>
                                    <p>Focalización de hogares para programas sociales</p>
                                </div>

                                <div className="card-action">
                                    <span>Ver más detalles</span>
                                    <ChevronRight />
                                </div>
                            </div>
                        {/* </div> */}

                        <div className="home-services__wrapper-card">
                            <div className="home-services__card">
                                <NavLink to={'/login'} className="card-link"></NavLink> 
                                <div className="card-wrapper-img">
                                    <img src={homeServicesCard2} alt="Service Icon 1" />
                                </div>

                                <div className="card-body">
                                    <h3>SISFOH</h3>
                                    <p>Focalización de hogares para programas sociales</p>
                                </div>

                                <div className="card-action">
                                    <span>Ver más detalles</span>
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>

                        <div className="home-services__wrapper-card">
                            <div className="home-services__card">
                                <NavLink to={'/login'} className="card-link"></NavLink> 
                                <div className="card-wrapper-img">
                                    <img src={homeServicesCard3} alt="Service Icon 1" />
                                </div>

                                <div className="card-body">
                                    <h3>SISFOH</h3>
                                    <p>Focalización de hogares para programas sociales</p>
                                </div>

                                <div className="card-action">
                                    <span>Ver más detalles</span>
                                    <ChevronRight />
                                </div>
                            </div>
                        </div>                        

                    </div>

                </div>        
            </section>
        </main>
    )
}