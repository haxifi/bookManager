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

    setTitle = (title) => {
      this.setState({title: title});
    };

    setShortDescription = (shortDescription) => {
        this.setState({shortDescription: shortDescription});
    };

    setThumbnailUrl = (thumbnailUrl) => {
        this.setState({thumbnailUrl:thumbnailUrl});
    };


    static getDerivedStateFromProps(props, state) {
        if(props.data !== state) {
            return props.data
        }else{
            return  null;
        }
    }

    resetValue = (e) => {
        e.preventDefault();

        const {title,shortDescription, thumbnailUrl } = this.props.data;

        this.setState({
            title: title,
            shortDescription: shortDescription,
            thumbnailUrl: thumbnailUrl
        })
    };


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
                            <Col><Button className="update-button" variant="warning" onClick={this.resetValue}><FontAwesomeIcon icon={faBook} /> Reset</Button></Col>
                            <Col><ModalEditItem setTitle={this.setTitle} setShortDescription={this.setShortDescription}  setThumbnailUrl={this.setThumbnailUrl}  data={this.state} /></Col>
                        </Row>

                    </div>
                </Card.Body>
            </Card>
        );
    }
}



export default Book;
