import { Component } from "react";
import Card from "react-bootstrap/Card";
import CommentArea from "./CommentArea";
import AddComment from "./AddComment";

class singleBook extends Component {
  state = {
    selected: false,
    commentsModify: false,
  };

  // funzione di callback da passare ai componenti figli per fare il toggle del valore
  modifyCommentFunction = () => {
    this.setState({ commentsModify: !this.state.commentsModify });
  };

  render() {
    return (
      <Card
        className={
          (this.state.selected === true && "selected-card") + " shadow-lg"
        } /* OPPURE -> {this.state.selected ? "selected-card : ""  }*/
      >
        <Card.Img
          className="pointer"
          onClick={() => {
            this.setState({
              selected: !this.state.selected, // OPPURE -> selected : this.state.selected ? false : true
            });
          }}
          style={{ height: "300px" }}
          variant="top"
          src={this.props.oneBook.img}
        />
        <Card.Body>
          <Card.Title>{this.props.oneBook.title}</Card.Title>

          {this.state.selected && (
            <div>
              <p>Commenti:</p>

              <CommentArea
                bookAsin={this.props.oneBook.asin}
                commentsModify={this.state.commentsModify}
                commentsModifyFunction={this.modifyCommentFunction}
              />

              <AddComment
                bookAsin={this.props.oneBook.asin}
                commentsModify={this.modifyCommentFunction}
              />
            </div>
          )}
        </Card.Body>
      </Card>
    );
  }
}
export default singleBook;
