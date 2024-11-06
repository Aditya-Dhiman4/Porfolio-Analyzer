import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand className="w-50 p-3 text-center" href="#home">
          Portfolio Analyzer
        </Navbar.Brand>
        <Navbar.Brand className="w-50 p-3 text-center" href="#">
          Stock Analyzer
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
