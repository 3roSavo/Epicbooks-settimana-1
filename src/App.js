import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllTheBooks from "./components/AllTheBooks";
// import SingleBook from "./components/SingleBook";
import scifiBooks from "./books/scifi.json";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <div className="container-fluid">
        <header>
          <MyNav />
        </header>

        <Welcome />

        {/* <AllTheBooks></AllTheBooks> */}
        {/* <SingleBook booksArray={scifiBooks[0]} /> */}
        <BookList booksArray={scifiBooks} />
      </div>

      <MyFooter />
    </>
  );
}

export default App;
