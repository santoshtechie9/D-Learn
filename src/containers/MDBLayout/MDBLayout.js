import React, { Component } from 'react';
import NavbarLayout from './NavBarLayout';
import FooterLayout from './MDBFooterLayout';
import MDBHomePage from '../../components/HomePage/MDBHomePage';
import Login from '../../components/Forms/Login/Login';
import Register from '../../components/Forms/Register';
import { Route } from 'react-router-dom'

class MDBLayout extends Component {

    render() {

        return (
            <div className="app">

                <header className="mb-5">
                    <NavbarLayout />
                </header>

                <main className="mt-4">
                    <div>
                        <Route path="/" exact component={MDBHomePage}></Route>
                        <Route path="/login" exact component={Login}></Route>
                        <Route path="/register" exact component={Register}></Route>
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