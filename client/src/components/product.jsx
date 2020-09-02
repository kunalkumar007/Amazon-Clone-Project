import React, { useEffect, useState } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProducts } from '../actions/productActions';

export default function Product(props) {
	const [qty, setqty] = useState(null);
	const productDetails = useSelector((state) => state.productDetails);
	const { products, loading, error } = productDetails;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(detailsProducts(props.match.params.id));
	}, []);

	const options = [
		
		{ value: '1', label: '1' },
		{ value: '2', label: '2' },
		{ value: '3', label: '3' },
		{ value: '4', label: '4' },
	];
	
	const handleAddToCart=()=>{
		props.history.push(`/cart/${props.match.params.id}?qty=${qty.value}`)
	}

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
					{/* {products.map((item) => ( */}
					<div className="details" key={products._id}>
						<div className="details-image">
							<img src={products.image} alt="product pic" />
						</div>
						<div className="details-info">
							<ul>
								<li>
									<h4>{products.name}</h4>
								</li>
								<li>
									{products.rating} Stars ({products.numReviews} Reviews)
								</li>
								<li>
									<b> {products.price} </b>
								</li>
								<li>
									Description:
									<div>{products.description}</div>
								</li>
							</ul>
						</div>
						<div className="details-action">
							<ul>
								<li>Price: $ {products.price}</li>
								<li>Status:{products.status}</li>
								<li>
									Qty: <Select value={qty} onChange={(e) => setqty(e)} options={options} />
								</li>
								<li>
									<button className="button primary" onClick={handleAddToCart} >Add to Cart</button>
								</li>
							</ul>
						</div>
					</div>
					{console.log(qty)}
					{/* ))} */}
				</>
			)}
		</div>
	);
}
