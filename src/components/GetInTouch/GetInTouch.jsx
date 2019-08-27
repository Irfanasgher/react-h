import React, { Component } from 'react'

export default class GetInTouch extends Component {
  render() {
    return (
      <div>
        <div className="GetInTouch py-5">
        <div className="container py-5">
            <h1 className=" text-center font-weight-bold">Pricing Plans</h1>
            <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore.</p>
        
        <div className="row pt-4">
            <div className="col-md-6">
            <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input id="form_name" type="text" name="name" class="form-control p-4" placeholder="Name" required data-error="Firstname is required."/>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                
                <input id="form_lastname" type="text" name="surname" class="form-control p-4" placeholder="Subject" required data-error="Lastname is required."/>
                <div class="help-block with-errors"></div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                
                <input id="form_name" type="text" name="name" class="form-control p-4" placeholder="Email" required data-error="Firstname is required."/>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                
                <input id="form_lastname" type="text" name="surname" class="form-control p-4" placeholder="Budget" required data-error="Lastname is required."/>
                <div class="help-block with-errors"></div>
              </div>
            </div>
          </div>


          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                <textarea id="form_message" name="message" class="form-control p-4" placeholder="Write Message" rows="4" required data-error="Please,leave us a message."></textarea>
                <div class="help-block with-errors"></div>
              </div>
            </div>
            <div class="col-md-12">
              <input type="submit" class="btn btn-success btn-send p-3 px-5" value="Submit"/>
            </div>
          </div>
            </div>
            <div className="col-md-6 px-5">
            <div className="container px-5">
            <img src="./assets/images/01(3).png" alt=""/>
            </div>
            </div>
        </div>
        
        </div>
        </div>
      </div>
    )
  }
}
