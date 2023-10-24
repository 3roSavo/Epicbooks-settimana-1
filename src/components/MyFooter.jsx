import { Component } from "react";
import { Nav } from "react-bootstrap";

class footer extends Component {
  render() {
    return (
      <div className="w-100">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <p className="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>

          <a
            href="/"
            className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              {/* <use xlink:href="#bootstrap"></use> */}
            </svg>
          </a>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Nav.Link href="#" className="px-2 text-muted">
                Home
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#" className="px-2 text-muted">
                Features
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#" className="px-2 text-muted">
                Pricing
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#" className="px-2 text-muted" htmlalt="dew">
                FAQs
              </Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="#" className="px-2 text-muted">
                About
              </Nav.Link>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
export default footer;
