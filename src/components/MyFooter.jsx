import { Component } from "react";
import { Nav } from "react-bootstrap";

class footer extends Component {
render() {
return (
<div class="container-fluid position-fixed bottom-0">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">© 2021 Company, Inc</p>

        <a href="/"
            class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32">
                {/* <use xlink:href="#bootstrap"></use> */}
            </svg>
        </a>

        <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item">
                <Nav.Link href="#" className="px-2 text-muted">
                    Home
                </Nav.Link>
            </li>
            <li class="nav-item">
                <Nav.Link href="#" className="px-2 text-muted">
                    Features
                </Nav.Link>
            </li>
            <li class="nav-item">
                <Nav.Link href="#" className="px-2 text-muted">
                    Pricing
                </Nav.Link>
            </li>
            <li class="nav-item">
                <Nav.Link href="#" className="px-2 text-muted" HTMLalt="dew">
                    FAQs
                </Nav.Link>
            </li>
            <li class="nav-item">
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