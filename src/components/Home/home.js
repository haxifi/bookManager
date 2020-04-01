import React, {Component} from 'react';
import axios from "axios";
import '../../css/component/home.css';
import SearchBar from "../../common/searchBar/searchBar";
import BooksCatalog from "../../common/booksCatalog/booksCatalog";
import PropTypes from 'prop-types';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listOfBooks: [], listOfAllBooks: [], asLogged: props.logged
        };
    }

    componentDidMount() {
        if(this.state.asLogged)  this.getAllBooks();
    }

    static getDerivedStateFromProps(props, state) {
        if(props.logged !== state.asLogged) {
            return {
                asLogged: props.logged
            }
        }else {
            return  null;
        }
    }



    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.asLogged) {
            if(this.state !== prevState) this.getAllBooks();
        }
    }


    getAllBooks = () => {
        console.log("getAllBooks");

        let serverUrl = localStorage.getItem("apiURL");
        axios.get(serverUrl,{
            headers: {
                'Authorization' : 'Bearer ' + localStorage.getItem("tokenJwt")
            }
        }).then((res) => {
            let data = res.data;
            console.log(data);
            console.log(this.state.listOfBooks);

            if(this.state.listOfBooks.length !== data.length) this.setState({listOfBooks: data, listOfAllBooks: data})
        });

    };

    setKeySearch = (key) => {
        let result = this.state.listOfAllBooks.filter(book => book.title.toLowerCase().indexOf(key.toLowerCase()) !== -1);
        if(result.length > 0) this.setState({listOfBooks: result});
    };


    render() {
        return (
            <div className="container">
                {/* get param from SearchBar */}
                <SearchBar book={this.setKeySearch} />

                {/*To Divide SearchBar from BooksCatalog*/}
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
