import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <div className="blog plans py-5">
        <div className="container py-5">
            <h1 className=" text-center font-weight-bold">Latest Blog Posts</h1>
            <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore.</p>
        
            <div className="row">
            <div className="col-md-4 py-5">
              <div className="inner border border-secondary">
              <img src="./assets/images/101.jpg" alt=""/>
              <div className="py-3 px-4">
              <h5 className="font-weight-bold">How Slick Will Transform Your Business</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
              <span className="text-success font-weight-bold pt-2">5 MIN READ</span>
              </div>
              <hr/>
              <div className="px-4">
              <p><i class="fa fa-user-circle-o" aria-hidden="true"></i> Posted by Admin</p>
              <p className="text-right"><i class="fa fa-calendar" aria-hidden="true"></i> 10 April,2020</p>
              </div>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <div className="inner border border-secondary">
              <img src="./assets/images/201.jpg" alt=""/>
              <div className="py-3 px-4">
              <h5 className="font-weight-bold">Growth Techniques for New Startups</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
              <span className="text-success font-weight-bold pt-2">5 MIN READ</span>
              </div>
              <hr/>
              <div className="px-4">
              <p><i class="fa fa-user-circle-o" aria-hidden="true"></i> Posted by Admin</p>
              <p className="text-right"><i class="fa fa-calendar" aria-hidden="true"></i> 10 April,2020</p>
              </div>
              </div>
            </div>
            <div className="col-md-4 py-5">
              <div className="inner border border-secondary">
              <img src="./assets/images/301.jpg" alt=""/>
              <div className="py-3 px-4">
              <h5 className="font-weight-bold">Writing Professional Emails to Customers</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
              <span className="text-success font-weight-bold pt-2">5 MIN READ</span>
              </div>
              <hr/>
              <div className="px-4">
              <p><i class="fa fa-user-circle-o" aria-hidden="true"></i> Posted by Admin</p>
              <p className="text-right"><i class="fa fa-calendar" aria-hidden="true"></i> 10 April,2020</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
