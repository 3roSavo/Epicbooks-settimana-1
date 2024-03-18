import { useState } from "react";
import { Spinner } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const CommentList = ({ comments, commentsModifyFunction }) => {

  const [loading, setLoading] = useState(false)

  const deleteComment = (id) => {

    setLoading(true)

    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI1OGUzY2Y2MTAwMzAwMTljYjk5OTQiLCJpYXQiOjE3MTA3NzIxNDYsImV4cCI6MTcxMTk4MTc0Nn0.LyZS7K4Q2SIg5FhBzqt_NuQyvLQwdqLpohtjh-BB0Z0",
      }
    })
      .then((response) => {
        if (response.ok) {
          setLoading(false)
          alert("Cancellazione commento effettuata!")
          commentsModifyFunction();
        } else {
          return response.json()
            .then((errorData) => {
              throw new Error(errorData.message)
            })
        }
      })
      .catch((err) => {
        setLoading(false)
        alert(err)
      })

  }

  return (
    <div>

      {comments.map((oneComment) => {
        return (
          <div key={oneComment._id} className=" mb-1">
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
        )
      })}

      {loading && <div className="text-center mt-3 mb-2"><Spinner animation="border" style={{ color: "rgb(62, 118, 206)" }} /></div>}

    </div>
  )
};
export default CommentList;
