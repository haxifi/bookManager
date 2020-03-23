import React, {Component} from 'react';
import axios from "axios";
import SearchBar from "../../common/searchBar/searchBar";
import BooksCatalog from "../../common/booksCatalog/booksCatalog";
import PropTypes from 'prop-types';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {listOfBooks: [], listOfAllBooks: []}
    }

    componentDidMount() {
        const serverUrl = this.props.serverURL;
        axios.get(serverUrl).then((res) => {
            let data = res.data;
            this.setState({listOfBooks: data, listOfAllBooks: data})
        });
    }


    setKeySearch = (key) => {
        let result = this.state.listOfAllBooks.filter(book => book.title.toLowerCase().indexOf(key.toLowerCase()) !== -1);
        if(result.length > 0) this.setState({listOfBooks: result});
    };



    render() {
        return (
            <React.Fragment>
                <h1>Manage You Books</h1>

                {/* get param from SearchBar */}
                <SearchBar book={this.setKeySearch} />

                {/* Set param to BooksCatalog */}
                <BooksCatalog books={this.state.listOfBooks} />
            </React.Fragment>
        );
    }
}

Home.propTypes  = {
    serverURL: PropTypes.string
};

export default Home;