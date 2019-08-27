import React, { Component } from 'react'

export default class business extends Component {
  render() {
    return (
      <div>
        <div className="business">
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-md-6">
                    <img src="./assets/images/business-img.png" alt=""/>
                    </div>
                    <div className="col-md-6">
                    <h1 className="font-weight-bold">Crafted For Business, Startup and Agency Websites</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <div className="btn btn-success px-4 py-2">DOWNLOAD</div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    )
  }
}
