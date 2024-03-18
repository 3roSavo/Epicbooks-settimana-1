import ListGroup from "react-bootstrap/ListGroup";

const CommentList = ({ comments }) => {
  return comments.map((oneComment) => {
    return (
      <ListGroup.Item key={oneComment._id}>
        <p>{oneComment.comment}</p>
        Valutazione: {oneComment.rate}
      </ListGroup.Item>
    );
  });
};
export default CommentList;
