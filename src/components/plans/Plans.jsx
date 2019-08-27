import React, { Component } from 'react'

export default class Plans extends Component {
  render() {
    return (
      <div>
        <div className="plans py-5">
        <div className="container py-5">
            <h1 className=" text-center font-weight-bold">Pricing Plans</h1>
            <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore.</p>
        
            <div className="row text-center">
            <div className="col-md-4 py-5">
              <div className="inner py-5 px-4 border border-secondary">
              <h4>FREE</h4>
              <h1><small>$</small>00</h1>
              <ul>
                  <li>Free Instalation</li>
                  <li>500MB Storage</li>
                  <li>Single User</li>
                  <li>5 GB Bandwith</li>
                  <li>Minimal Features</li>
                  <li>No Dashboard</li>
              </ul>
              <div className="btn text-success px-4 py-2 btn-light border-success">PURCHASE</div>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <div className="inner py-5 px-4 border border-secondary">
              <h4>STANDARD</h4>
              <h1><small>$</small>19.99</h1>
              <ul>
                  <li>Free Instalation</li>
                  <li>500MB Storage</li>
                  <li>Single User</li>
                  <li>5 GB Bandwith</li>
                  <li>Minimal Features</li>
                  <li>No Dashboard</li>
              </ul>
              <div className="btn btn-success px-4 py-2 border-success">PURCHASE</div>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <div className="inner py-5 px-4 border border-secondary">
              <h4>BUSINSESS</h4>
              <h1><small>$</small>29.99</h1>
              <ul>
                  <li>Free Instalation</li>
                  <li>500MB Storage</li>
                  <li>Single User</li>
                  <li>5 GB Bandwith</li>
                  <li>Minimal Features</li>
                  <li>No Dashboard</li>
              </ul>
              <div className="btn text-success px-4 py-2 btn-light border-success">PURCHASE</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
