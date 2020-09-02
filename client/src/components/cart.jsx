import React from 'react';
import { useDispatch } from 'react-redux';

export default function Cart(props) {
	const productId = props.match.params.id;
	const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
	const dispatch = useDispatch();

	React.useEffect(() => {
		if (productId) {
			dispatch(addToCart(productId, qty));
		}
	}, []);

	return <div>Cart Screen</div>;
}
