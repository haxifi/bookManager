import React, {Component} from 'react';
import '../../css/common/searchBar.css'
import {Container, Form,Row, Col, Button} from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {bookSearch: ""};
        this.searchBooks = this.searchBooks.bind(this);
    }

    searchBooks = (e) => {
        e.preventDefault();
        this.props.book(this.state.bookSearch);
    };

    onKeySearch = (e) => {
        if(e.key === 'Enter') this.props.book(this.state.bookSearch);
    };

    setBookSearch = (e) => {
        this.setState({bookSearch: e.target.value});
    };


    render() {
        return (
            <Container>
                <Row>
                    <Col xl={10}>
                        <Form.Control onChange={this.setBookSearch} onKeyPress={this.onKeySearch} value={this.state.bookSearch} type="text" placeholder="Books Name" />
                    </Col>

                    <Col xl={2}>
                        <Button name="search-btn" className="searchButton" onClick={this.searchBooks} variant="primary">Search</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default SearchBar;
