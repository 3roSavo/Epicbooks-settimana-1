import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";

const bookList = (prop) => {
  return (
    <Row>
      {prop.booksArray.map((book) => {
        return (
          <Col xs={6} sm={4} md={3} key={book.asin}>
            <SingleBook oneBook={book} />
          </Col>
        );
      })}
    </Row>
  );
};
export default bookList;
