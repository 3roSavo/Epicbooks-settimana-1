// import fantasyBooks from "../books/fantasy.json"
// import historyBooks from "../books/history.json"
// import horrorBooks from "../books/horror.json"
// import romanceBooks from "../books/romance.json"
import scifiBooks from "../books/scifi.json";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// OPPURE
// import { Card, Col, Row } from "react-bootstrap";

const renderBooks = () => {
  return (
    <Row>
      {scifiBooks.map((book) => {
        return (
          <Col xs={2} sm={2} md={2} key={book.asin}>
            <Card className="card-box mb-3">
              <Card.Img className="card-images" variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>Prezzo : {book.price}$</Card.Text>
                <Card.Text>Category : {book.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};
export default renderBooks;

// Oppure

// const renderBooks = () => {
//   return (
//     <div className="row">
//       {scifiBooks.map((book) => {
//         return (
//           <div className="col-6 col-md-4 col-lg-3" key={book.asin}>
//             <div className="card">
//               <img src={book.img} className="card-img-top" alt="cover-book" />
//               <div className="card-body">
//                 <h5 className="card-title">Card title</h5>
//                 <p className="card-text">
//                   Some quick example text to build on the card title and make up
//                   the bulk of the card's content.
//                 </p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default renderBooks;
