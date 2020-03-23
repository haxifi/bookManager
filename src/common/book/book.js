import React, {Component} from 'react';
import '../../css/common/book.css'
import {Card, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


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



    shouldComponentUpdate(nextProps, nextState, nextContext) {
        this.state = nextProps.data;
        console.log(nextProps.data);
        console.log(this.state);
        return this.render();
    }



    render() {
        return (
            <Card className="stock col-md-2 p-4 card-property" style={{width: '18rem'}}>
                <div>
                    <Card.Img variant="top" src={this.state.thumbnailUrl} />
                </div>
                <Card.Body>
                    <Card.Title>{this.state.title}</Card.Title>
                    <Card.Text>
                        {this.state.shortDescription}
                    </Card.Text>
                    <div className="edit-position">
                        <hr />
                        <Button variant="warning" onClick={this.changeValue}><FontAwesomeIcon icon={faEdit} /> Update</Button>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}

export default Book;