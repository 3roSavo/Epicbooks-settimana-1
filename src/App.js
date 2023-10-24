import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
function App() {
  return (
    <>
      <div className="container">
        <header>
          <MyNav />
        </header>

        <Welcome />

        <AllTheBooks></AllTheBooks>
      </div>

      <MyFooter />
    </>
  );
}

export default App;
