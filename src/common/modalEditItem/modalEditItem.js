import React, {useState} from 'react';
import '../../css/common/modalEditItem.css';
import {Button, Modal, Form} from 'react-bootstrap';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";


function ModalEditItem(props) {

    const [show, setShow] = useState(false);

    const {title,shortDescription,thumbnailUrl} = props.data;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setTitle = (e) => {
        console.log(e.target.value);
    };

    const setThumbnailUrl = (e) => {
        console.log(e.target.value);
    };

    const setShortDescription = (e) => {
        console.log(e.target.value);
    };


    const saveAndClose = () => {
        console.log("Save Books: " + title);
    };


    return (
        <React.Fragment>
            <Button className="edit-button" variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica libro {title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control size="lg"  onChange={setTitle} type="text" value={title} placeholder="Title Of Book" />
                        <br />
                        <Form.Control size="sm" onChange={setThumbnailUrl} type="text" value={thumbnailUrl} placeholder="Favicon Images" />
                        <br />
                        <Form.Control onChange={setShortDescription} className="text-area-property" value={shortDescription} as="textarea" placeholder="Description of book" rows="3" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveAndClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
}

ModalEditItem.propTypes = {};

export default ModalEditItem;