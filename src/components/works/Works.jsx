import React, { Component } from 'react'

export default class Works extends Component {
    render() {
        $('#blogCarousel').carousel({
            interval: 1000
        });
        return (
            <div>
                <div className="works-main text-white">
                    <div className="head">
                        <div className="contanier">
                            <h1 className=" text-center font-weight-bold">Recent Works</h1>
                            <p className=" text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore.</p>
                        </div>
                    </div>
                    <div className="slider">
                        <div class="container">
                            <div class="row blog">
                                <div class="col-md-12">
                                    <div id="blogCarousel" class="carousel slide" data-ride="carousel">

                                        <ol class="carousel-indicators">
                                            <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>
                                            <li data-target="#blogCarousel" data-slide-to="1"></li>
                                            <li data-target="#blogCarousel" data-slide-to="2"></li>
                                            <li data-target="#blogCarousel" data-slide-to="3"></li>
                                        </ol>

                                        <div class="carousel-inner pt-3">

                                            <div class="carousel-item active">
                                                <div class="row">
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/01.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/02.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/03.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/05.jpg" alt="Image" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="carousel-item">
                                                <div class="row">
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/01.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/02.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/03.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/05.jpg" alt="Image" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="carousel-item">
                                                <div class="row">
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/01.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/02.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/03.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/05.jpg" alt="Image" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="carousel-item">
                                                <div class="row">
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/01.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/02.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/03.jpg" alt="Image" />
                                                    </div>
                                                    <div class="col-md-3">

                                                        <img src="./assets/images/05.jpg" alt="Image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
