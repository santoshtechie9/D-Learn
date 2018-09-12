import React, { Component } from 'react';
import BouncingCircles from '../../components/Spinners/BouncingCircles/BouncingCircles';
import Squares from '../../components/Spinners/WanderingSquares/WanderingSquares';
import NavbarLayout from './NavBarLayout';
import { View, Mask } from 'mdbreact';
import { Carousel, CarouselInner, CarouselItem } from 'mdbreact';

class MDBLayout extends Component {
    render() {
        return (
            <div className="app ">
                <header>
                    <NavbarLayout></NavbarLayout>

                    <View waves>
                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/full%20page/img%20%283%29.jpg" className="img-fluid" alt="" />
                        <Mask overlay="black-light" className="flex-center">
                            <div className="container-fluid d-flex align-items-center justify-content-center h-100">
                                <div className="row d-flex justify-content-center text-center">
                                    <div className="col-md-10">
                                        <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">Learn</h2>
                                        <hr className="hr-light" />>
                                         <h4 className="white-text my-4">Learning may be painful but monotony will kill you. Explore new technology.</h4>
                                        <button type="button" className="btn btn-outline-white">Read more<i className="fa fa-book ml-2"></i></button>
                                    </div>
                                </div>
                            </div>
                        </Mask>
                    </View>

                </header>

                <div className="">
                    <main className="mt-5">
                        <div className="container">

                            <section id="best-features" className="text-center">
                                <h2 className="mb-5 font-weight-bold">Best Features</h2>
                                <div className="row d-flex justify-content-center mb-4">
                                    <div className="col-md-8">
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptate hic provident nulla repellat
                                            facere esse molestiae ipsa labore porro minima quam quaerat rem, natus repudiandae debitis est
              sit pariatur.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-5">
                                        <i className="fa fa-camera-retro fa-4x orange-text"></i>
                                        <h4 className="my-4 font-weight-bold">Experience</h4>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
              assumenda deleniti hic.</p>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <i className="fa fa-heart fa-4x orange-text"></i>
                                        <h4 className="my-4 font-weight-bold">Happiness</h4>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
              assumenda deleniti hic.</p>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <i className="fa fa-bicycle fa-4x orange-text"></i>
                                        <h4 className="my-4 font-weight-bold">Adventure</h4>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
              assumenda deleniti hic.</p>
                                    </div>
                                </div>
                            </section>
                            <hr className="my-5" />

                            <section id="examples" className="text-center">
                                <h2 className="mb-5 font-weight-bold">Stunning Examples</h2>
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 mb-4">
                                        <View className="z-depth-1-half">
                                            <img src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" className="img-fluid" alt="" />
                                            <Mask overlay="white-slight"></Mask>
                                        </View>
                                        <h4 className="my-4 font-weight-bold">Heading</h4>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
            assumenda deleniti hic.</p>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <View overlay="z-depth-1-half">
                                            <img src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" className="img-fluid" alt="" />
                                            <Mask overlay="white-slight"></Mask>
                                        </View>
                                        <h4 className="my-4 font-weight-bold">Heading</h4>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
            assumenda deleniti hic.</p>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <View overlay="z-depth-1-half">
                                            <img src="https://mdbootstrap.com/img/Photos/Others/images/29.jpg" className="img-fluid" alt="" />
                                            <Mask overlay="white-slight"></Mask>
                                        </View>
                                        <h4 className="my-4 font-weight-bold">Heading</h4>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
            assumenda deleniti hic.</p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-4 col-md-12 mb-4">
                                        <View overlay="z-depth-1-half">
                                            <img src="https://mdbootstrap.com/img/Photos/Others/images/10.jpg" className="img-fluid" alt="" />
                                            <Mask overlay="white-slight"></Mask>
                                        </View>
                                        <h4 className="my-4 font-weight-bold">Heading</h4>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
            assumenda deleniti hic.</p>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <View overlay="z-depth-1-half">
                                            <img src="https://mdbootstrap.com/img/Photos/Others/images/11.jpg" className="img-fluid" alt="" />
                                            <Mask overlay="white-slight"></Mask>
                                        </View>
                                        <h4 className="my-4 font-weight-bold">Heading</h4>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
            assumenda deleniti hic.</p>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <View overlay="z-depth-1-half">
                                            <img src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg" className="img-fluid" alt="" />
                                            <Mask overlay="white-slight"></Mask>
                                        </View>
                                        <h4 className="my-4 font-weight-bold">Heading</h4>
                                        <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima
            assumenda deleniti hic.</p>
                                    </div>
                                </div>
                            </section>

                            <hr className="my-5" />
                            <section id="gallery">
                                <h2 className="mb-5 font-weight-bold text-center">Gallery heading</h2>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <Carousel
                                            activeItem={1}
                                            length={4}
                                            showControls={true}
                                            showIndicators={false}
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

                                    <div className="col-md-6">
                                        <a href="" className="teal-text">
                                            <h6 className="pb-1"><i className="fa fa-heart"></i><strong> Lifestyle </strong></h6>
                                        </a>
                                        <h4 className="mb-3"><strong>This is title of the news</strong></h4>
                                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis
            debitis aut rerum.</p>
                                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis
            debitis aut rerum.</p>
                                        <p>by <a><strong>Jessica Clark</strong></a>, 26/08/2016</p>
                                        <a className="btn btn-primary btn-md">Read more</a>
                                    </div>
                                </div>
                            </section>

                            <hr className="my-5" />
                            <section id="contact">
                            </section>
                        </div>
                    </main>
                    <Squares></Squares>
                </div>
                <footer>
                    <div className="container fix-botton">
                    </div>
                </footer>
            </div>
        );
    }
}

export default MDBLayout;