import { useState } from "react";

const AddComment = ({ bookAsin, commentsModify }) => {
  const [star1, setStar1] = useState(false);
  const [star2, setStar2] = useState(false);
  const [star3, setStar3] = useState(false);
  const [star4, setStar4] = useState(false);
  const [star5, setStar5] = useState(false);

  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "1",
    elementId: bookAsin,
  });

  const saveComment = (event) => {
    event.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI1OGUzY2Y2MTAwMzAwMTljYjk5OTQiLCJpYXQiOjE3MTA3NzIxNDYsImV4cCI6MTcxMTk4MTc0Nn0.LyZS7K4Q2SIg5FhBzqt_NuQyvLQwdqLpohtjh-BB0Z0",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((errorData) => {
            throw new Error(errorData.message);
          });
        }
      })
      .then((data) => {

        console.log(data);

        alert("caricamento commento andato a buon fine");

        commentsModify();

        setNewComment({
          comment: "",
          rate: "1",
          elementId: bookAsin,
        })

        setStar1(true);
        setStar2(false);
        setStar3(false);
        setStar4(false);
        setStar5(false);
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  return (
    <div className=" border-top pt-2 border-3 ">
      <div className=" text-center mb-2">AGGIUNTA COMMENTI</div>

      <form onSubmit={saveComment}>
        <textarea
          className=" w-100 "
          type="text"
          placeholder="Inserisci commento"
          value={newComment.comment}
          onChange={(e) => {
            setNewComment({
              ...newComment,
              comment: e.target.value,
            });
          }}
        ></textarea>

        <div className="text-center">Valutazione✨</div>

        <div className="text-center my-2">
          <i
            id="star1"
            className="me-2 star-icon bi bi-star-fill"
            onClick={() => {
              setStar1(true);
              setStar2(false);
              setStar3(false);
              setStar4(false);
              setStar5(false);
              setNewComment({
                ...newComment,
                rate: "1",
              });
            }}
          ></i>
          <i
            id="star2"
            className={"mx-2 star-icon bi bi-star" + (star2 ? "-fill" : "")}
            onClick={() => {
              setStar1(true);
              setStar2(true);
              setStar3(false);
              setStar4(false);
              setStar5(false);
              setNewComment({
                ...newComment,
                rate: "2",
              });
            }}
          ></i>
          <i
            id="star3"
            className={"mx-2 star-icon bi bi-star" + (star3 ? "-fill" : "")}
            onClick={() => {
              setStar1(true);
              setStar2(true);
              setStar3(true);
              setStar4(false);
              setStar5(false);
              setNewComment({
                ...newComment,
                rate: "3",
              });
            }}
          ></i>
          <i
            id="star4"
            className={"mx-2 star-icon bi bi-star" + (star4 ? "-fill" : "")}
            onClick={() => {
              setStar1(true);
              setStar2(true);
              setStar3(true);
              setStar4(true);
              setStar5(false);
              setNewComment({
                ...newComment,
                rate: "4",
              });
            }}
          ></i>
          <i
            id="star5"
            className={"mx-2 star-icon bi bi-star" + (star5 ? "-fill" : "")}
            onClick={() => {
              setStar1(true);
              setStar2(true);
              setStar3(true);
              setStar4(true);
              setStar5(true);
              setNewComment({
                ...newComment,
                rate: "5",
              });
            }}
          ></i>
        </div>

        <div className="text-center">
          <button className="btn btn-success">Invia</button>
        </div>
      </form>
    </div>
  );
};
export default AddComment;
