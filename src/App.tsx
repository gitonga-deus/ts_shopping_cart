import { Routes, Route } from "react-router-dom"

// Pages
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Shorts } from "./pages/Shorts"
import { Hoods } from "./pages/Hoods"

// Components
import { Navbar } from "./components/Navbar"

// Bootstrap
import { Container } from "react-bootstrap"

const App = () => {
	return (
		<>
			<Navbar />
			<Container className="mb-4">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/shorts" element={<Shorts />} />
					<Route path="/hoods" element={<Hoods />} />
				</Routes>
			</Container>
		</>
	)
}

export default App;