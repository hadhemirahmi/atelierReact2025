import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome, FaChartPie, FaEnvelope } from "react-icons/fa";
export default function AppNavbar() {
return (
<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
<Container>
<Navbar.Brand href="#home">MyApp</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
<Nav className="ms-auto">
<Nav.Link href="#home"><FaHome /> Accueil</Nav.Link>
<Nav.Link href="#dashboard"><FaChartPie /> Dashboard</Nav.Link>
<Nav.Link href="#contact"><FaEnvelope /> Contact</Nav.Link>
</Nav>
</Navbar.Collapse>
</Container>
</Navbar>
);
}
