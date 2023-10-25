import { Component } from "react";
import Card from "react-bootstrap/Card";

class singleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Card
        className={this.state.selected === true && "selected-card"} // OPPURE -> {this.state.selected ? "selected-card : "" }
        onClick={() => {
          this.setState({
            selected: !this.state.selected, // OPPURE -> selected : this.state.selected ? false : true
          });
        }}
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
