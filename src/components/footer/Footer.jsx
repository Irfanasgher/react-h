import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer py-5 text-white">
        <div class="container py-5 border-bottom">
   <div class="row">
      <div class="col-md-3 ">
               <img className="mt-5" src="./assets/images/footer-logo.png" alt=""/>
           
      </div>
      <div className="col-md-6">
      <div className="row">      
            <div class="col-md-4">
            <h4 className="font-weight-bold">Company</h4>
                     <ul>
                        <li> <a href="#"> -About Us </a> </li>
                        <li> <a href="#"> -Career</a> </li>
                        <li> <a href="#"> -Blog</a> </li>
                        <li> <a href="#"> -Press</a> </li>

                     </ul>
                  </div>
      <div class="col-md-4">
      <h4 className="font-weight-bold">product</h4>
      <ul>
                        <li> <a href="#"> -Customer</a> </li>
                        <li> <a href="#"> -Service</a> </li>
                        <li> <a href="#"> -Enterprise</a> </li>
                        <li> <a href="#"> -Price</a> </li>
                        <li> <a href="#"> -Security</a> </li>
                        <li> <a href="#"> -Why SLICK?</a> </li>
        </ul>
      </div>
      <div class="col-md-4">
      <h4 className="font-weight-bold">Download App</h4>
      <ul>
                        <li> <a href="#"> -Android App</a> </li>
                        <li> <a href="#"> -IOD App</a> </li>
                        <li> <a href="#"> -Window App</a> </li>
                        <li> <a href="#"> -Play Store</a> </li>
                        <li> <a href="#"> -IOS Store</a> </li>
        </ul>
      </div>
      </div>
</div>

      <div class="col-md-3">
      <h4 className="font-weight-bold">Subscribe Now</h4>
      <p>Appropriately implement calysts for change visa wireless catalysts for change.</p>
      <form class="form-footer my-3">
                  <input className="px-2" type="text" placeholder="Enter Email" name="search"/>
                  <button className="btn btn-success"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
      </form>
      </div>


   </div>
   <hr/>
</div>
   <p className="text-success copyright text-center">Crafted by <span className="text-white">UIdeck</span></p>
        </div>
      </div>
    )
  }
}
