import React, {Component} from 'react';
import axios from "axios";
import '../../css/component/home.css';
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
            <div className="container">
                {/* get param from SearchBar */}
                <SearchBar book={this.setKeySearch} />

                <hr className="split-component" />

                {/* Set param to BooksCatalog */}
                <BooksCatalog books={this.state.listOfBooks} />
            </div>
        );
    }
}

Home.propTypes  = {
    serverURL: PropTypes.string
};

export default Home;