import './css/App.css';
import axios from 'axios';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BooksCatalog from "./common/booksCatalog/booksCatalog";
import SearchBar from "./common/searchBar/searchBar";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {listOfBooks: [], listOfAllBooks: []}
    }


    componentDidMount() {
        const serverUrl = "http://localhost:8080/";
        axios.get(serverUrl).then((res) => {
            let data = res.data;
            this.setState({listOfBooks: data, listOfAllBooks: data})
        });
    }


    setKeySearch = (key) => {
        let result = this.state.listOfAllBooks.filter(book => book.title.toLowerCase().indexOf(key.toLowerCase()) > 1);
        if(result.length > 0) this.setState({listOfBooks: result});
    };


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Manage You Books</h1>

                    {/* get param from SearchBar */}
                    <SearchBar book={this.setKeySearch} />

                    {/* Set param to BooksCatalog */}
                    <BooksCatalog books={this.state.listOfBooks} />
                </header>
            </div>
        );
    }

}


export default App;
