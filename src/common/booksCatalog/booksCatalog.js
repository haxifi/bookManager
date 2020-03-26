import React, {Component} from 'react';
import '../../css/common/booksCatalog.css';
import Book from "../book/book";


class BooksCatalog extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-xl-12">
                <section className="row">
                    {
                        localStorage.getItem("asLogged") && this.props.books.map( (item, index) => <Book key={index}  data={item} />)
                    }
                    {
                        !localStorage.getItem("asLogged") &&
                            <div className="not-logged-box">
                                <h1>You are not logged !</h1>
                            </div>
                    }

                </section>
            </div>
        );
    }
}

export default BooksCatalog;