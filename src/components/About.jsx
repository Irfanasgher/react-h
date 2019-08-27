import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="about text-center my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 py-5">
              <div className="inner py-5 px-4 border border-secondary">
              <i className="p-5 fa fa-cog" aria-hidden="true"></i>
              <h3 className="font-weight-bold">Bootstrap</h3>
              <p>Share processes and data secure lona need to know basis Our team assured your web site is always safe.</p>
              </div>
            </div>
            <div className="col-md-4 py-5">
            <div className="inner py-5 px-4 border border-secondary">
            <i className="p-5 fa fa-paint-brush" aria-hidden="true"></i>
              <h3 className="font-weight-bold">Slick Design</h3>
              <p>Share processes and data secure lona need to know basis Our team assured your web site is always safe.</p>
            </div>
            </div>
            <div className="col-md-4 py-5">
            <div className="inner py-5 px-4 border border-secondary">
            <i className="p-5 fa fa-heart-o" aria-hidden="true"></i>
              <h3 className="font-weight-bold">Crafted with Love</h3>
              <p>Share processes and data secure lona need to know basis Our team assured your web site is always safe.</p>
            </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}
