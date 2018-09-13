import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Fa, Button, Input } from 'mdbreact';

class ContactPageBasic extends Component {
    render() {
        return (
            <Container>
                <section className="my-5">
                    {/* <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
                    <p className="text-center w-responsive mx-auto pb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p> */}
                    <Row>
                        <Col lg="5" className="lg-0 mb-4">
                            <Card>
                                <CardBody>
                                    <div className="form-header blue accent-1">
                                        {/* <h3 className="mt-2"><Fa icon="envelope" /> Write to us:</h3> */}
                                    </div>
                                    {/* <p className="dark-grey-text">We'll write rarely, but only the best content.</p> */}
                                    <div className="md-form">
                                        <Input icon="user" label="Your name" iconClass="grey-text" type="text" id="form-name" />
                                    </div>
                                    <div className="md-form">
                                        <Input icon="envelope" label="Your email" iconClass="grey-text" type="text" id="form-email" />
                                    </div>
                                    <div className="md-form">
                                        <Input icon="tag" label="Subject" iconClass="grey-text" type="text" id="form-subject" />
                                    </div>
                                    <div className="md-form">
                                        <Input icon="pencil" label="Your message" iconClass="grey-text" type="textarea" id="form-text" />
                                    </div>
                                    <div className="text-center">
                                        <Button color="blue lighten-1">Send<i className="fa fa-paper-plane-o ml-1"></i></Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="7">
                            <div id="map-container" className="rounded z-depth-1-half map-container" style={{ height: '400px' }}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494" width="100%" height="100%" frameBorder="0" style={{ border: 0 }}></iframe>
                            </div>
                            <br />
                            <Row className="text-center">
                                <Col md="4">
                                    <Button tag="a" floating color="blue" className="accent-1">
                                        <Fa icon="map-marker" />
                                    </Button>
                                    <p>New York, 94126</p>
                                    <p className="mb-md-0">United States</p>
                                </Col>
                                <Col md="4">
                                    <Button tag="a" floating color="blue" className="accent-1">
                                        <Fa icon="phone" />
                                    </Button>
                                    <p>+ 01 234 567 89</p>
                                    <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
                                </Col>
                                <Col md="4">
                                    <Button tag="a" floating color="blue" className="accent-1">
                                        <Fa icon="envelope" />
                                    </Button>
                                    <p>info@gmail.com</p>
                                    <p className="mb-md-0">sale@gmail.com</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </section>
            </Container>
        );
    };
}

export default ContactPageBasic;