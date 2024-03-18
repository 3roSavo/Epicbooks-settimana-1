import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import Form from "react-bootstrap/Form";
import { Component } from "react";

class bookList extends Component {
  state = {
    nameBook: "",
  };
  render() {
    return (
      <>
        <Form.Control
          className="ms-auto me-auto mb-3 border-3 w-75"
          placeholder="Inserisci qui il libro"
          value={this.state.nameBook}
          onChange={(e) => {
            this.setState({
              nameBook: e.target.value,
            });
          }}
        />

        <Row>
          {this.props.booksArray
            .filter((book) => {
              return book.title
                .toLowerCase()
                .includes(this.state.nameBook.toLowerCase());
            })
            .map((book) => {
              return (
                <Col xs={12} sm={6} md={4} xl={3} key={book.asin}>
                  <SingleBook oneBook={book} />
                </Col>
              );
            })}
        </Row>
      </>
    );
  }
}
export default bookList;
