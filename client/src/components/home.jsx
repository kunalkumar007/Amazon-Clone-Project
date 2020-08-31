import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Home(props) {
	const [products, setproducts] = useState([]);

	useEffect(() => {
		const response = async () => {
			const { data } = await axios.get('http://localhost:5000/api/products');
			setproducts(data.products);
		};
		response();
	}, []);

	return (
		<div className="content">
			<ul className="products">
				{products.map((product) => (
					<li key={product._id}>
						<div className="product">
							<Link to={`/products/${product._id}`}>
								<img className="product-image" src={product.image} alt="product" />
							</Link>
							<div className="product-name">
								<Link to={`/products/${product._id}`}>{product.name}</Link>
							</div>
							<div className="product-brand">{product.brand}</div>
							<div className="product-price"> {product.price} </div>
							<div className="product-rating">
								{product.rating} Stars ({product.numReviews} Reviews)
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
