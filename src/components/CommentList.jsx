import ListGroup from "react-bootstrap/ListGroup";

const CommentList = ({ comments }) => {
  return comments.map((oneComment) => {
    return (
      <ListGroup.Item key={oneComment._id}>{oneComment.comment}</ListGroup.Item>
    );
  });
};
export default CommentList;
