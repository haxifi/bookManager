import React, {Component} from 'react';
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
                      this.props.books.map( (item, index) => <Book key={index}  data={item} />)
                    }
                </section>
            </div>
        );
    }
}

export default BooksCatalog;