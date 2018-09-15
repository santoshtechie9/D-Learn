import React, { Component } from 'react';
import NavbarLayout from './NavBarLayout';
import { View, Mask } from 'mdbreact';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';
import { Row, Col, Card, CardImage, CardBody, CardTitle, CardText, Fa } from 'mdbreact';
import bigdata from '../../assets/big-data-cat.jpg';
import nosql from '../../assets/nosql-cat.jpg';
import programming from '../../assets/programming-cat.jpg';
import bannerImage from '../../assets/banner-img.jpg';
import ContactPageBasic from '../../components/Contact/ContactPageBasic';
import FooterLayout from './ReactFooterLayout';

class MDBLayout extends Component {

    render() {

        const style = {
            width: "100%",
            height: '600px',
        };

        return (
            <div className="app">
                <header className="mb-5">
                    <NavbarLayout></NavbarLayout>

                    <View waves >
                        <img src={bannerImage} style={style} className="img-fluid" alt="" />
                        <Mask overlay="black-light" className="flex-center">
                            <div className="container-fluid d-flex align-items-center justify-content-center h-100">
                                <div className="row d-flex justify-content-center text-center">
                                    <div className="col-md-10">
                                        <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">Learn</h2>
                                        <hr className="hr-light" />
                                         <h4 className="white-text my-4">Develop a passion for learning. If you do, you will never cease to grow.</h4>
                                        <button type="button" className="btn btn-outline-white">Read more<i className="fa fa-book ml-2"></i></button>
                                    </div>
                                </div>
                            </div>
                        </Mask>
                    </View>
                </header>

                <main className="mt-5">

                    <div className="container">
                        <section id="popular-courses">
                            <h2 className="mb-5 font-weight-bold text-center">Popular Courses</h2>
                            <Row>
                                <Col md="3" className="mb-5">
                                    <Card>
                                        <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" overlay="white-slight" hover waves alt="Card image cap" />
                                        <CardBody>
                                            <a className="activator waves-effect waves-light mr-4"><Fa icon="share-alt"></Fa></a>
                                            <CardTitle>Hiking</CardTitle>
                                            <hr />
                                            <CardText>Hiking is the preferred term for a long, vigorous walk, usually on trails, in the countryside.</CardText>
                                            <a href="#!" className="black-text d-flex justify-content-end"><h5>Read more <Fa icon="angle-double-right"></Fa></h5></a>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3" className="mb-5">
                                    <Card>
                                        <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" overlay="white-slight" hover waves alt="Card image cap" />
                                        <CardBody>
                                            <a className="activator waves-effect waves-light mr-4"><Fa icon="share-alt"></Fa></a>
                                            <CardTitle>Swimming</CardTitle>
                                            <hr />
                                            <CardText>Swimming is an sport requires use of one's arms and legs to move the body through water.</CardText>
                                            <a href="#!" className="black-text d-flex justify-content-end"><h5>Read more <Fa icon="angle-double-right"></Fa></h5></a>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3" className="mb-5">
                                    <Card>
                                        <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" overlay="white-slight" hover waves alt="Card image cap" />
                                        <CardBody>
                                            <a className="activator waves-effect waves-light mr-4"><Fa icon="share-alt"></Fa></a>
                                            <CardTitle>Bloating</CardTitle>
                                            <hr />
                                            <CardText>Boating is the leisurely activity of travelling by boat, or the recreational use of a boat.</CardText>
                                            <a href="#!" className="black-text d-flex justify-content-end"><h5>Read more <Fa icon="angle-double-right"></Fa></h5></a>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md="3" className="mb-5">
                                    <Card>
                                        <CardImage top src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" overlay="white-slight" hover waves alt="Card image cap" />
                                        <CardBody>
                                            <a className="activator waves-effect waves-light mr-4"><Fa icon="share-alt"></Fa></a>
                                            <CardTitle>Surfing</CardTitle>
                                            <hr />
                                            <CardText>Surfing is a surface water sport in which the wave rider, referred to as a surfer, rides.</CardText>
                                            <a href="#!" className="black-text d-flex justify-content-end"><h5>Read more <Fa icon="angle-double-right"></Fa></h5></a>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </section>

                        <hr className="my-5" />
                        <section id="best-features" className="text-center">
                            <h2 className="mb-5 font-weight-bold">Best Features</h2>
                            <div className="row d-flex justify-content-center mb-4">
                                <div className="col-md-8">
                                    <p className="grey-text">DLearn stands by you all the way to ensure that you achieve your learning goals. We are “Incredibly Committed”</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-5">
                                    <i className="fa fa-camera-retro fa-4x orange-text"></i>
                                    <h4 className="my-4 font-weight-bold">INSTRUCTOR LED TRAINING</h4>
                                    <p className="grey-text">We offer online live interactive training programs to the consultants and students across the globe.</p>
                                </div>
                                <div className="col-md-4 mb-1">
                                    <i className="fa fa-heart fa-4x orange-text"></i>
                                    <h4 className="my-4 font-weight-bold">GUARANTEE SATISFACTION</h4>
                                    <p className="grey-text">We strive hard to give you the best online learning experience and guarantee satisfaction.</p>
                                </div>
                                <div className="col-md-4 mb-1">
                                    <i className="fa fa-bicycle fa-4x orange-text"></i>
                                    <h4 className="my-4 font-weight-bold">FLEXIBLE SCHEDULES</h4>
                                    <p className="grey-text">You can choose a flexible schedule for your training from among the weekday or weekend.</p>
                                </div>
                            </div>
                        </section>
                        <hr className="my-5" />

                        <section id="examples" className="text-center">
                            <h2 className="mb-5 font-weight-bold">Popular Categories</h2>
                            <div className="row">
                                <div className="col-lg-4 col-md-12 mb-4">
                                    <View className="z-depth-1-half">
                                        <img src={programming} className="img-fluid" alt="" />
                                        <Mask overlay="white-slight"></Mask>
                                    </View>
                                    <h4 className="my-4 font-weight-bold">Programming</h4>
                                    <p className="grey-text">In this course, you will be learning the concepts of the programming language and the cool functions you can use with build-in library.</p>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <View overlay="z-depth-1-half">
                                        <img src={nosql} className="img-fluid" alt="" />
                                        <Mask overlay="white-slight"></Mask>
                                    </View>
                                    <h4 className="my-4 font-weight-bold">Database</h4>
                                    <p className="grey-text">In this course, you will be learning the concepts of the database and api you can use with work with data stores.</p>
                                </div>
                                <div className="col-lg-4 col-md-6 mb-4">
                                    <View overlay="z-depth-1-half">
                                        <img src={bigdata} className="img-fluid" alt="" />
                                        <Mask overlay="white-slight"></Mask>
                                    </View>
                                    <h4 className="my-4 font-weight-bold">Big Data</h4>
                                    <p className="grey-text">In this course, you will be learning the Big Data concepts and frameworks available for managing huge volumens of data.</p>
                                </div>
                            </div>
                        </section>
                        <hr className="my-5" />
                        <section id="gallery">
                            <h2 className="mb-5 font-weight-bold text-center">Customer Experience</h2>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <Carousel
                                        activeItem={1}
                                        length={3}
                                        showControls={true}
                                        showIndicators={true}
                                        className="z-depth-1">

                                        <CarouselInner>
                                            <CarouselItem itemId="1">
                                                <View>
                                                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/images/84.jpg" alt="First slide" />
                                                </View>
                                            </CarouselItem>
                                            <CarouselItem itemId="2">
                                                <View>
                                                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/images/85.jpg" alt="Second slide" />
                                                </View>
                                            </CarouselItem>
                                            <CarouselItem itemId="3">
                                                <View>
                                                    <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Third slide" />
                                                </View>
                                            </CarouselItem>
                                        </CarouselInner>
                                    </Carousel>
                                </div>

                                <div className="col-md-6 mb-4">
                                    <a href="" className="teal-text">
                                        <h6 className="pb-1"><i className="fa fa-heart"></i><strong> feedback </strong></h6>
                                    </a>
                                    <h4 className="mb-3"><strong>Course Reviews</strong></h4>
                                    <p>DLearn is a great platform for those who want to learn lates tools and technologies in Hadoop and Big Data. </p>
                                    <p>I liked most the interactive sessions where I get a chance to talk to the Instructor and get all my queries clarified instantly throughout the course duration.</p>
                                    <p>I would definitely recommend my friends to join techknowera in learning BigData and Hadoop.</p>
                                    <p>by <a><strong>Santu K</strong></a>, 26/08/2018</p>
                                    <a className="btn btn-primary btn-md">Read more</a>
                                </div>
                            </div>
                        </section>

                        <hr className="my-5" />
                        <section id="contact">
                            <h2 className="mb-5 font-weight-bold text-center">Contact us</h2>
                            <ContactPageBasic />
                        </section>

                    </div>
                </main>

                <  footer>
                    <FooterLayout />
                </footer>

            </div>
        );
    }
}

export default MDBLayout;