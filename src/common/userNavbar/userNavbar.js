import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import ModalLoginUser from "../modalLoginUser/modalLoginUser";

class UserNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            asLogged : false
        }

    }


    setLogged = (logged) => {
        this.setState({asLogged: logged});
        this.props.logged(logged);
    };


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
                                    Signed in as: <b>{localStorage.getItem("loggedUser")}</b> - <a href={localStorage.getItem("baseURL")}>Logout</a>
                                </React.Fragment>
                            }

                            {
                                (!this.state.asLogged) &&
                                    <React.Fragment>
                                        <ModalLoginUser loggedStatus={this.setLogged} />
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
