import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render() {
        const style = {
            width: '60px'
        }
        return (
            <Footer color="stylish-color-dark" className="page-footer font-small pt-0 mt-4">
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

                <Container className="text-center text-md-left">
                    <Row>
                        <Col md="3">
                            <h6 className="text-uppercase font-weight-bold mt-3">
                                <strong>DLEARN</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={style} />
                            <p>DLEARN is  a decentralized platform for the best online education. We offer self-paced and instructor led online courses.
                                Here you can find online instructor and also buy and sell online cousers with out intermediaries.</p>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="3">
                            <h6 className="text-uppercase font-weight-bold mt-3">
                                <strong>Products</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={style} />
                            <ul className="list-unstyled">
                                <p><li><a href="#!">Selp-paced Training</a></li></p>
                                <p><li><a href="#!">Personal Instructors</a></li></p>
                                <p><li><a href="#!">Online Classrooms</a></li></p>
                                <p><li><a href="#!">Online Bootcamps</a></li></p>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="3">
                            <h6 className="text-uppercase font-weight-bold mt-3">
                                <strong>Userful Links</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={style} />
                            <ul className="list-unstyled">
                                <p><li><a href="#!">All Courses</a></li></p>
                                <p><li><a href="#!">Become an Affiliate</a></li></p>
                                <p><li><a href="#!">About us</a></li></p>
                                <p><li><a href="#!">Contact Us</a></li></p>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="3">
                            <h6 className="text-uppercase font-weight-bold mt-3">
                                <strong>Contact</strong>
                            </h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={style} />
                            <p><i className="fa fa-home mr-3"></i> New York,US</p>
                            <p> <i className="fa fa-envelope mr-3"></i> info@example.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                            <p> <i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <div className="text-center py-4">
                    <ul className="list-unstyled list-inline mb-0">
                        <li className="list-inline-item">
                            <h5 className="mb-1">Register for free</h5>
                        </li>
                        <li className="list-inline-item"><a href="/" className="btn btn-danger btn-rounded">Sign up!</a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="/"> Santosh Creative Works </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;