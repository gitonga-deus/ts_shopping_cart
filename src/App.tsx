import { Routes, Route } from "react-router-dom"

// Pages
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Store } from "./pages/Store"

// Bootstrap
import { Container } from "react-bootstrap"

const App = () => {
	return (
		<Container className="mb-4">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/store" element={<Store />} />
			</Routes>
		</Container>
	)
}

export default App;