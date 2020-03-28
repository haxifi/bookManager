import './css/App.css';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/home";
import UserNavbar from "./common/userNavbar/userNavbar";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {asLogged: false};

        let host = "192.168.0.8";

        localStorage.setItem("apiURL", "http://"+ host +":8080");
        localStorage.setItem("baseURL", "http://"+ host +":3000");
    }

    asLogged = (logged) => {
        this.setState({asLogged: logged});
    };


    render() {
        return (
            <div className="App">
                <UserNavbar logged={this.asLogged} title="Manage You book" />
                <header className="App-header">
                    <Home  logged={this.state.asLogged} />
                </header>
            </div>
        );
    }

}


export default App;
