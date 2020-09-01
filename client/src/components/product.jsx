import React, { useEffect, useState } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProducts } from '../actions/productActions';

export default function Product(props) {
	const [qty, setqty] = useState(1);
	const productDetails = useSelector((state) => state.productDetails);
	const { products, loading, error } = productDetails;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(detailsProducts(props.match.params.id));
	}, []);

	return (
		<div>
			<Link to="/" className="back-to-result">
				Back to results
			</Link>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				<div> {error} </div>
			) : (
				<>
					{console.log(products)}
					{products.map((item) => (
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
										Qty:{' '}
										<select value={qty} onChange={(e) => setqty(e.target.value)}>
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
				</>
			)}
		</div>
	);
}
