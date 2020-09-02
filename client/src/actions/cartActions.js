const { default: Axios } = require('axios');

const cartActions = (productId, qty) => async (dispatch) => {
	try {
		const { data } = await Axios.get(`http://localhost:5000/api/products${productId}`);
		dispatch({
			type: CART_ADD_ITEM,
			payload: {
				product: data._id,
				name: data.name,
				image: data.image,
				price: data.price,
				countInStock: data.countInStock,
			},
		});
	} catch (error) {}
};
