import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
import { listProducts } from '../actions/productActions';
export default function Home(props) {
	const productList = useSelector((state) => state.productList);
	const { products, loading, error } = productList;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listProducts());
	},[]);

	return (
		<>
			{loading ? (
				<div>Loading...</div>
			) : error ? (
				{ error }
			) : (
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
			)}
		</>
	);
}
