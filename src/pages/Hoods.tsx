import { StoreItem } from "../components/StoreItem"

import { Row, Col } from "react-bootstrap"
import storeItems from "../data/hoods.json"

export const Hoods = () => {
	return (
		<>
			<h1>Hoods</h1>
			<Row md={2} xs={1} lg={3} className="g-3">
				{storeItems.map((item) => (
					<Col key={item.id}>
						<StoreItem {...item} />
					</Col>
				))}
			</Row>
		</>
	)
}