import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {

    $(document).ready(function () {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
          $(".black").css("background", "-webkit-linear-gradient(#5533FF, #26D9F5)");


        }


        else {
          $(".black").css("background", "#007BFF");
        }
      });
    });

    return (
      <div className="black">
        <nav className="container navbar navbar-expand-lg navbar-dark ">
          <a className="navbar-brand" href="#">
            <img src="./assets/images/logo.png" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto font-weight-bold">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Showcase</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <div className="form-inline mx-3 my-lg-0">
              <button className="btn btn-lg btn-outline-none btn-light  my-sm-0" type="submit">Download</button>
            </div>
          </div>
        </nav>
      </div>

      //   <div className="black row bg-primary">
      //     <div className="col-md-12">
      //       <div className="container">
      //         <nav className="black ">
      //           <a className="navbar-brand" href="#">
      //             <img src="./assets/images/logo.png" />
      //           </a>
      //           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      //             <span className="navbar-toggler-icon"></span>
      //           </button>
      // <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      //   <div className="navbar-nav  font-weight-bold">

      //     <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
      //     <a style={{color:"white"}} className="nav-item nav-link" href="#">About</a>
      //     <a className="nav-item nav-link" href="#">Services</a>
      //     <a className="nav-item nav-link" href="#">Showcase</a>
      //     <a className="nav-item nav-link" href="#">Pricing</a>
      //     <a className="nav-item nav-link" href="#">Team</a>
      //     <a className="nav-item nav-link" href="#">Blog</a>
      //     <a className="nav-item nav-link" href="#">Contact</a>

      //   </div>
      // </div>
      //         </nav>
      //       </div>
      //     </div>

      //   </div>
    )
  }
}

export default Navbar;