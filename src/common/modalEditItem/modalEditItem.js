import React, {useState} from 'react';
import '../../css/common/modalEditItem.css';
import {Button, Modal, Form} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";


function ModalEditItem(props) {

    const [show, setShow] = useState(false);

    const [title, setTitle] = useState(props.data.title);
    const [thumbnailUrl, setThumbnailUrl] = useState(props.data.thumbnailUrl);
    const [shortDescription, setShortDescription] = useState(props.data.shortDescription);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const onChangeText = (e) => {
        switch (e.target.name) {
            case 'title':
                setTitle(e.target.value);
                break;
            case 'shortDescription':
                setShortDescription(e.target.value);
                break;
            case 'thumbnailUrl':
                setThumbnailUrl(e.target.value);
                break
        }
    };

    const saveAndClose = () => {
        props.setTitle(title);
        props.setShortDescription(shortDescription);
        props.setThumbnailUrl(thumbnailUrl);

        setShow(false);
    };



    console.log(props.data);
    return (
        <React.Fragment>
            <Button className="edit-button" variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modifica libro {props.data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Control size="lg"  name="title" onChange={onChangeText} type="text" value={title} placeholder="Title Of Book" />
                        <br />
                        <Form.Control size="sm"  name="thumbnailUrl" onChange={onChangeText} type="text" value={thumbnailUrl} placeholder="Favicon Images" />
                        <br />
                        <Form.Control name="shortDescription" onChange={onChangeText} className="text-area-property" value={shortDescription} as="textarea" placeholder="Description of book" rows="3" />
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
