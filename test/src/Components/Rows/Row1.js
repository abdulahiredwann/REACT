import React from 'react';
import ml from '../../images/home/mac-laptop.jpg';

function Row1() {
    return (
        <div>
            <div className="row ty">
                <div className="container">
                    <div className="name text-center font-weight-bold">
                        MacBook Pro
                    </div>
                    <div className="detail text-center">
                        The best for the brightest.
                    </div>
                    <div className="links1 text-center">
                        <ul className="list-unstyled list-inline">
                            <li className="list-inline-item">
                                <a href="/learn-more-macbook-pro">Learn More</a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/buy-macbook-pro">Buy</a>
                            </li>
                        </ul>
                    </div>
                    <div className="macbook1img">
                        <img src={ml} alt="MacBook Pro" />
                    </div>
                </div>

                <div className="container-fluid text-white">
                    <div className="ip11pro dd mt-1">
                        <div className="name text-center font-weight-bold">
                            iPhone 11 Pro
                        </div>
                        <div className="detail text-center">
                            Pro cameras. Pro display. Pro performance
                        </div>
                        <div className="text-center">
                            From $24.95/mo. or $599 with trade‑in.
                        </div>
                        <div className="links1 text-center">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="/learn-more-iphone-11-pro">Learn More</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/buy-iphone-11-pro">Buy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="ip11 mt-1">
                        <div className="name text-center font-weight-bold">
                            iPhone 11
                        </div>
                        <div className="detail text-center">
                            Just the right amount of everything
                        </div>
                        <div className="text-center">
                            From $16.62/mo. or $399 with trade‑in.
                        </div>
                        <div className="links1 text-center">
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item">
                                    <a href="/learn-more-iphone-11">Learn More</a>
                                </li>
                                <li className="list-inline-item">
                                    <a href="/buy-iphone-11">Buy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Row1;
