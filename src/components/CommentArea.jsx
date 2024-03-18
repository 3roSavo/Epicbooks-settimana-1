import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    commenti: [],
  };

  getComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.bookAsin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjkzNWY2ZTNkZDAwMTQ5NWU0NjMiLCJpYXQiOjE2OTgzMjY4MzcsImV4cCI6MTY5OTUzNjQzN30.3F0SFD0YaApxvUgfIKdtUCWZ3vRBkfg7b3O6dgWHrdk",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei commenti");
        }
      })
      .then((commentsArray) => {
        this.setState({
          commenti: commentsArray,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <ListGroup>
        <CommentList comments={this.state.commenti} />
      </ListGroup>
    );
  }
}
export default CommentArea;
