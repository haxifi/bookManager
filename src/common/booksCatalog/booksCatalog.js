import React, {Component} from 'react';
import '../../css/common/booksCatalog.css';
import Book from "../book/book";


class BooksCatalog extends Component {



    render() {
        /*
        todo:: i use this trick to edit and add param to json
        var result = ``;
        this.props.books.map((item, index) =>  {
            result += `
              {
                "id": "${index}",
                "title": "${item.title}",
                "isbn": "${item.isbn}",
                "pageCount": "${item.pageCount}",
                "thumbnailUrl": "${item.thumbnailUrl}",
                "shortDescription": "${item.shortDescription === undefined ? 'No Description' : item.longDescription.replace(/"/g,"'")}",
                "longDescription": "${item.longDescription === undefined ? 'No Description' : item.longDescription.replace(/"/g,"'")}",
                "status": "${item.status}",
                "authors": "[${item.authors}]",
                "categories": "${item.categories}"
              },`
        });
        console.log(result);
         */
        return (
            <div className="col-xl-12">
                <section className="row">
                    {
                        // JSON.parse convert String boolean to boolean
                        JSON.parse(localStorage.getItem("asLogged")) && this.props.books.map( (item, index) => <Book key={item.id}  data={item} />)
                    }
                    {
                        !JSON.parse(localStorage.getItem("asLogged")) &&
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
