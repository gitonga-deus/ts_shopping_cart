import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
	return (
		<NavbarBs sticky="top" className="bg-white mb-4">
			<Container>
				<Nav className="me-auto nav-tabs">
					{/* <Nav.Link to="/" as={NavLink}>Home</Nav.Link> */}
					<Nav.Link to="/about" as={NavLink}>About</Nav.Link>
					<Nav.Link to="/shorts" as={NavLink}>Shorts</Nav.Link>
					<Nav.Link to="/hoods" as={NavLink}>Hoods</Nav.Link>
				</Nav>
				<Button style={{
					position: "relative", fontSize: "20px", padding: "5px 20px 5px 20px"
				}} variant="outline-secondary">
					<AiOutlineShoppingCart /> {" "}
				</Button>
			</Container>
		</NavbarBs>
	)
}