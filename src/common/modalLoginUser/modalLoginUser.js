import React, {useState} from 'react';
import axios from "axios";
import  {Button,FormLabel,Modal,Form, Alert} from 'react-bootstrap';

function ModalLoginUser(props) {

    const [show, setShow] = useState(false);

    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("password");

    const [failLogin, setFailLogin] = useState(false);
    const [failMessage, setFailMessage] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loginButton = (e) => {
        e.preventDefault();

        axios.post(localStorage.getItem("apiURL"),
            {"username": username, "password": password},
            {headers: {'Content-type': 'application/json'}
            }).then((res) => {
                if(res.data.success) {
                    setFailLogin(false);
                    localStorage.setItem("tokenJwt", res.data.token);
                    localStorage.setItem("loggedUser", res.data.user);
                    localStorage.setItem("asLogged", "true");
                    setShow(false);
                    props.loggedStatus(true);
                }else{
                    setFailLogin(true);
                    setFailMessage(res.data.message);
                }

        });

    };

    const onChangeText = (e) => {
          if(e.target.name === "username") setUsername(e.target.value);
          if(e.target.name === "password") setPassword(e.target.value);
    };

    return (
        <React.Fragment>
            <a href="/#" onClick={handleShow}>Login</a>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {
                        failLogin &&
                        <Alert variant="danger">
                            {failMessage}
                        </Alert>
                    }

                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control value={username} name="username" onChange={onChangeText} type="text" placeholder="Enter Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control value={password} name="password" onChange={onChangeText} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group>
                            <FormLabel>
                                Default is: username: <b>admin</b> and password: <b>password</b>
                            </FormLabel>
                        </Form.Group>

                        <Button style={{width: '100%'}} onClick={loginButton} variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );

}

export default ModalLoginUser;
