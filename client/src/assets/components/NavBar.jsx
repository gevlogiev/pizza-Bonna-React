import { NavLink } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <span className="flaticon-pizza-1 mr-1"></span>Pizza<br /><small>Bonna</small>
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Меню
                </button>
                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeclassname="active">
                                Начало
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/menu" className="nav-link" activeclassname="active">
                                Меню
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className="nav-link" activeclassname="active">
                             Къде да ни откриете   
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" className="nav-link" activeclassname="active">
                                Blog
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link" activeclassname="active">
                                Вход
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link" activeclassname="active">
                                Контакти
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/get-all-products" className="nav-link" activeclassname="active">
                                Меню А
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
