import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="header-main">

        </div>
        <div className="container">
          <div className="header row">
            <div className="col-md-6 header-txt">
              <div className="container">
                <h1 className="mt-5 font-weight-bold">Handcrafted Web Template
                For Business and Startups</h1>

                <p className="py-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                  dolores ea fugiat nesciunt quisquam.
                </p>
                <div className="btn btn-success text-white py-2 px-4 font-weight-bold mx-2">GET STARTED</div>
                <div className="btn btn-light text-success py-2 px-4 font-weight-bold mx-2"> CONTACT US</div>
              </div>
            </div>
            <div className="col-md-6 pt-5 header-img">
              <img src="./assets/images/intro.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
