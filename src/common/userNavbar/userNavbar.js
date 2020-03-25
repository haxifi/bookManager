import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';

class UserNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            asLogged : false
        }

    }

    render() {
        return (
            <React.Fragment>
                <Navbar bg="light">
                    <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {
                                this.state.asLogged &&
                                <React.Fragment>
                                    Signed in as: <a href="#">Salvatore Turboli</a>
                                </React.Fragment>
                            }

                            {
                                (!this.state.asLogged) &&
                                    <React.Fragment>
                                        COMPONENT TO LOGIN HERE
                                    </React.Fragment>
                            }

                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default UserNavbar;