import React, { Component } from 'react';

class FooterLayout extends Component {

    render() {

        const style = {
            width: '60px'
        }

        return (
            <footer className="page-footer font-small unique-color-dark pt-0 mt-4">

                <div className="primary-color">
                    <div className="container">
                        <div className="row py-4 d-flex align-items-center">

                            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                            </div>

                            <div className="col-md-6 col-lg-7 text-center text-md-right">
                                <a className="fb-ic ml-0">
                                    <i className="fa fa-facebook white-text mr-4"> </i>
                                </a>
                                <a className="tw-ic">
                                    <i className="fa fa-twitter white-text mr-4"> </i>
                                </a>
                                <a className="gplus-ic">
                                    <i className="fa fa-google-plus white-text mr-4"> </i>
                                </a>
                                <a className="li-ic">
                                    <i className="fa fa-linkedin white-text mr-4"> </i>
                                </a>
                                <a className="ins-ic">
                                    <i className="fa fa-instagram white-text mr-lg-4"> </i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container mt-5 mb-4 text-center text-md-left">
                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>DLEARN</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={style} />
                            <p>DLEARN is  a decentralized platform for the best online education, we offer self-paced and instructor led online courses.
                                Here you can find online instructor and also buy and sell online cousers with out intermediaries.</p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Products</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={style} />
                            <p>
                                <a href="#!">Selp-paced Trainings</a>
                            </p>
                            <p>
                                <a href="#!">Personal Instructors</a>
                            </p>
                            <p>
                                <a href="#!">Online Classrooms</a>
                            </p>
                            <p>
                                <a href="#!">Online Bootcamps</a>
                            </p>
                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase font-weight-bold">
                                <strong>Useful links</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={style} />
                            <p>
                                <a href="#!">All Courses</a>
                            </p>
                            <p>
                                <a href="#!">Become an Affiliate</a>
                            </p>
                            <p>
                                <a href="#!">About us</a>
                            </p>
                            <p>
                                <a href="#!">Contact Us</a>
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
                    <a href="/"> Santosh creative works </a>
                </div>

            </footer>


        );
    }



}

export default FooterLayout;