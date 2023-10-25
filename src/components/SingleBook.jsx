import { Component } from "react";
import Card from "react-bootstrap/Card";

class singleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        onClick={this.setState({
          selected,
        })}
      >
        <Card.Img
          style={{ height: "300px" }}
          variant="top"
          src={this.props.oneBook.img}
        />
        <Card.Body>
          <Card.Title>{this.props.oneBook.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default singleBook;
