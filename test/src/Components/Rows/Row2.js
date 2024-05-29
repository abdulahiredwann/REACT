import React from 'react'
import watch from '../../images/icons/watch-series5-logo.png'
import card from '../../images/icons/apple-card-logo.png'
function Row2() {
    return (
        <div>
            <div className="container">
        <div className="row ">
          <div className="col-md-6">
            <div className="watch mt-1">
                <img src={watch} alt=""/>
                <div className="detail text-center">
                  Just the right amount of everything
                </div>
                <div className="links1 text-center ">
              
                  <ul className="list-unstyled list-inline ">
                    <li className="list-inline-item  "><a href="/">Learn More  </a></li>
                    <li className="list-inline-item"><a href="/"> Buy</a></li>
                  </ul>
                </div>
            </div>
          </div>
          
          <div className="card mt-1 col-md-6 ">
              <img src={card} alt=""/>
              <div className="detail text-center">
                Get 3% Daily Cash on purchases from Apple using Apple Card.
              </div>
              <div className="links1 text-center ">
              
                <ul className="list-unstyled list-inline ">
                  <li className="list-inline-item  "><a href="/">Learn More  </a></li>
                  <li className="list-inline-item"><a href="/"> Buy</a></li>
                </ul>
              </div>
  
          </div>
          
  
        </div>

      </div>
        </div>
    )
}
export default Row2
