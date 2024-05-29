import React from 'react'
import apple from '../../images/icons/apple-tv-logo.png'
import servent from '../../images/icons/servant-logo.png'

function Row3() {
    return (
        <div>
            <div className="row">
                <div className="container mt-1 col-md-6">
                    <div className="tv">
                        <div className="tvlogo">
                            <img src={apple} alt=""/>

                        </div>
                        <div className="servant">
                            <img src={servent} alt=""/>
                        </div>
                        <div className="watcgvideo "><a href="/">Watch the trailer</a></div>

                    </div>
                </div>
                <div className="container col-md-6">
                    <div className="airpod">
                        <div className="name  text- font-weight-bold ">
                            AirPods Pro
                        </div>
                        <div className="detail text-center">
                            Get 3% Daily Cash on purchases from Apple using Apple Card.
                        </div>
                        <div className="links1 text-center ">

                            <ul className="list-unstyled list-inline ">
                                <li className="list-inline-item  "><a href="/">Learn More  </a></li>
                                <li className="list-inline-item"><a href="/"> Buy</a></li>
                            </ul>
                        </div>
                        <div className="ai container">

                        </div>

                    </div>
                </div>
            </div >
        </div>
    )
}
export default Row3 