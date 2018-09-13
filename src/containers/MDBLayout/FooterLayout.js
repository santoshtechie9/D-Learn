import React, { Component } from 'react';

class FooterLayout extends Component {

    render() {

        const style = {
            width: '60px'
        }

        return (
            <footer className="page-footer font-small unique-color-dark pt-0 mt-4">

                <div class="primary-color">
                    <div class="container">
                        <div class="row py-4 d-flex align-items-center">

                            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 class="mb-0 white-text">Get connected with us on social networks!</h6>
                            </div>

                            <div class="col-md-6 col-lg-7 text-center text-md-right">
                                <a class="fb-ic ml-0">
                                    <i class="fa fa-facebook white-text mr-4"> </i>
                                </a>
                                <a class="tw-ic">
                                    <i class="fa fa-twitter white-text mr-4"> </i>
                                </a>
                                <a class="gplus-ic">
                                    <i class="fa fa-google-plus white-text mr-4"> </i>
                                </a>
                                <a class="li-ic">
                                    <i class="fa fa-linkedin white-text mr-4"> </i>
                                </a>
                                <a class="ins-ic">
                                    <i class="fa fa-instagram white-text mr-lg-4"> </i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-4 text-center text-md-left">
                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Company name</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={style} />
                            <p>Here you can use rows and columns here to organize your footer content. </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Products</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={style} />
                            <p>
                                <a href="#!">MDBootstrap</a>
                            </p>
                            <p>
                                <a href="#!">MDWordPress</a>
                            </p>
                            <p>
                                <a href="#!">BrandFlow</a>
                            </p>
                            <p>
                                <a href="#!">Bootstrap Angular</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Useful links</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={style} />
                            <p>
                                <a href="#!">Your Account</a>
                            </p>
                            <p>
                                <a href="#!">Become an Affiliate</a>
                            </p>
                            <p>
                                <a href="#!">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={style} />
                            <p>
                                <i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fa fa-envelope mr-3"></i> info@example.com</p>
                            <p>
                                <i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p>
                                <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </div>

                    </div>
                </div>

                <div className="footer-copyright py-3 text-center">
                    © 2018 Copyright:
                    <a href="#"> Santosh creative works </a>
                </div>

            </footer>


        );
    }



}

export default FooterLayout;