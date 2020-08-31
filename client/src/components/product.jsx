import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

export default function Product(props) {
	// console.log(props.match.params.id);
	const product = data.products.filter((item) => item._id === props.match.params.id);
	// console.log(product);
	return (
		<div>
			<Link to="/" className="back-to-result">
				Back to results
			</Link>
			{product.map((item) => (
				<div className="details" key={item._id}>
					<div className="details-image">
						<img src={item.image} alt="product pic" />
					</div>
					<div className="details-info">
						<ul>
							<li>
								<h4>{item.name}</h4>
							</li>
							<li>
								{item.rating} Stars ({item.numReviews} Reviews)
							</li>
							<li>
								<b> {item.price} </b>
							</li>
							<li>
								Description:
								<div>{item.description}</div>
							</li>
						</ul>
					</div>
					<div className="details-action">
						<ul>
							<li>Price: $ {item.price}</li>
							<li>Status:{item.status}</li>
							<li>
								Qty:
								<select>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								</select>
							</li>
							<li>
								<button className="button primary">Add to Cart</button>
							</li>
						</ul>
					</div>
				</div>
			))}
		</div>
	);
}
