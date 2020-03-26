import React, {useState} from 'react';
import axios from "axios";
import  {Button, Modal,Form} from 'react-bootstrap';

function ModalLoginUser() {

    const [show, setShow] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const loginButton = (e) => {
        e.preventDefault();
        console.log("Post to localhost");
    };

    const onChangeText = (e) => {
          if(e.target.name === "username") setUsername(e.target.value);
          if(e.target.name === "password") setPassword(e.target.value);
    };

    return (
        <React.Fragment>

            <a href="#" onClick={handleShow}>Login</a>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Login Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control value={username} name="username" onChange={onChangeText} type="text" placeholder="Enter Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control value={password} name="password" onChange={onChangeText} type="password" placeholder="Password" />
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