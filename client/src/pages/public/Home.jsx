import { BookOpen } from "../../assets/icons/Icons"
import { NavLink } from "react-router-dom"

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

            <section style={{ height: '200px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            </section>
        </main>
    )
}