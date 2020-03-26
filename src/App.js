import './css/App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/home";
import UserNavbar from "./common/userNavbar/userNavbar";


class App extends Component {

    constructor(props) {
        super(props);

        localStorage.setItem("baseURL", "http://localhost:8080");

        //localStorage.setItem("asLogged", "false");
        //localStorage.setItem("tokenJwt", "");
    }

    render() {
        return (
            <div className="App">
                <UserNavbar title="Manage You book" />
                <header className="App-header">
                    <Home  />
                </header>
            </div>
        );
    }

}


export default App;
