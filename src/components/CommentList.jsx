import ListGroup from "react-bootstrap/ListGroup";

const CommentList = ({ comments, commentsModifyFunction }) => {


  const deleteComment = (id) => {

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI1OGUzY2Y2MTAwMzAwMTljYjk5OTQiLCJpYXQiOjE3MTA3NzIxNDYsImV4cCI6MTcxMTk4MTc0Nn0.LyZS7K4Q2SIg5FhBzqt_NuQyvLQwdqLpohtjh-BB0Z0",
      }
    })
      .then((response) => {
        if (response.ok) {
          alert("Cancellazione commento effettuata!")
          commentsModifyFunction();
        } else {
          return response.json()
            .then((errorData) => {
              throw new Error(errorData.message)
            })
        }
      })
      .catch((err) => alert(err))




  }



  return comments.map((oneComment) => {
    return (
      <div key={oneComment._id}>
        <ListGroup.Item>
          <div><strong>{oneComment.author}</strong> dice:</div>
          <p>{oneComment.comment}</p>
          Valutazione: {oneComment.rate}

          <div className="mt-2 d-flex justify-content-between">
            <div className="btn btn-danger fs-5" onClick={() => deleteComment(oneComment._id)}><i className="bi bi-trash"></i></div>
            <div className="btn btn-warning "><i className="bi bi-gear-wide-connected fs-5"></i></div>
          </div>
        </ListGroup.Item>


      </div>
    );
  });
};
export default CommentList;
