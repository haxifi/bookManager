import React, {Component} from 'react';
import '../../css/common/book.css'
import {Card, Button, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import ModalEditItem from "../modalEditItem/modalEditItem";


class Book extends Component {
    constructor(props) {
        super(props);
       this.state = this.props.data;
    }

    changeValue = (e) => {
        e.preventDefault();
        console.log("ISBN: "+ this.state.isbn);
        this.setState({
            title: 'Unlocking Android',
            shortDescription: 'Unlocking Android: A Developer\'s Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.',
            thumbnailUrl: 'https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg'
        })
    };




    componentWillReceiveProps(nextProps, nextContext) {
        this.state = nextProps.data;
    }




    render() {
        const {thumbnailUrl,title, shortDescription} = this.state;
        return (
            <Card className="stock col-md-4 p-4 card-property" style={{width: '18rem'}}>
                <div>
                    <Card.Img variant="top" src={thumbnailUrl} />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <div className="edit-position">
                        <hr />
                        <Row>
                            <Col><Button className="update-button" variant="warning" onClick={this.changeValue}><FontAwesomeIcon icon={faBook} /> Update</Button></Col>
                            <Col><ModalEditItem data={this.state} /></Col>
                        </Row>

                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default Book;