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
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI1OGUzY2Y2MTAwMzAwMTljYjk5OTQiLCJpYXQiOjE3MTA3NzIxNDYsImV4cCI6MTcxMTk4MTc0Nn0.LyZS7K4Q2SIg5FhBzqt_NuQyvLQwdqLpohtjh-BB0Z0",
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.commentsModify !== this.props.commentsModify) {
      console.log(prevProps.commentsModify);
      console.log(this.props.commentsModify);
      //alert("Lo stato è stato aggiornato");
      this.getComments();
    }
  }

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <ListGroup className=" my-3">
        <CommentList comments={this.state.commenti} commentsModifyFunction={this.props.commentsModifyFunction} />
      </ListGroup>
    );
  }
}
export default CommentArea;
