import React from 'react';
import logosm from '../../images/icons/logo-sm.png';
import search from '../../images/icons/search-icon-sm.png';
import cart from '../../images/icons/cart-sm.png';

function Header() {
    return (
        <div>
            <div className="nav-wrapper fixed-top">
                <div className="container">
                    <nav className="navbar navbar-toggleable-sm navbar-expand-md">
                        <button
                            className="navbar-toggler navbar-toggler-right"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            ☰
                        </button>
                        <a className="navbar-brand mx-auto" href="/">
                            <img src={logosm} alt="Logo" />
                        </a>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav nav-justified w-100 nav-fill">
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/mac/">Mac</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/iphone/">iPhone</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/ipad/">iPad</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/watch/">Watch</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/tv/">TV</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/music/">Music</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/support/">Support</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/search/">
                                        <img src={search} alt="Search" />
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link js-scroll-trigger" href="/cart/">
                                        <img src={cart} alt="Cart" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Header;
